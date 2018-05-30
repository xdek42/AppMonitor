Java.perform(function() {
    var activityManager = Java.use("android.app.ActivityManager");
    if (activityManager) {
        //hook getRunningAppProcesses
        activityManager.getRunningAppProcesses.implementation = function() {
            console.log("call getRunningAppProcesses");
            return this.getRunningAppProcesses.apply(this, arguments);
        };
        //hook forceStopPackage
        activityManager.forceStopPackage.implementation = function(packageName) {
            console.log("call forceStopPackage for " + packageName);
            return this.forceStopPackage.apply(this, arguments);
        };
        //hook restartPackage
        activityManager.restartPackage.implementation = function(packageName) {
            console.log("call restartPackage for " + packageName);
            return this.restartPackage.apply(this, arguments);
        }
        //hook killBackgroundProcesses
        activityManager.killBackgroundProcesses.implementation = function(packageName) {
            console.log("call killBackgroundProcesses for " + packageName);
            return this.killBackgroundProcesses.apply(this, arguments);
        }
    }
});