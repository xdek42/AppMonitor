Java.perform(function() {
    var smsManager = Java.use("android.telephony.SmsManager");
    if (smsManager) {
        //hook sendTextMessage
        smsManager.sendTextMessage.overloads[0].implementation = function(dest) {
            console.log("sendTextMessage to " + dest);
            return this.sendTextMessage.overloads[0].apply(this, arguments);
        };
        //hook sendDataMessage
        smsManager.sendDataMessage.overloads[0].implementation = function(dest) {
            console.log("sendDataMessage to " + dest);
            return this.sendDataMessage.overloads[0].apply(this, arguments);
        };
        //hook sendMultipartTextMessage
        smsManager.sendMultipartTextMessage.overloads[0].implementation = function(dest) {
            console.log("sendMultipartTextMessage to " + dest);
           return this.sendMultipartTextMessage.overloads[0].apply(this, arguments);
        };
    }
});
