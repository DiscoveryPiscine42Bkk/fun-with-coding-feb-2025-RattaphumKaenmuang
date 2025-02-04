#!/bin/bash

if [ $# -gt 0 ]; then
	for arg in "$@"; do
		echo "$arg"
		count=$((count + 1))
        if [ $count -ge 3 ]; then
            break
        fi
	done
else
	echo "No arguments supplied"
fi
