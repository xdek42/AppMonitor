var c_open = Module.findExportByName("libc.so", "open");
if (c_open) {
    Interceptor.attach(c_open, {
        onEnter : function(args) {
            send("call libc->open");
        },
        onLeave : function(retval) {
        }
    });
}