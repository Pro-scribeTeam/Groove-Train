#!/bin/bash
set -e

echo "🏗️  Building static site for GitHub Pages..."

# Build the Hono app first
echo "📦 Building Hono application..."
npm run build

# Create dist-pages directory
echo "📁 Creating dist-pages directory..."
mkdir -p dist-pages

# Start the server temporarily
echo "🚀 Starting temporary server..."
npx wrangler pages dev dist --port 3001 &
SERVER_PID=$!

# Wait for server to start
echo "⏳ Waiting for server to start..."
sleep 5

# Fetch the HTML
echo "📄 Fetching HTML..."
curl -s http://localhost:3001 > dist-pages/index.html

# Stop the server
echo "🛑 Stopping server..."
kill $SERVER_PID 2>/dev/null || true

# Copy static assets
echo "📋 Copying static assets..."
cp -r public/static dist-pages/

echo "✅ Static site generated successfully!"
echo "📁 Output: dist-pages/"
ls -lah dist-pages/
