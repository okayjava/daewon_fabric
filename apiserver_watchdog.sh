#!/bin/bash
source /etc/profile
source ~/.bashrc
NODE=/usr/local/bin/node

get_cur_time () {
    date +"%Y%m%d"
}

PROCESS="apiserver_v_0.4.js"
RESULT=`ps -ef | grep node | sed -n /${PROCESS}/p`
CUR_TIME=$(get_cur_time)
RUN_DIR=`dirname $0`
RUN_DIR=${RUN_DIR}/build

echo $RUN_DIR

if [ "${RESULT:-null}" == null ]; then
	cd ${RUN_DIR}
	printf "Starting apiserver daemon...\n"
	${NODE} main >> ${RUN_DIR}/../log/apiserver_${CUR_TIME}.log 2>&1 &
	PID=$!
	echo $PID > ${RUN_DIR}/../apiserver.pid
fi

