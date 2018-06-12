from androguard.core.bytecodes import apk

class Application:
    def __init__(self, filename):
        self.filename = filename
        app = apk.APK(self.filename, False, "r", None, 2)
        self.packageName = app.get_package()
        self.appName = app.get_app_name()
        self.permissions = app.get_permissions()
        self.recvs = app.get_receivers()
        self.services = app.get_services()
        self.activities = app.get_activities()
        self.providers = app.get_providers()
        self.mainActivity = app.get_main_activity()

    def getPackageName(self):
        return self.packageName
    def getAppName(self):
        return self.appName
    def getPermissions(self):
        return self.permissions
    def getRecvs(self):
        return self.recvs
    def getServices(self):
        return self.services
    def getActivities(self):
        return self.activities
    def getProviders(self):
        return self.providers
    def getMainActivity(self):
        return self.mainActivity

if __name__ == "__main__":
    file_name = "E:\\test.apk"
    app = Application(file_name)
    for service in app.getServices():
        print(service)
    print(app.getPackageName())