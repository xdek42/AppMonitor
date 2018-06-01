Java.perform(function() {
    var telephonyManager = Java.use("android.telephony.TelephonyManager");
    if (telephonyManager) {
        //hook getSubscriberId
        telephonyManager.getSubscriberId.overload().implementation = function() {
            send("call getSubscriberId");
            return this.getSubscriberId.overload().apply(this, arguments);
        };
        //hook getDeviceId
        telephonyManager.getDeviceId.overload().implementation = function() {
            send("call getDeviceId");
            return this.getDeviceId.overload().apply(this, arguments);
        };
    }
});