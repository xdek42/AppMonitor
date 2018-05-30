Java.perform(function() {
    var cipher = Java.use("javax.crypto.Cipher");
    if (cipher) {
        cipher.getInstance.overloads[0].implementation = function(transformation) {
            console.log("call Cipher.getInstance for " + transformation);
            return this.getInstance.overloads[0].apply(this, arguments);
        }
        cipher.getInstance.overloads[1].implementation = function(transformation) {
            console.log("call Cipher.getInstance for " + transformation);
            return this.getInstance.overloads[1].apply(this, arguments);
        }
        cipher.getInstance.overloads[2].implementation = function(transformation) {
            console.log("call Cipher.getInstance for " + transformation);
            return this.getInstance.overloads[2].apply(this, arguments);
        }
    }
});