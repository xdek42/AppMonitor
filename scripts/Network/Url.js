Java.perform(function() {
    var url = Java.use("java.net.URL");
    if (url) {
        //hook openConnection
        url.openConnection.overloads[0].implementation = function () {
            send("call openConnection");
            return this.openConnection.overloads[0].apply(this, arguments);
        };
        url.openConnection.overloads[1].implementation = function () {
            send("call openConnection");
            return this.openConnection.overloads[1].apply(this, arguments);
        };
        //hook openStream
        url.openStream.implementation = function() {
            send("call openStream");
            return this.openStream.apply(this, arguments);
        };
    }
});
