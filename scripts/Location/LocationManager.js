Java.perform(function () {
    var locationManager = Java.use("android.location.LocationManager");
    locationManager.getProvider.implementation = function() {
        send("call LocationManager.getProvider");
        return this.getProvider.apply(this, arguments);
    };
});