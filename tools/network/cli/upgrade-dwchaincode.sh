#!/bin/bash

echo 'Install ChainCode'
CHAINCODE_DIR=/opt/gopath/src/github.com/hyperledger/fabric/examples/chaincode/node/
CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode install -n $1 -v $2 -p $CHAINCODE_DIR/$1_cc -l node

echo 'Done'
sleep 5

echo 'Upgrade ChainCode'
PEER0_ORG1_CA=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG1_CA
CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode upgrade -o orderer.example.com:7050 \
--cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/cacerts/ca.example.com-cert.pem \
-C mychannel -n $1 -v $2  -c '{"Args":["init"]}' -P "OR   ('Org1MSP.member')" -l node

echo 'Done'
