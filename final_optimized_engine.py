import pandas as pd
import google.generativeai as genai
import requests
import json
import pickle
import os
from typing import List, Dict, Any
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure Gemini API
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')
if not GOOGLE_API_KEY:
    raise ValueError("Please set GOOGLE_API_KEY environment variable")

genai.configure(api_key=GOOGLE_API_KEY)

class FinalOptimizedEngine:
    def __init__(self, csv_file: str = 'courses.csv', cache_file: str = 'embeddings_cache.pkl'):
        """
        Final optimized recommendation engine with proper caching
        """
        self.csv_file = csv_file
        self.cache_file = cache_file
        self.df = pd.read_csv(csv_file)
        self.model = genai.GenerativeModel('gemini-1.5-pro')
        
        # Create textual representations for all courses
        self.df['textual_representation'] = self.df.apply(self._create_textual_representation, axis=1)
        
        # Load embeddings cache
        self.embeddings_cache = self._load_embeddings_cache()
        
        print(f"Loaded {len(self.df)} courses from {csv_file}")
        print(f"Embeddings cache: {len(self.embeddings_cache)} items")
    
    def _create_textual_representation(self, row: pd.Series) -> str:
        return f"""Course Code: {row['Course Code']}
Course Name: {row['Course Name']}
Course Units: {row['Course Units']}
Course Description: {row['Course Description']}
Course Prerequisites: {row['Prerequisites']}"""
    
    def _load_embeddings_cache(self) -> Dict[str, List[float]]:
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'rb') as f:
                    cache = pickle.load(f)
                print(f"✅ Loaded embeddings cache from {self.cache_file}")
                return cache
            except Exception as e:
                print(f"⚠️  Could not load cache: {e}")
                return {}
        return {}
    
    def _save_embeddings_cache(self):
        try:
            with open(self.cache_file, 'wb') as f:
                pickle.dump(self.embeddings_cache, f)
            print(f"✅ Saved embeddings cache to {self.cache_file}")
        except Exception as e:
            print(f"⚠️  Could not save cache: {e}")
    
    def get_embedding(self, text: str) -> List[float]:
        """
        Get embedding for a single text, using cache if available
        """
        if text in self.embeddings_cache:
            return self.embeddings_cache[text]
        
        try:
            result = genai.embed_content(
                model="models/embedding-001",
                content=text,
                task_type="retrieval_document"
            )
            embedding = result['embedding']
            
            # Cache the embedding
            self.embeddings_cache[text] = embedding
            self._save_embeddings_cache()
            
            return embedding
        except Exception as e:
            print(f"Error getting embedding: {e}")
            return [0.0] * 768
    
    def semantic_search(self, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Perform semantic search using cached course embeddings
        """
        print(f"🔍 Searching for: '{query}'")
        
        # Get embedding for the query (this will use API)
        query_embedding = self.get_embedding(query)
        
        # Get all course embeddings from cache (no API calls)
        course_embeddings = []
        for text in self.df['textual_representation']:
            if text in self.embeddings_cache:
                course_embeddings.append(self.embeddings_cache[text])
            else:
                # This shouldn't happen if cache is complete
                print(f"⚠️  Missing embedding for course, getting from API...")
                embedding = self.get_embedding(text)
                course_embeddings.append(embedding)
        
        # Calculate similarities (no API calls)
        similarities = []
        for i, course_embedding in enumerate(course_embeddings):
            try:
                similarity = self._cosine_similarity(query_embedding, course_embedding)
                similarities.append({
                    'index': i,
                    'similarity': float(similarity),
                    'course_code': str(self.df.iloc[i]['Course Code']),
                    'course_name': str(self.df.iloc[i]['Course Name']),
                    'course_units': str(self.df.iloc[i]['Course Units']),
                    'course_description': str(self.df.iloc[i]['Course Description']),
                    'prerequisites': str(self.df.iloc[i]['Prerequisites'])
                })
            except Exception as e:
                print(f"Error processing course {i}: {e}")
                continue
        
        # Sort by similarity and return top_k results
        similarities.sort(key=lambda x: x['similarity'], reverse=True)
        return similarities[:top_k]
    
    def _cosine_similarity(self, vec1: List[float], vec2: List[float]) -> float:
        import numpy as np
        
        vec1 = np.array(vec1)
        vec2 = np.array(vec2)
        
        dot_product = np.dot(vec1, vec2)
        norm1 = np.linalg.norm(vec1)
        norm2 = np.linalg.norm(vec2)
        
        if norm1 == 0 or norm2 == 0:
            return 0.0
        
        return dot_product / (norm1 * norm2)
    
    def get_course_details(self, course_code: str) -> Dict[str, Any]:
        """
        Get course details (NO API needed)
        """
        course = self.df[self.df['Course Code'] == course_code]
        if not course.empty:
            row = course.iloc[0]
            return {
                'course_code': row['Course Code'],
                'course_name': row['Course Name'],
                'course_units': row['Course Units'],
                'course_description': row['Course Description'],
                'prerequisites': row['Prerequisites']
            }
        return None
    
    def get_ai_recommendations(self, user_interests: str, completed_courses: List[str] = None, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Get AI recommendations (uses API for analysis)
        """
        print(f"🤖 Getting AI recommendations for: '{user_interests}'")
        
        # Get semantic search results first
        similar_courses = self.semantic_search(user_interests, top_k * 2)
        
        # Use Gemini to analyze (this uses API)
        course_descriptions = []
        for course in similar_courses[:top_k * 2]:
            course_descriptions.append(f"""
Course: {course['course_code']} - {course['course_name']}
Description: {course['course_description']}
Prerequisites: {course['prerequisites']}
Units: {course['course_units']}
""")
        
        prompt = f"""
As an academic advisor, recommend the top {top_k} courses for a student with these interests: {user_interests}

{f"Completed courses: {', '.join(completed_courses)}" if completed_courses else ""}

Available courses:
{chr(10).join(course_descriptions)}

Format your response as JSON:
{{
    "recommendations": [
        {{
            "course_code": "COURSE_CODE",
            "reason": "Brief explanation",
            "difficulty": "Easy/Medium/Hard"
        }}
    ]
}}
"""
        
        try:
            response = self.model.generate_content(prompt)
            recommendations = self._parse_ai_response(response.text, similar_courses)
            return recommendations[:top_k]
        except Exception as e:
            print(f"Error getting AI recommendations: {e}")
            return similar_courses[:top_k]
    
    def _parse_ai_response(self, response_text: str, similar_courses: List[Dict]) -> List[Dict[str, Any]]:
        try:
            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1
            if start_idx != -1 and end_idx != 0:
                json_str = response_text[start_idx:end_idx]
                parsed = json.loads(json_str)
                
                recommendations = []
                for rec in parsed.get('recommendations', []):
                    course_code = rec.get('course_code', '')
                    matching_course = None
                    for course in similar_courses:
                        if course['course_code'].strip() == course_code.strip():
                            matching_course = course
                            break
                    
                    if matching_course:
                        recommendations.append({
                            **matching_course,
                            'ai_reason': rec.get('reason', ''),
                            'ai_difficulty': rec.get('difficulty', 'Unknown')
                        })
                
                return recommendations
        except Exception as e:
            print(f"Error parsing AI response: {e}")
        
        return similar_courses

def main():
    """
    Demo of the final optimized engine
    """
    engine = FinalOptimizedEngine()
    
    print("\n" + "="*60)
    print("🚀 FINAL OPTIMIZED ENGINE DEMO")
    print("="*60)
    
    # Test 1: Course details (NO API)
    print("\n📚 Test 1: Course Details (NO API needed)")
    course = engine.get_course_details("CSE 100")
    if course:
        print(f"   ✅ {course['course_code']} - {course['course_name']}")
    
    # Test 2: Semantic search (API only for query)
    print("\n🔍 Test 2: Semantic Search (API only for new query)")
    results = engine.semantic_search("machine learning", top_k=3)
    print(f"   ✅ Found {len(results)} results")
    for i, result in enumerate(results, 1):
        print(f"   {i}. {result['course_code']} - {result['course_name']} (similarity: {result['similarity']:.3f})")
    
    # Test 3: AI recommendations (API for analysis)
    print("\n🤖 Test 3: AI Recommendations (API for analysis)")
    try:
        recommendations = engine.get_ai_recommendations(
            "I want to learn about artificial intelligence", 
            top_k=3
        )
        print(f"   ✅ Got {len(recommendations)} AI recommendations")
        for i, rec in enumerate(recommendations, 1):
            print(f"   {i}. {rec['course_code']} - {rec['course_name']}")
            if 'ai_reason' in rec:
                print(f"      Reason: {rec['ai_reason']}")
    except Exception as e:
        print(f"   ⚠️  API limit: {e}")
    
    print("\n📋 API Usage Summary:")
    print("   ✅ NO API: Course details, cached searches")
    print("   🔑 API: New queries, AI recommendations")

if __name__ == "__main__":
    main()
