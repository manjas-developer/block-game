#!/usr/bin/env python3
"""
Block Game - Auto-launch Server
This script starts a local web server and automatically opens the game in your default browser.

Usage:
    python run_game.py
    
Features:
    - Automatically finds an available port
    - Opens game in default browser
    - Works on Windows, Mac, and Linux
    - Graceful shutdown with Ctrl+C
"""

import os
import sys
import webbrowser
import socket
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import time


class GameRequestHandler(SimpleHTTPRequestHandler):
    """Custom HTTP request handler with better logging."""
    
    def log_message(self, format, *args):
        """Override to provide better logging."""
        # Only log actual requests, not every file access
        if "GET" in format or "POST" in format:
            print(f"📨 {self.address_string()} - {format % args}")


def find_available_port(start_port=8000, max_attempts=10):
    """
    Find an available port starting from start_port.
    
    Args:
        start_port: The starting port number (default: 8000)
        max_attempts: Maximum number of ports to try (default: 10)
    
    Returns:
        An available port number
    """
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('', port))
                s.close()
                return port
        except OSError:
            continue
    
    raise RuntimeError(f"No available ports found between {start_port} and {start_port + max_attempts}")


def get_local_ip():
    """Get the local IP address."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"


def check_game_files():
    """Check if all required game files exist."""
    required_files = ['index.html', 'game.js', 'style.css', 'config.js']
    missing_files = []
    
    for file in required_files:
        if not os.path.isfile(file):
            missing_files.append(file)
    
    if missing_files:
        print("❌ Error: Missing required game files:")
        for file in missing_files:
            print(f"   - {file}")
        print("\n📂 Make sure you're running this script from the Block Game directory.")
        sys.exit(1)
    
    return True


def main():
    """Main entry point."""
    print("=" * 60)
    print("🎮 Block Game - Local Server")
    print("=" * 60)
    
    # Check for required files
    print("\n✅ Checking game files...")
    check_game_files()
    print("✅ All game files found!")
    
    # Find available port
    print("\n🔍 Finding available port...")
    try:
        port = find_available_port()
        print(f"✅ Using port {port}")
    except RuntimeError as e:
        print(f"❌ Error: {e}")
        sys.exit(1)
    
    # Create server
    server_address = ('', port)
    httpd = HTTPServer(server_address, GameRequestHandler)
    
    # Get URLs
    localhost_url = f"http://localhost:{port}"
    local_ip = get_local_ip()
    network_url = f"http://{local_ip}:{port}"
    
    # Display server information
    print("\n" + "=" * 60)
    print("🚀 Server Started!")
    print("=" * 60)
    print(f"\n📍 Local URL:   {localhost_url}")
    print(f"🌐 Network URL: {network_url}")
    print(f"\n📱 On mobile? Use the Network URL on the same WiFi")
    print("\n💡 Press Ctrl+C to stop the server")
    print("=" * 60 + "\n")
    
    # Open browser
    print("🌐 Opening game in browser...")
    try:
        webbrowser.open(localhost_url)
        print("✅ Browser opened!")
    except Exception as e:
        print(f"⚠️  Could not open browser automatically: {e}")
        print(f"   Please open this URL manually: {localhost_url}")
    
    # Start server
    try:
        print("\n🎮 Game is ready! Start playing...\n")
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n" + "=" * 60)
        print("⛔ Server stopped")
        print("=" * 60)
        print("\n👋 Thanks for playing Block Game!\n")
        sys.exit(0)


if __name__ == '__main__':
    main()
