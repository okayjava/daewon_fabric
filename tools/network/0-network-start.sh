#!/bin/bash

docker-compose -f docker-compose.yml down

docker network create im-net
docker-compose -f docker-compose.yml up -d
