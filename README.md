## AppMonitor
基于frida的动态检测工具，动态监控app的framework层api调用以及native层函数调用


## Usage
### Windows/Linux:

``` 
pip install frida
pip install androguard
python monitor.py target.apk
```
#### 检测日志样例

```
2018-06-12 16:29 call android.telephony.TelephonyManager->getDeviceId
2018-06-12 16:29 call android.telephony.TelephonyManager->getSubscriberId
2018-06-12 16:29 call java.security.MessageDigest->getInstance for MD5
2018-06-12 16:29 call java.security.MessageDigest->getInstance for SHA1
2018-06-12 16:29 call javax.crypto.Cipher->getInstance for AES
2018-06-12 16:29 call javax.crypto.Cipher->getInstance for DES
2018-06-12 16:29 call libc->open
2018-06-12 16:29 call android.app.ApplicationPackageManager->getInstalledApplications
2018-06-12 16:29 call android.telephony.SmsManager->sendTextMessage for +8601010010
```


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

write

mmap

madvise

pthread_create
