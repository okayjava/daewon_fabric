#!/bin/bash

docker-compose -f docker-compose-newpeer.yml down
docker-compose -f docker-compose-newpeer.yml up -d 
