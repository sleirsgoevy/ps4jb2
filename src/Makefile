all: ../jb.js ../netcat.js

../jb.js: jb.c printf_stub.c fixup.rop
	8cc/8cc/python/rop-ps4-8cc /dev/stdout 8cc/librop/*.c printf_stub.c 8cc/ps4/*.c jb.c fixup.rop | python3 8cc/bad_hoist/rop/compiler.py /dev/stdin 8cc/bad_hoist/dumps/gadgets.txt > ../jb.js

../netcat.js: netcat.c
	8cc/8cc/python/rop-ps4-8cc /dev/stdout 8cc/librop/*.c 8cc/ps4/*.c netcat.c | python3 8cc/bad_hoist/rop/compiler.py /dev/stdin 8cc/bad_hoist/dumps/gadgets.txt > ../netcat.js

clean:
	rm -f ../jb.js ../netcat.js
