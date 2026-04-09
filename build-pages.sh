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
npx wrangler pages dev dist --port 3001 > /tmp/wrangler.log 2>&1 &
SERVER_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to start..."
for i in {1..30}; do
  if curl -s http://localhost:3001 > /dev/null 2>&1; then
    echo "✅ Server is ready!"
    break
  fi
  sleep 1
  if [ $i -eq 30 ]; then
    echo "❌ Server failed to start"
    cat /tmp/wrangler.log
    kill $SERVER_PID 2>/dev/null || true
    exit 1
  fi
done

# Fetch the HTML
echo "📄 Fetching HTML..."
curl -s http://localhost:3001 > dist-pages/index.html

# Stop the server
echo "🛑 Stopping server..."
kill $SERVER_PID 2>/dev/null || true
sleep 2

# Copy static assets
echo "📋 Copying static assets..."
cp -r public/static dist-pages/

# Fix paths for GitHub Pages subdirectory deployment
echo "🔧 Fixing asset paths for GitHub Pages..."
sed -i 's|="/static/|="./static/|g' dist-pages/index.html
sed -i 's|href="/static/|href="./static/|g' dist-pages/index.html
sed -i 's|src="/static/|src="./static/|g' dist-pages/index.html

echo "✅ Static site generated successfully!"
echo "📁 Output: dist-pages/"
ls -lah dist-pages/
wc -l dist-pages/index.html
