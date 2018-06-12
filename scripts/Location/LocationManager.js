Java.perform(function () {
    var cn = "android.location.LocationManager";
    var locationManager = Java.use(cn);
    locationManager.getProvider.implementation = function() {
        send("call " + cn + "->getProvider");
        return this.getProvider.apply(this, arguments);
    };
});