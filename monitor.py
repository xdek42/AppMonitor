import frida
import sys
import os

def build_monitor_script(dir, topdown = True):
    script = ""
    for root, dirs, files in os.walk(dir, topdown):
        for name in files:
            script += open(os.path.join(root,name)).read()
    return script 


def on_message(message, data):
    if message['type'] == 'send':
        print(message['payload'])
    elif message['type'] == 'error':
        print(message['stack'])

def main():

    if len(sys.argv) != 2:
        print("usage: monitor.py PackageName")
        sys.exit(1)
    package_name = sys.argv[1]
    try:
        session = frida.get_usb_device().attach(package_name)
    except Exception as e:
        print("[ERROR]: %s" % str(e))
        sys.exit(1)

    script_dir = os.path.join(".", "scripts")
    script_content = build_monitor_script(script_dir)
    #print(script_content)
    script = session.create_script(script_content)  
    script.on("message", on_message)
    script.load()

    #prevent the python script from terminating
    sys.stdin.read()


if __name__ == "__main__":
    main()