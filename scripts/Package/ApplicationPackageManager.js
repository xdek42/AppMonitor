Java.perform(function() {
    var appPackageManager = Java.use("android.app.ApplicationPackageManager");
    if (appPackageManager) {
        //hook setComponentEnableSetting
        appPackageManager.setComponentEnabledSetting.implementation = function() {
            send("call setComponentEnabledSetting");
            return this.setComponentEnabledSetting.apply(this, arguments);
        };
        //hook installPackage
        appPackageManager.installPackage.overloads[0].implementation = function() {
            send("call installPackage");
            return this.installPackage.overloads[0].apply(this, arguments);
        };
        appPackageManager.installPackage.overloads[1].implementation = function() {
            send("call installPackage");
            return this.installPackage.overloads[1].apply(this, arguments);
        };
        //hook getInstalledPackages
        appPackageManager.getInstalledPackages.overloads[0].implementation = function() {
            send("call getInstalledPackages");
            return this.getInstalledPackages.overloads[0].apply(this, arguments);
        };
        appPackageManager.getInstalledPackages.overloads[1].implementation = function() {
            send("call getInstalledPackages");
            return this.getInstalledPackages.overloads[1].apply(this, arguments);
        };
        //hook getInstalledApplications
        appPackageManager.getInstalledApplications.implementation = function() {
            send("call getInstalledApplications");
            return this.getInstalledApplications.apply(this, arguments);
        };
    }
});
