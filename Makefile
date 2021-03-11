OUT = bin/
REQUIRED_BINS = python node npm gcc 
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

test: # tests for needed commands
	$(foreach bin,$(REQUIRED_BINS),\
    $(if $(shell command -v $(bin) 2> /dev/null),$(info Found `$(bin)`),$(error Please install `$(bin)`)))

clean:
	rmdir bin node_modules