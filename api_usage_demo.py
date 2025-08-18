#!/usr/bin/env python3
"""
Demo to show when API key is needed vs when it's not
"""

import os
from dotenv import load_dotenv
from gemini_receng_optimized import OptimizedGeminiRecommendationEngine

def main():
    load_dotenv()
    
    print("🔑 API Key Usage Demo")
    print("=" * 50)
    
    engine = OptimizedGeminiRecommendationEngine()
    
    print(f"📊 Cache loaded: {len(engine.embeddings_cache)} course embeddings")
    
    # Scenario 1: Search existing courses (NO API needed)
    print("\n🔍 Scenario 1: Search existing courses")
    print("   This should NOT use API calls (uses cached embeddings)")
    results = engine.semantic_search("computer science", top_k=3)
    print(f"   ✅ Found {len(results)} results without new API calls")
    
    # Scenario 2: New user query (API needed)
    print("\n🔍 Scenario 2: New user query")
    print("   This WILL use API calls (new query embedding)")
    results = engine.semantic_search("quantum physics and advanced mathematics", top_k=3)
    print(f"   ✅ Found {len(results)} results (used API for query)")
    
    # Scenario 3: Course details (NO API needed)
    print("\n📚 Scenario 3: Get course details")
    print("   This should NOT use API calls (just database lookup)")
    course = engine.get_course_details("CSE 100")
    if course:
        print(f"   ✅ Found course: {course['course_name']} (no API needed)")
    
    # Scenario 4: AI recommendations (API needed)
    print("\n🤖 Scenario 4: AI recommendations")
    print("   This WILL use API calls (Gemini analysis)")
    try:
        recommendations = engine.get_ai_recommendations(
            "I want to learn about artificial intelligence", 
            top_k=3
        )
        print(f"   ✅ Got {len(recommendations)} AI recommendations (used API)")
    except Exception as e:
        print(f"   ⚠️  API limit hit: {e}")
    
    print("\n📋 Summary:")
    print("   ✅ NO API needed: Searching existing courses, course details")
    print("   🔑 API needed: New queries, AI recommendations, new courses")

if __name__ == "__main__":
    main()
