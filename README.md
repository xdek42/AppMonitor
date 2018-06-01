# AppMonitor
基于frida的动态检测工具，动态监控app的framework层api调用以及native层函数调用

## Hook列表

### android.telephony.SmsManager
SmsManager.sendTextMessage
SmsManager.sendDataMessage
SmsManager.sendMultipartTextMessage

### android.app.admin.DevicePolicyManager
DevicePolicyManager.getDeviceId
DevicePolicyManager.getSubscriberId

### java.security.MessageDigest
MessageDigest.getInstance

### javax.crypto.Cipher
Cipher.getInstance

### android.content.BroadcastReceiver
BroadcastReceiver.abortBroadcast

### android.app.ActivityManager
ActivityManager.getRunningAppProcesses
ActivityManager.forceStopPackage
ActivityManager.restartPackage
ActivityManager.killBackgroundProcesses

### android.content.ContentProvider
ContentProvider.query
ContentProvider.delete

### org.apache.http.impl.client.AbstractHttpClient
AbstractHttpClient.execute

### java.net.URL
URL.openConnection
URL.openStream

### android.location.LocationManager
LocationManager.getProvider

### android.app.ApplicationPackageManager
ApplicationPackageManager.setComponentEnabledSetting
ApplicationPackageManager.getInstalledPackages
ApplicationPackageManager.getInstalledApplications
ApplicationPackageManager.installPackage

### java.io.File
File.delete

### android.app.admin.DevicePolicyManager
DevicePolicyManager.isAdminActive
DevicePolicyManager.lockNow
DevicePolicyManager.resetPassword

### libc
open
