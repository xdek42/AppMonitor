# AppMonitor
基于frida的动态检测工具，动态监控app的framework层api调用以及native层函数调用

## Hook列表

### android.telephony.SmsManager

sendTextMessage

sendDataMessage

sendMultipartTextMessage

### android.app.admin.DevicePolicyManager

getDeviceId

getSubscriberId

### java.security.MessageDigest

getInstance

### javax.crypto.Cipher

getInstance

### android.content.BroadcastReceiver

abortBroadcast

### android.app.ActivityManager

getRunningAppProcesses

forceStopPackage

restartPackage

killBackgroundProcesses

### android.content.ContentProvider

query

delete

### org.apache.http.impl.client.AbstractHttpClient

execute

### java.net.URL

openConnection

openStream

### android.location.LocationManager

getProvider

### android.app.ApplicationPackageManager

setComponentEnabledSetting

getInstalledPackages

getInstalledApplications

installPackage

### java.io.File

delete

### android.app.admin.DevicePolicyManager

isAdminActive

lockNow

resetPassword

### libc

open
