from flask import Flask, request, jsonify
from flask_cors import CORS
import sys
import os
import json
from dotenv import load_dotenv

# Add the backend directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Load environment variables
load_dotenv()

# Import the AI recommendation engine
try:
    from final_optimized_engine import FinalOptimizedEngine
    ai_engine = FinalOptimizedEngine()
    print("✅ AI Engine loaded successfully")
except Exception as e:
    print(f"❌ Error loading AI engine: {e}")
    ai_engine = None

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'ai_engine_loaded': ai_engine is not None,
        'message': 'UCSD Course Recommendation API is running'
    })

@app.route('/search', methods=['GET'])
def search_courses():
    """Search courses endpoint"""
    query = request.args.get('q', '')
    limit = int(request.args.get('limit', 20))
    
    if not query:
        return jsonify({'courses': [], 'total': 0})
    
    try:
        # Use the AI engine for semantic search
        if ai_engine:
            results = ai_engine.semantic_search(query, limit)
            courses = []
            for course_data in results:
                course = {
                    'id': course_data.get('id', ''),
                    'course_code': course_data.get('course_code', ''),
                    'course_name': course_data.get('course_name', ''),
                    'course_units': course_data.get('course_units', ''),
                    'course_description': course_data.get('course_description', ''),
                    'prerequisites': course_data.get('prerequisites', '')
                }
                courses.append(course)
            
            return jsonify({
                'courses': courses,
                'total': len(courses),
                'query': query
            })
        else:
            return jsonify({'courses': [], 'total': 0, 'error': 'AI engine not available'})
    
    except Exception as e:
        print(f"❌ Search error: {e}")
        return jsonify({'courses': [], 'total': 0, 'error': str(e)})

@app.route('/recommend', methods=['POST'])
def get_recommendations():
    """Get AI recommendations for a query"""
    try:
        data = request.get_json()
        query = data.get('query', '')
        courses = data.get('courses', [])
        
        if not query or not ai_engine:
            return jsonify([])
        
        # Get AI recommendations
        recommendations = []
        for course in courses[:10]:  # Limit to top 10 courses
            try:
                # Create a course text for similarity calculation
                course_text = f"{course.get('course_name', '')} {course.get('course_description', '')}"
                
                # Get similarity score
                similarity = ai_engine.get_embedding_similarity(query, course_text)
                
                recommendation = {
                    'course': course,
                    'score': similarity,
                    'reason': f"Recommended based on your search for '{query}'"
                }
                recommendations.append(recommendation)
            except Exception as e:
                print(f"❌ Error processing course {course.get('course_code', '')}: {e}")
                continue
        
        # Sort by score and return top recommendations
        recommendations.sort(key=lambda x: x['score'], reverse=True)
        return jsonify(recommendations[:5])
    
    except Exception as e:
        print(f"❌ Recommendation error: {e}")
        return jsonify([])

@app.route('/similar/<course_id>', methods=['GET'])
def get_similar_courses(course_id):
    """Get similar courses based on a course ID"""
    try:
        if not ai_engine:
            return jsonify([])
        
        # This would need to be implemented based on your course data structure
        # For now, return empty array
        return jsonify([])
    
    except Exception as e:
        print(f"❌ Similar courses error: {e}")
        return jsonify([])

@app.route('/personalized', methods=['POST'])
def get_personalized_recommendations():
    """Get personalized recommendations based on user interests"""
    try:
        data = request.get_json()
        interests = data.get('interests', [])
        
        if not interests or not ai_engine:
            return jsonify([])
        
        # Combine interests into a single query
        query = ' '.join(interests)
        
        # Get recommendations based on interests
        results = ai_engine.semantic_search(query, 10)
        
        recommendations = []
        for course_data in results:
            recommendation = {
                'course': course_data,
                'score': 0.8,  # Default score
                'reason': f"Recommended based on your interests: {', '.join(interests)}"
            }
            recommendations.append(recommendation)
        
        return jsonify(recommendations)
    
    except Exception as e:
        print(f"❌ Personalized recommendations error: {e}")
        return jsonify([])

@app.route('/courses', methods=['GET'])
def get_all_courses():
    """Get all courses (for development/testing)"""
    try:
        if not ai_engine:
            return jsonify([])
        
        # This would return all courses from your database
        # For now, return empty array
        return jsonify([])
    
    except Exception as e:
        print(f"❌ Get courses error: {e}")
        return jsonify([])

if __name__ == '__main__':
    print("🚀 Starting UCSD Course Recommendation API Server...")
    print("📍 API will be available at: http://localhost:5000")
    print("🔗 Health check: http://localhost:5000/health")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
