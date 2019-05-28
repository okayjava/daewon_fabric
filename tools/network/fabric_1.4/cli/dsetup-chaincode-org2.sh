#!/bin/bash

echo 'Install ChainCode'

CHAINCODE_DIR=github.com/hyperledger/fabric/examples/chaincode/go/
CHAINCODE_DIR=/opt/gopath/src/github.com/hyperledger/fabric/examples/chaincode/go/
CORE_PEER_ADDRESS=peer0.org2.example.com:7051 peer chaincode install -n $1 -v $2 -p $CHAINCODE_DIR/$1_cc -l node

#CHAINCODE_DIR=github.com/hyperledger/fabric/ics/chaincode/go/
CORE_PEER_ADDRESS=peer1.org2.example.com:7051 peer chaincode install -n $1 -v $2 -p $CHAINCODE_DIR/$1_cc -l node

echo 'Done'

echo 'Instantiate ChainCode'

echo 'Done'
