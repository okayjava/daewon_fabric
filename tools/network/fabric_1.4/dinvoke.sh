#!/bin/bash

#docker exec -e "CORE_PEER_ADDRESS=peer1.org1.ics.com:7051" org1-cli peer chaincode invoke -o orderer0.ics.com:7050 \
#--tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/ics.com/orderers/orderer0.ics.com/msp/tlscacerts/tlsca.ics.com-cert.pem \
#-C mychannel -n balance -c '{"Args":["move","a","b","1000"]}'

docker exec -e "CORE_PEER_ADDRESS=peer0.org1.ics.com:7051" org1-cli peer chaincode invoke -o orderer0.ics.com:7050 \
--tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/ics.com/orderers/orderer0.ics.com/msp/tlscacerts/tlsca.ics.com-cert.pem \
-C mychannel -n delivery -c '{"Args":["registDelivery","ewogICJkdl9pZCI6ICIwMDEiLAogICJkdl9kdG0iOiAiMjAxOTAzMjExNDU1NDYiLAogICJjb3JwX2lkIjoiMjMiLAogICJjb3JwX25tIjoi7Jqw66as64KY6528IgogICJsYXQiOiAiMWNjYTBmMmY4Yjk0MWM0MWNmNDk3N2QwNTg0NmIzOTAiLAogICJsbmciOiAiOTA3MjIyNmYwNTA3YTMyZGI1ZjUwNjFmNzllYmQ3ZmUiLAogICJjb3JwX3VzZXJfaWQiOiAiNjQiLAogICJjb3JwX3VzZXJfbm0iOiAi64yA7ZWc66+86rWtIgp9"]}'


docker exec -e "CORE_PEER_ADDRESS=peer0.org1.ics.com:7051" org1-cli peer chaincode invoke -o orderer0.ics.com:7050 \
--tls --cafile /opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/ordererOrganizations/ics.com/orderers/orderer0.ics.com/msp/tlscacerts/tlsca.ics.com-cert.pem \
-C mychannel -n delivery -c '{"Args":["historyDelivery","001"]}'
