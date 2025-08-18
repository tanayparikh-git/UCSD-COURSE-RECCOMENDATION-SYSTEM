#!/usr/bin/env python3
"""
Setup script for Gemini Recommendation Engine
"""

import subprocess
import sys
import os

def install_requirements():
    """Install required packages"""
    print("Installing required packages...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ All packages installed successfully!")
    except subprocess.CalledProcessError as e:
        print(f"❌ Error installing packages: {e}")
        return False
    return True

def create_env_file():
    """Create .env file if it doesn't exist"""
    env_file = ".env"
    if not os.path.exists(env_file):
        print("\n📝 Creating .env file...")
        with open(env_file, "w") as f:
            f.write("# Google Gemini API Key\n")
            f.write("# Get your API key from: https://makersuite.google.com/app/apikey\n")
            f.write("GOOGLE_API_KEY=your_google_api_key_here\n")
        print("✅ .env file created!")
        print("⚠️  Please edit .env file and add your Google API key")
    else:
        print("✅ .env file already exists")

def main():
    print("🚀 Setting up Gemini Recommendation Engine...")
    
    # Install requirements
    if not install_requirements():
        return
    
    # Create .env file
    create_env_file()
    
    print("\n🎉 Setup complete!")
    print("\nNext steps:")
    print("1. Get your Google API key from: https://makersuite.google.com/app/apikey")
    print("2. Edit the .env file and replace 'your_google_api_key_here' with your actual API key")
    print("3. Run: python gemini_receng.py")

if __name__ == "__main__":
    main()
