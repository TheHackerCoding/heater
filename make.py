#!/usr/bin/env python3
# pls excuse my terrible python code
import shutil, sys, platform, os

if platform.system() == "Windows":
    type = ".exe"
if platform.system() == "Linux" or "Darwin":
    type = ""
# https://stackoverflow.com/questions/377017/test-if-executable-exists-in-python
def exists(cmd):
    return shutil.which(cmd) is not None

if exists("node") == False:
    if exists("yarn") == False:
        sys.exit("neither node or yarn is installed (needed for the js part of this code)")

if exists("npm") == False:
    sys.exit("npm not found")

if exists("node") == True:
    jsexec = "node"
if exists("yarn") == True:
    jsexec = "yarn"

if exists("gcc") == False:
    sys.exit("gcc wasn't found")

if jsexec == "node":
    os.system("npm install")
else:
    os.system("yarn")
try:  
    os.mkdir("bin")  
except OSError as error:  
    print(error)

