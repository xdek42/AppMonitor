Java.perform(function() {
    var contentProvider = Java.use("android.content.ContentProvider");
    if (contentProvider) {
        //hook query
        contentProvider.query.overloads[0].implementation = function() {
            send("call ContentProvider.query");
            return this.query.overloads[0].apply(this, arguments);
        };
        contentProvider.query.overloads[1].implementation = function() {
            send("call ContentProvider.query");
            return this.query.overloads[1].apply(this, arguments);
        };
        //hook delete
        contentProvider.delete.implementation = function() {
            send("call ContentProvider.delete");
            return this.delete.apply(this, arguments);
        };
    }
});