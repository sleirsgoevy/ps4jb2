use64

;; args
;; rdi overwritten
;; rsi = cpy64 src
;; rdx = cpy64 dst
;; rcx = where to store gs:0
start:
lea rdi, [rel kernel_entry]
mov rax, 11
syscall
ret

kernel_entry:
mov rsi, [rsi+8]
lodsq
mov rcx, [rax]
lodsq
mov [rax], rcx
lodsq
mov rcx, [gs:0]
mov [rax], rcx
xor eax, eax
ret

align 8
