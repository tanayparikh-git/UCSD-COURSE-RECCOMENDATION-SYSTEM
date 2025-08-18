#!/usr/bin/env python3
"""
Quick test script for the Gemini Recommendation Engine
"""

import os
from dotenv import load_dotenv
from gemini_receng import GeminiRecommendationEngine

def main():
    # Load environment variables
    load_dotenv()
    
    print("🚀 Quick Test - Gemini Recommendation Engine")
    print("=" * 50)
    
    try:
        # Initialize the engine
        engine = GeminiRecommendationEngine()
        print("✅ Engine initialized successfully!")
        
        # Test 1: Simple semantic search with just a few courses
        print("\n🔍 Test 1: Semantic Search (limited)")
        test_query = "machine learning"
        
        # Get just the first 10 courses for testing
        test_courses = engine.df.head(10)
        engine.df = test_courses  # Temporarily use only 10 courses
        
        results = engine.semantic_search(test_query, top_k=3)
        print(f"✅ Found {len(results)} results for '{test_query}'")
        
        for i, result in enumerate(results, 1):
            print(f"   {i}. {result['course_code']} - {result['course_name']}")
            print(f"      Similarity: {result['similarity']:.3f}")
        
        # Test 2: Course details
        print("\n📚 Test 2: Course Details")
        course_details = engine.get_course_details("CSE 100")
        if course_details:
            print(f"✅ Found course: {course_details['course_name']}")
        else:
            print("❌ Course not found")
        
        print("\n🎉 Quick test completed successfully!")
        
    except Exception as e:
        print(f"❌ Error during test: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()
