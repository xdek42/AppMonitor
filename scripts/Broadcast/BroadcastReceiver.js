Java.perform(function() {
    var broadcastReciver = Java.use("android.content.BroadcastReceiver");
    if (broadcastReciver) {
        broadcastReciver.abortBroadcast.implementation = function() {
            console.log("call abortBroadcast");
            return this.abortBroadcast.apply(this, arguments);
        }
    }
});