Java.perform(function() {
    var device = Java.use("android.app.admin.DevicePolicyManager");
    if (device) {
        //hook isAdminActive
        device.isAdminActive.implementation = function() {
            send("call isAdminActive");
            return this.isAdminActive.apply(this, arguments);
        };
        //hook resetPassword
        device.resetPassword.implementation = function() {
            send("call resetPassword");
            return this.resetPassword.apply(this, arguments);
        };
        //hook lockNow
        device.lockNow.implementation = function() {
            send("call lockNow");
            return this.lockNow.apply(this, arguments);
        };
    }
});