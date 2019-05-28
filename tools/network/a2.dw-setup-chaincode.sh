#!/usr/bin/env bash

#채널
docker exec cli /opt/gopath/src/github.com/hyperledger/fabric/peer/cli/setup-dwchaincode.sh  $1 $2
