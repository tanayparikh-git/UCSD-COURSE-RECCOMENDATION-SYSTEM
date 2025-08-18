#!/usr/bin/env python3
"""
Script to import course data from CSV to Supabase
"""

import pandas as pd
import os
from dotenv import load_dotenv
from supabase import create_client, Client
import json

# Load environment variables
load_dotenv()

def import_courses_to_supabase():
    """
    Import courses from CSV to Supabase
    """
    
    # Supabase configuration
    supabase_url = os.getenv('SUPABASE_URL')
    supabase_key = os.getenv('SUPABASE_ANON_KEY')
    
    if not supabase_url or not supabase_key:
        print("❌ Please set SUPABASE_URL and SUPABASE_ANON_KEY in your .env file")
        print("You can find these in your Supabase project settings")
        return
    
    # Create Supabase client
    supabase: Client = create_client(supabase_url, supabase_key)
    
    # Read CSV file
    print("📖 Reading courses.csv...")
    try:
        df = pd.read_csv('courses.csv')
        print(f"✅ Loaded {len(df)} courses from CSV")
    except Exception as e:
        print(f"❌ Error reading CSV: {e}")
        return
    
    # Clean and prepare data
    print("🧹 Cleaning data...")
    courses_data = []
    
    for index, row in df.iterrows():
        course = {
            'course_code': str(row['Course Code']).strip(),
            'course_name': str(row['Course Name']).strip(),
            'course_units': str(row['Course Units']).strip(),
            'course_description': str(row['Course Description']).strip(),
            'prerequisites': str(row['Prerequisites']).strip()
        }
        
        # Skip if course code is empty or NaN
        if pd.isna(course['course_code']) or course['course_code'] == 'nan':
            continue
            
        courses_data.append(course)
    
    print(f"✅ Prepared {len(courses_data)} courses for import")
    
    # Import to Supabase
    print("📤 Importing to Supabase...")
    
    # Import in batches to avoid timeout
    batch_size = 100
    total_imported = 0
    
    for i in range(0, len(courses_data), batch_size):
        batch = courses_data[i:i + batch_size]
        
        try:
            result = supabase.table('courses').insert(batch).execute()
            total_imported += len(batch)
            print(f"✅ Imported batch {i//batch_size + 1}: {len(batch)} courses")
        except Exception as e:
            print(f"❌ Error importing batch {i//batch_size + 1}: {e}")
            # Try importing one by one to identify problematic records
            for course in batch:
                try:
                    supabase.table('courses').insert(course).execute()
                    total_imported += 1
                except Exception as e2:
                    print(f"❌ Failed to import {course['course_code']}: {e2}")
    
    print(f"🎉 Import completed! {total_imported} courses imported to Supabase")
    
    # Verify import
    print("🔍 Verifying import...")
    try:
        result = supabase.table('courses').select('count').execute()
        count = result.count if hasattr(result, 'count') else len(result.data)
        print(f"✅ Database now contains {count} courses")
    except Exception as e:
        print(f"⚠️  Could not verify count: {e}")

def test_supabase_connection():
    """
    Test connection to Supabase
    """
    supabase_url = os.getenv('SUPABASE_URL')
    supabase_key = os.getenv('SUPABASE_ANON_KEY')
    
    if not supabase_url or not supabase_key:
        print("❌ Missing Supabase credentials")
        return False
    
    try:
        supabase: Client = create_client(supabase_url, supabase_key)
        # Test connection by trying to select from courses table
        result = supabase.table('courses').select('count').limit(1).execute()
        print("✅ Successfully connected to Supabase!")
        return True
    except Exception as e:
        print(f"❌ Failed to connect to Supabase: {e}")
        return False

def main():
    """
    Main function
    """
    print("🚀 Supabase Course Import Tool")
    print("=" * 40)
    
    # Check if .env file exists
    if not os.path.exists('.env'):
        print("❌ .env file not found!")
        print("Please create a .env file with your Supabase credentials:")
        print("SUPABASE_URL=your_supabase_url")
        print("SUPABASE_ANON_KEY=your_supabase_anon_key")
        return
    
    # Test connection first
    if not test_supabase_connection():
        return
    
    # Import courses
    import_courses_to_supabase()

if __name__ == "__main__":
    main()
