Java.perform(function() {
    var device = Java.use("android.app.admin.DevicePolicyManager");
    if (device) {
        //hook isAdminActive
        device.isAdminActive.implementation = function() {
            console.log("call isAdminActive");
            return this.isAdminActive.apply(this, arguments);
        };
        //hook resetPassword
        device.resetPassword.implementation = function() {
            console.log("call resetPassword");
            return this.resetPassword.apply(this, arguments);
        };
        //hook lockNow
        device.lockNow.implementation = function() {
            console.log("call lockNow");
            return this.lockNow.apply(this, arguments);
        };
    }
});