Java.perform(function () {
    var locationManager = Java.use("android.location.LocationManager");
    locationManager.getProvider.implementation = function() {
        console.log("call LocationManager.getProvider");
        return this.getProvider.apply(this, arguments);
    };
});