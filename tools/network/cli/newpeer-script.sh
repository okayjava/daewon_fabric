#!/bin/bash

export CHANNEL_NAME=mychannel
CORE_PEER_LOCALMSPID="Org1MSP"
CORE_PEER_TLS_ROOTCERT_FILE=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/peers/peer1.org1.example.com/tls/ca.crt
CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp
CORE_PEER_ADDRESS=peer1.org1.example.com:7051
peer channel join -b mychannel.block
peer channel join -b mychannel2.block
peer channel join -b mychannel3.block
sleep 2

CORE_PEER_ADDRESS=peer2.org1.example.com:7051
peer channel join -b mychannel.block
peer channel join -b mychannel2.block
peer channel join -b mychannel3.block
