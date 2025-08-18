# 🗄️ Supabase Setup Guide

## Step 1: Create Supabase Project

1. **Go to [supabase.com](https://supabase.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Fill in project details:**
   - Organization: Create new or use existing
   - Project name: `course-recommendations` (or your preferred name)
   - Database password: Create a strong password (save it!)
   - Region: Choose closest to your users (e.g., US East for US users)
5. **Click "Create new project"**
6. **Wait for setup** (takes 2-3 minutes)

## Step 2: Get Your API Keys

1. **Go to Project Settings** (gear icon in sidebar)
2. **Click "API"** in the left menu
3. **Copy these values:**
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **Anon public key** (starts with `eyJ...`)

## Step 3: Update Your .env File

Add these lines to your `.env` file:

```env
# Existing Gemini API key
GOOGLE_API_KEY=AIzaSyAirmNWvkzamq-Ev3enXNchC6BTvBvd4wg

# Add Supabase credentials
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Set Up Database Schema

1. **Go to SQL Editor** in your Supabase dashboard
2. **Click "New Query"**
3. **Copy and paste** the contents of `supabase_setup.sql`
4. **Click "Run"** to execute the SQL
5. **Wait for completion** (should take 30-60 seconds)

## Step 5: Install Supabase Python Library

Run this command in your terminal:

```bash
pip install supabase
```

## Step 6: Import Your Course Data

1. **Make sure your `.env` file is updated** with Supabase credentials
2. **Run the import script:**

```bash
python3 import_to_supabase.py
```

This will:

- Read your `courses.csv` file
- Clean the data
- Import all 5,350 courses to Supabase
- Verify the import

## Step 7: Verify Everything Works

1. **Go to Table Editor** in Supabase dashboard
2. **Click on "courses" table**
3. **You should see all your courses** with proper columns
4. **Check the count** - should be around 5,350 courses

## Step 8: Test Database Connection

Run this to test your connection:

```bash
python3 -c "
from supabase import create_client
import os
from dotenv import load_dotenv
load_dotenv()

url = os.getenv('SUPABASE_URL')
key = os.getenv('SUPABASE_ANON_KEY')
supabase = create_client(url, key)

result = supabase.table('courses').select('count').execute()
print(f'✅ Connected! Database has {len(result.data)} courses')
"
```

## 🎯 What You've Accomplished

✅ **Database Schema**: Complete tables for courses, users, search history, and recommendations
✅ **Security**: Row Level Security (RLS) policies to protect user data
✅ **Performance**: Indexes for fast searches
✅ **Data Import**: All 5,350 courses imported
✅ **Authentication**: Ready for user sign-up/login

## 🔧 Next Steps

1. **Test the connection** using the script above
2. **Move to MagicPatterns** for frontend development
3. **Connect your recommendation engine** to Supabase
4. **Deploy to Vercel**

## 🆘 Troubleshooting

### "Connection failed"

- Check your API keys in `.env`
- Make sure you copied the correct URL and key
- Verify your project is active in Supabase

### "Import failed"

- Check your CSV file exists
- Make sure the database schema was created first
- Look for any error messages in the console

### "Permission denied"

- Make sure you ran the SQL setup script
- Check that RLS policies are in place
- Verify you're using the anon key, not the service role key

## 📞 Need Help?

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Community**: [github.com/supabase/supabase/discussions](https://github.com/supabase/supabase/discussions)
- **Discord**: [discord.supabase.com](https://discord.supabase.com)
