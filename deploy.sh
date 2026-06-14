#!/bin/bash
set -e

cd /app/repo
git pull
docker compose up -d --build app
docker image prune -af
