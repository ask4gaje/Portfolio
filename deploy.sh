#!/bin/bash
set -euo pipefail

APP_DIR="$(dirname "$(readlink -f "$0")")"

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

log "📥 Pulling latest changes..."
cd "$APP_DIR"
git pull origin main

log "🔨 Building new image..."
docker compose build

log "🚀 Deploying..."
docker compose up -d --remove-orphans

log "⏳ Waiting for app to become healthy (up to 60s)..."
TIMEOUT=60
ELAPSED=0
until [ "$(docker inspect portfolio-app-1 --format='{{.State.Health.Status}}' 2>/dev/null)" = "healthy" ] || [ "$ELAPSED" -ge "$TIMEOUT" ]; do
  sleep 5
  ELAPSED=$((ELAPSED + 5))
done

STATUS=$(docker inspect portfolio-app-1 --format='{{.State.Health.Status}}' 2>/dev/null || echo "unknown")
if [ "$STATUS" = "healthy" ]; then
  log "✅ App is healthy!"
else
  log "⚠️  App status: $STATUS — verify with: docker compose ps"
fi

log "🧹 Pruning dangling images..."
docker image prune -f

log "✅ Deployment complete!"
