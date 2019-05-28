#!/bin/bash

echo 'Install ChainCode'
CHAINCODE_DIR=/opt/gopath/src/github.com/hyperledger/fabric/examples/chaincode/go
CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode install -n $1 -v $2 -p $CHAINCODE_DIR/$1_cc -l node

echo 'Done'
echo 'Instantiate ChainCode'

CHAINCODE_DIR=/opt/gopath/src/github.com/hyperledger/fabric/examples/chaincode/go
CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode instantiate -o orderer.example.com:7050 \
--cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/cacerts/ca.example.com-cert.pem \
-C mychannel -n $1 -v $2 -c '{"Args":["init"]}' -P "OR   ('Org1MSP.member')" -l node 

#CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode instantiate -o orderer.example.com:7050 \
#--cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/cacerts/ca.example.com-cert.pem \
#-C mychannel2 -n $1 -v $2 -c '{"Args":["init"]}' -P "OR   ('Org1MSP.member')"

#CORE_PEER_ADDRESS=peer0.org1.example.com:7051 peer chaincode instantiate -o orderer.example.com:7050 \
#--cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/example.com/orderers/orderer.example.com/msp/cacerts/ca.example.com-cert.pem \
#-C mychannel3 -n $1 -v $2 -c '{"Args":["init"]}' -P "OR   ('Org1MSP.member')"

echo 'Done'
