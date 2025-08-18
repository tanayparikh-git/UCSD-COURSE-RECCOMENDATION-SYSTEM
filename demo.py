#!/usr/bin/env python3
"""
Demo script for the Gemini Recommendation Engine
"""

import os
from dotenv import load_dotenv
from gemini_receng import GeminiRecommendationEngine

def main():
    # Load environment variables
    load_dotenv()
    
    # Check if API key is set
    if not os.getenv('GOOGLE_API_KEY') or os.getenv('GOOGLE_API_KEY') == 'your_google_api_key_here':
        print("❌ Please set your Google API key in the .env file")
        print("Get your API key from: https://makersuite.google.com/app/apikey")
        return
    
    print("🚀 Initializing Gemini Recommendation Engine...")
    
    try:
        # Initialize the engine
        engine = GeminiRecommendationEngine('courses.csv')
        print("✅ Engine initialized successfully!")
        
        # Demo 1: AI-Powered Recommendations
        print("\n" + "="*60)
        print("🎯 DEMO 1: AI-Powered Course Recommendations")
        print("="*60)
        
        interests = "I'm interested in machine learning, artificial intelligence, and building AI applications. I want to work in the tech industry."
        completed_courses = ["MATH 20A", "CSE 8A", "MATH 20B"]
        
        print(f"User Interests: {interests}")
        print(f"Completed Courses: {', '.join(completed_courses)}")
        print("\nGetting AI recommendations...")
        
        recommendations = engine.get_ai_recommendations(
            user_interests=interests,
            completed_courses=completed_courses,
            top_k=5
        )
        
        for i, rec in enumerate(recommendations, 1):
            print(f"\n{i}. {rec['course_code']} - {rec['course_name']}")
            print(f"   Units: {rec['course_units']}")
            if 'ai_reason' in rec:
                print(f"   AI Reason: {rec['ai_reason']}")
            if 'ai_difficulty' in rec:
                print(f"   Difficulty: {rec['ai_difficulty']}")
            print(f"   Prerequisites: {rec['prerequisites']}")
        
        # Demo 2: Semantic Search
        print("\n" + "="*60)
        print("🔍 DEMO 2: Semantic Search")
        print("="*60)
        
        search_query = "computer programming and software development"
        print(f"Search Query: '{search_query}'")
        print("\nPerforming semantic search...")
        
        search_results = engine.semantic_search(search_query, top_k=3)
        
        for i, result in enumerate(search_results, 1):
            try:
                print(f"\n{i}. {result['course_code']} - {result['course_name']}")
                print(f"   Similarity Score: {result['similarity']:.3f}")
                print(f"   Description: {result['course_description'][:150]}...")
            except Exception as e:
                print(f"\n{i}. Error displaying result: {e}")
                continue
        
        # Demo 3: Keyword Search
        print("\n" + "="*60)
        print("🏷️  DEMO 3: Keyword Search")
        print("="*60)
        
        keywords = ['mathematics', 'calculus']
        print(f"Keywords: {keywords}")
        print("\nSearching by keywords...")
        
        keyword_results = engine.search_by_keywords(keywords, top_k=3)
        
        for i, result in enumerate(keyword_results, 1):
            print(f"\n{i}. {result['course_code']} - {result['course_name']}")
            print(f"   Similarity Score: {result['similarity']:.3f}")
            print(f"   Units: {result['course_units']}")
        
        # Demo 4: Course Details
        print("\n" + "="*60)
        print("📚 DEMO 4: Course Details")
        print("="*60)
        
        course_code = "CSE 100"
        print(f"Getting details for course: {course_code}")
        
        course_details = engine.get_course_details(course_code)
        if course_details:
            print(f"\nCourse: {course_details['course_name']}")
            print(f"Code: {course_details['course_code']}")
            print(f"Units: {course_details['course_units']}")
            print(f"Description: {course_details['course_description']}")
            print(f"Prerequisites: {course_details['prerequisites']}")
        else:
            print(f"Course {course_code} not found")
        
        print("\n" + "="*60)
        print("🎉 Demo completed successfully!")
        print("="*60)
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("Make sure your API key is correct and you have an internet connection")

if __name__ == "__main__":
    main()
