#!/usr/bin/env python3
"""
Test script to verify caching is working
"""

import os
from dotenv import load_dotenv
from gemini_receng_optimized import OptimizedGeminiRecommendationEngine
import time

def main():
    load_dotenv()
    
    print("🧪 Testing Cache System")
    print("=" * 40)
    
    # Initialize engine
    engine = OptimizedGeminiRecommendationEngine()
    
    # Test 1: Check if cache is loaded
    print(f"📊 Cache status: {len(engine.embeddings_cache)} items loaded")
    
    # Test 2: Simple search with timing
    print("\n🔍 Testing search speed...")
    start_time = time.time()
    
    # Use only first 10 courses for quick test
    test_df = engine.df.head(10)
    original_df = engine.df
    engine.df = test_df
    
    results = engine.semantic_search("machine learning", top_k=3)
    
    end_time = time.time()
    duration = end_time - start_time
    
    print(f"⏱️  Search completed in {duration:.2f} seconds")
    print(f"📈 Found {len(results)} results")
    
    # Test 3: Check if embeddings were cached
    print(f"\n💾 Cache size after search: {len(engine.embeddings_cache)} items")
    
    # Test 4: Second search (should be faster)
    print("\n🔄 Testing second search...")
    start_time = time.time()
    results2 = engine.semantic_search("data science", top_k=3)
    end_time = time.time()
    duration2 = end_time - start_time
    
    print(f"⏱️  Second search completed in {duration2:.2f} seconds")
    print(f"📈 Found {len(results2)} results")
    
    # Restore original dataframe
    engine.df = original_df
    
    print("\n✅ Cache test completed!")

if __name__ == "__main__":
    main()
