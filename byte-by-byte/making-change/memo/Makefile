CC=g++
CXXFLAGS=-O2 -std=c++1z -Wall
OUTPUTNAME=making-change-memo
OBJS=making-change-memo.o

default: all

all: $(OBJS)
	$(CC) $(CFLAGS) -o $(OUTPUTNAME) $(OBJS)

debug: $(OBJS)
	$(CC) $(CFLAGS) -g -o $(OUTPUTNAME) $(OBJS)

opt: $(OBJS)
	$(CC) $(CFLAGS) -O3 -o $(OUTPUTNAME) $(OBJS)

.PHONY: clean
clean:
	rm *.o
	rm $(OUTPUTNAME)
