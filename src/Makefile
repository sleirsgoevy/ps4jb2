all: ../jb.js ../netcat.js

../jb.js: jb.c printf_stub.c fixup.rop kexec_helper.rop
	8cc/8cc/python/rop-ps4-8cc /dev/stdout 8cc/librop/*.c printf_stub.c 8cc/ps4/*.c jb.c fixup.rop kexec_helper.rop | python3 8cc/bad_hoist/rop/compiler.py /dev/stdin 8cc/bad_hoist/dumps/gadgets.txt > ../jb.js

../netcat.js: netcat.c
	8cc/8cc/python/rop-ps4-8cc /dev/stdout 8cc/librop/*.c 8cc/ps4/*.c netcat.c | python3 8cc/bad_hoist/rop/compiler.py /dev/stdin 8cc/bad_hoist/dumps/gadgets.txt > ../netcat.js

kexec_helper.bin: kexec_helper.asm
	yasm kexec_helper.asm -o kexec_helper.bin

kexec_helper.rop: kexec_helper.bin
	( echo '_kexec_helper_bin:'; echo -n 'db '; xxd -i < kexec_helper.bin | tr -d '\n'; echo; echo '_kexec_helper_end:'; ) > kexec_helper.rop

clean:
	rm -f ../jb.js ../netcat.js kexec_helper.rop kexec_helper.bin
