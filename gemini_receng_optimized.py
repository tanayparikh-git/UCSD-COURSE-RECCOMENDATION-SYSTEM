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

class OptimizedGeminiRecommendationEngine:
    def __init__(self, csv_file: str = 'courses.csv', cache_file: str = 'embeddings_cache.pkl'):
        """
        Initialize the optimized Gemini-based recommendation engine
        
        Args:
            csv_file: Path to the CSV file containing course data
            cache_file: Path to cache file for embeddings
        """
        self.csv_file = csv_file
        self.cache_file = cache_file
        self.df = pd.read_csv(csv_file)
        self.model = genai.GenerativeModel('gemini-1.5-pro')
        
        # Create textual representations for all courses
        self.df['textual_representation'] = self.df.apply(self._create_textual_representation, axis=1)
        
        # Load or create embeddings cache
        self.embeddings_cache = self._load_embeddings_cache()
        
        print(f"Loaded {len(self.df)} courses from {csv_file}")
        print(f"Embeddings cache: {len(self.embeddings_cache)} items")
    
    def _create_textual_representation(self, row: pd.Series) -> str:
        """
        Create a textual representation of a course for embedding
        """
        return f"""Course Code: {row['Course Code']}
Course Name: {row['Course Name']}
Course Units: {row['Course Units']}
Course Description: {row['Course Description']}
Course Prerequisites: {row['Prerequisites']}"""
    
    def _load_embeddings_cache(self) -> Dict[str, List[float]]:
        """
        Load embeddings from cache file
        """
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
        """
        Save embeddings to cache file
        """
        try:
            with open(self.cache_file, 'wb') as f:
                pickle.dump(self.embeddings_cache, f)
            print(f"✅ Saved embeddings cache to {self.cache_file}")
        except Exception as e:
            print(f"⚠️  Could not save cache: {e}")
    
    def get_embeddings(self, texts: List[str]) -> List[List[float]]:
        """
        Get embeddings for a list of texts using Gemini with caching
        """
        embeddings = []
        new_embeddings_count = 0
        
        for i, text in enumerate(texts):
            if i % 50 == 0:
                print(f"Processing embedding {i+1}/{len(texts)}")
            
            # Check cache first
            if text in self.embeddings_cache:
                embeddings.append(self.embeddings_cache[text])
            else:
                try:
                    result = genai.embed_content(
                        model="models/embedding-001",
                        content=text,
                        task_type="retrieval_document"
                    )
                    embedding = result['embedding']
                    embeddings.append(embedding)
                    
                    # Cache the embedding
                    self.embeddings_cache[text] = embedding
                    new_embeddings_count += 1
                    
                    # Save cache periodically
                    if new_embeddings_count % 100 == 0:
                        self._save_embeddings_cache()
                        
                except Exception as e:
                    print(f"Error getting embedding for text {i}: {e}")
                    # Use a zero vector as fallback
                    embeddings.append([0.0] * 768)
        
        # Save cache at the end
        if new_embeddings_count > 0:
            self._save_embeddings_cache()
            print(f"✅ Added {new_embeddings_count} new embeddings to cache")
        
        return embeddings
    
    def semantic_search(self, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Perform semantic search using Gemini to find similar courses
        """
        # Get embedding for the query
        query_embedding = self.get_embeddings([query])[0]
        
        # Get embeddings for all courses
        course_embeddings = self.get_embeddings(self.df['textual_representation'].tolist())
        
        # Calculate cosine similarities
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
        """
        Calculate cosine similarity between two vectors
        """
        import numpy as np
        
        vec1 = np.array(vec1)
        vec2 = np.array(vec2)
        
        dot_product = np.dot(vec1, vec2)
        norm1 = np.linalg.norm(vec1)
        norm2 = np.linalg.norm(vec2)
        
        if norm1 == 0 or norm2 == 0:
            return 0.0
        
        return dot_product / (norm1 * norm2)
    
    def get_ai_recommendations(self, user_interests: str, completed_courses: List[str] = None, top_k: int = 5) -> List[Dict[str, Any]]:
        """
        Get AI-powered course recommendations using Gemini
        """
        # Create a comprehensive query
        query = f"User interests: {user_interests}"
        if completed_courses:
            query += f"\nCompleted courses: {', '.join(completed_courses)}"
        
        # Get semantic search results
        similar_courses = self.semantic_search(query, top_k * 2)
        
        # Use Gemini to analyze and rank the courses
        course_descriptions = []
        for course in similar_courses[:top_k * 2]:
            course_descriptions.append(f"""
Course: {course['course_code']} - {course['course_name']}
Description: {course['course_description']}
Prerequisites: {course['prerequisites']}
Units: {course['course_units']}
""")
        
        # Create prompt for Gemini to analyze and recommend
        prompt = f"""
As an academic advisor, analyze the following courses and recommend the top {top_k} courses for a student with these interests: {user_interests}

{f"Completed courses: {', '.join(completed_courses)}" if completed_courses else ""}

Available courses:
{chr(10).join(course_descriptions)}

Please provide:
1. Your top {top_k} recommendations with course codes
2. Brief explanation for each recommendation
3. Consider prerequisites and course difficulty

Format your response as JSON:
{{
    "recommendations": [
        {{
            "course_code": "COURSE_CODE",
            "reason": "Brief explanation",
            "difficulty": "Easy/Medium/Hard",
            "prerequisites_met": true/false
        }}
    ]
}}
"""
        
        try:
            response = self.model.generate_content(prompt)
            # Parse the response to extract recommendations
            recommendations = self._parse_ai_response(response.text, similar_courses)
            return recommendations[:top_k]
        except Exception as e:
            print(f"Error getting AI recommendations: {e}")
            # Fallback to semantic search
            return similar_courses[:top_k]
    
    def _parse_ai_response(self, response_text: str, similar_courses: List[Dict]) -> List[Dict[str, Any]]:
        """
        Parse Gemini's response and match it with course data
        """
        try:
            # Try to extract JSON from the response
            start_idx = response_text.find('{')
            end_idx = response_text.rfind('}') + 1
            if start_idx != -1 and end_idx != 0:
                json_str = response_text[start_idx:end_idx]
                parsed = json.loads(json_str)
                
                recommendations = []
                for rec in parsed.get('recommendations', []):
                    course_code = rec.get('course_code', '')
                    # Find matching course in our data
                    matching_course = None
                    for course in similar_courses:
                        if course['course_code'].strip() == course_code.strip():
                            matching_course = course
                            break
                    
                    if matching_course:
                        recommendations.append({
                            **matching_course,
                            'ai_reason': rec.get('reason', ''),
                            'ai_difficulty': rec.get('difficulty', 'Unknown'),
                            'prerequisites_met': rec.get('prerequisites_met', True)
                        })
                
                return recommendations
        except Exception as e:
            print(f"Error parsing AI response: {e}")
        
        # Fallback: return original similar courses
        return similar_courses
    
    def search_by_keywords(self, keywords: List[str], top_k: int = 10) -> List[Dict[str, Any]]:
        """
        Search courses by keywords using Gemini's semantic understanding
        """
        query = f"Find courses related to: {', '.join(keywords)}"
        return self.semantic_search(query, top_k)
    
    def get_course_details(self, course_code: str) -> Dict[str, Any]:
        """
        Get detailed information about a specific course
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

def main():
    """
    Example usage of the optimized Gemini Recommendation Engine
    """
    # Initialize the recommendation engine
    engine = OptimizedGeminiRecommendationEngine()
    
    # Example 1: Search by interests
    print("=== AI-Powered Recommendations ===")
    interests = "I'm interested in machine learning, artificial intelligence, and data science. I want to build AI applications."
    recommendations = engine.get_ai_recommendations(interests, top_k=5)
    
    for i, rec in enumerate(recommendations, 1):
        print(f"\n{i}. {rec['course_code']} - {rec['course_name']}")
        if 'ai_reason' in rec:
            print(f"   Reason: {rec['ai_reason']}")
        print(f"   Units: {rec['course_units']}")
        print(f"   Prerequisites: {rec['prerequisites']}")
    
    # Example 2: Semantic search
    print("\n=== Semantic Search Results ===")
    search_results = engine.semantic_search("computer programming and software development", top_k=3)
    
    for i, result in enumerate(search_results, 1):
        print(f"\n{i}. {result['course_code']} - {result['course_name']}")
        print(f"   Similarity: {result['similarity']:.3f}")
        print(f"   Description: {result['course_description'][:100]}...")

if __name__ == "__main__":
    main()
