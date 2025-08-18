#!/usr/bin/env python3
"""
Clear and Import Courses
This script clears existing courses and imports fresh data
"""

import pandas as pd
import os
from dotenv import load_dotenv
from supabase import create_client, Client

def clear_courses_table():
    """Clear all existing courses from the table"""
    load_dotenv()
    
    supabase_url = os.getenv('SUPABASE_URL')
    supabase_key = os.getenv('SUPABASE_ANON_KEY')
    
    if not supabase_url or not supabase_key:
        print("❌ Error: Missing Supabase credentials in .env file")
        return False
    
    try:
        supabase: Client = create_client(supabase_url, supabase_key)
        print("✅ Connected to Supabase")
        
        # Delete all courses
        print("🗑️  Clearing existing courses...")
        result = supabase.table('courses').delete().neq('id', '00000000-0000-0000-0000-000000000000').execute()
        print("✅ Cleared all existing courses")
        return True
        
    except Exception as e:
        print(f"❌ Error clearing courses: {e}")
        return False

def clean_course_code(course_code):
    """Clean and truncate course codes to fit database constraints"""
    if pd.isna(course_code):
        return None
    
    # Convert to string and strip whitespace
    code = str(course_code).strip()
    
    # If code is too long, truncate it
    if len(code) > 20:
        # Try to keep the most important part (usually the first part before '/')
        if '/' in code:
            # Take the first part before the first '/'
            code = code.split('/')[0].strip()
        else:
            # Just truncate to 20 characters
            code = code[:20]
    
    return code

def import_courses_to_supabase():
    """
    Import courses from CSV to Supabase with improved error handling
    """
    # Load environment variables
    load_dotenv()
    
    # Get Supabase credentials
    supabase_url = os.getenv('SUPABASE_URL')
    supabase_key = os.getenv('SUPABASE_ANON_KEY')
    
    if not supabase_url or not supabase_key:
        print("❌ Error: Missing Supabase credentials in .env file")
        return
    
    # Create Supabase client
    supabase: Client = create_client(supabase_url, supabase_key)
    print("✅ Successfully connected to Supabase!")
    
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
    seen_codes = set()  # Track seen course codes to avoid duplicates
    
    for index, row in df.iterrows():
        # Clean course code
        course_code = clean_course_code(row['Course Code'])
        
        # Skip if course code is empty, NaN, or duplicate
        if not course_code or course_code == 'nan' or course_code in seen_codes:
            continue
        
        seen_codes.add(course_code)
        
        course = {
            'course_code': course_code,
            'course_name': str(row['Course Name']).strip()[:500],  # Limit name length
            'course_units': str(row['Course Units']).strip()[:10],  # Limit units length
            'course_description': str(row['Course Description']).strip()[:2000],  # Limit description length
            'prerequisites': str(row['Prerequisites']).strip()[:1000]  # Limit prerequisites length
        }
        
        courses_data.append(course)
    
    print(f"✅ Prepared {len(courses_data)} unique courses for import")
    
    # Import to Supabase
    print("📤 Importing to Supabase...")
    
    # Import in batches to avoid timeout
    batch_size = 50  # Smaller batch size for better error handling
    total_imported = 0
    failed_imports = []
    
    for i in range(0, len(courses_data), batch_size):
        batch = courses_data[i:i + batch_size]
        batch_num = i//batch_size + 1
        
        try:
            result = supabase.table('courses').insert(batch).execute()
            total_imported += len(batch)
            print(f"✅ Imported batch {batch_num}: {len(batch)} courses")
        except Exception as e:
            print(f"❌ Error importing batch {batch_num}: {e}")
            # Try importing one by one to identify problematic records
            for course in batch:
                try:
                    supabase.table('courses').insert(course).execute()
                    total_imported += 1
                except Exception as e2:
                    failed_imports.append({
                        'course_code': course['course_code'],
                        'error': str(e2)
                    })
                    print(f"❌ Failed to import {course['course_code']}: {e2}")
    
    print(f"🎉 Import completed! {total_imported} courses imported to Supabase")
    
    if failed_imports:
        print(f"⚠️  {len(failed_imports)} courses failed to import")
        print("Failed imports:")
        for failed in failed_imports[:10]:  # Show first 10 failures
            print(f"  - {failed['course_code']}: {failed['error']}")
        if len(failed_imports) > 10:
            print(f"  ... and {len(failed_imports) - 10} more")
    
    # Verify import
    print("🔍 Verifying import...")
    try:
        result = supabase.table('courses').select('*', count='exact').execute()
        count = result.count if hasattr(result, 'count') else len(result.data)
        print(f"✅ Database now contains {count} courses")
    except Exception as e:
        print(f"⚠️  Could not verify count: {e}")

def main():
    """
    Main function
    """
    print("🚀 Clear and Import Courses Tool")
    print("=" * 40)
    
    # Check if .env file exists
    if not os.path.exists('.env'):
        print("❌ .env file not found!")
        return
    
    # Clear existing courses
    if not clear_courses_table():
        print("❌ Failed to clear courses table")
        return
    
    # Import fresh courses
    import_courses_to_supabase()

if __name__ == "__main__":
    main()
