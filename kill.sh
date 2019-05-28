#!/bin/bash
RUN_DIR=`dirname $0`
PID=`cat ${RUN_DIR}/apiserver.pid`
kill -9 $PID
