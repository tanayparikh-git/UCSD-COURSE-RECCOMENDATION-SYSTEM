#!/bin/bash

echo "🚀 Starting UCSD Course Recommendation System..."

# Check if Python virtual environment exists
if [ ! -d ".venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv .venv
fi

# Activate virtual environment
echo "🔧 Activating Python virtual environment..."
source .venv/bin/activate

# Install Python dependencies
echo "📥 Installing Python dependencies..."
pip install -r backend/requirements.txt

# Install Node.js dependencies
echo "📥 Installing Node.js dependencies..."
npm install

# Start the Python backend API server in the background
echo "🐍 Starting Python backend API server..."
cd backend
python api_server.py &
BACKEND_PID=$!
cd ..

# Wait a moment for the backend to start
sleep 3

# Start the React development server
echo "⚛️  Starting React development server..."
npm run dev

# Cleanup function
cleanup() {
    echo "🛑 Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Wait for background processes
wait
