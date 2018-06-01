Java.perform(function() {
    var file = Java.use("java.io.File");
    if (file) {
        file.delete.implementaion = function() {
            send("call File.delete");
            return this.delete.apply(this, arguments);
        };
    }
});