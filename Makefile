OUT = bin/
ifeq ($(OS),Windows_NT)     # is Windows_NT on XP, 2000, 7, Vista, 10...
  OS_NAME = windows
else
   OS_NAME = $(shell uname -s | tr A-Z a-z)  # same as "uname -s"
endif

os:
	echo $(OS_NAME)

all:
	npm install

runn-that:
	pkg -t node12-$(OS_NAME) --out-path $(OUT) src/js/runn-that.js

hell:
	ifeq ($(OS_NAME),windows)
		gcc src/cpp/calm.cpp -lstdc++ -o bin/calm.exe
	else
		gcc src/cpp/calm -lstdc++ -o bin/calm
	endif