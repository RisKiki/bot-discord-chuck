#!/bin/bash

touch .env
echo "DISCORD_TOKEN='${1}'" > .env
docker-compose up