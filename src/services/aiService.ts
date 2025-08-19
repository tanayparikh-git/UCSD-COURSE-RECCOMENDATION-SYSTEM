import { courseDatabase, CourseData } from "../utils/courseDatabase";

// Course interface
export interface Course {
  id: string;
  course_code: string;
  course_name: string;
  course_units: string;
  course_description: string;
  prerequisites: string;
}

export interface AIRecommendation {
  course: Course;
  score: number;
  reason: string;
}

export interface SearchResult {
  courses: Course[];
  recommendations?: AIRecommendation[];
  total: number;
}

class AIService {
  // Search courses with AI recommendations
  async searchCourses(
    query: string,
    limit: number = 5
  ): Promise<SearchResult> {
    try {
      console.log("aiService: Searching for query:", query);
      
      // Use the local course database instead of Supabase
      const searchResults = this.searchCourseDatabase(query);
      
      // Convert to Course interface
      const courses: Course[] = searchResults.map(result => ({
        id: result.course.id,
        course_code: result.course.course_code,
        course_name: result.course.course_name,
        course_units: result.course.course_units,
        course_description: result.course.course_description,
        prerequisites: result.course.prerequisites,
      }));

      console.log("aiService: Found courses:", courses.length);

      return {
        courses: courses.slice(0, limit),
        recommendations: searchResults.slice(0, limit),
        total: courses.length,
      };
    } catch (error) {
      console.error("Search error:", error);
      return {
        courses: [],
        recommendations: [],
        total: 0,
      };
    }
  }

  // Search the course database with scoring
  private searchCourseDatabase(query: string): AIRecommendation[] {
    const searchTerm = query.toLowerCase().trim();
    const results: AIRecommendation[] = [];

    for (const course of courseDatabase) {
      let score = 0;
      let reason = "";

      // Exact course code match (highest priority)
      const courseCode = course.course_code.toLowerCase();
      const cleanSearchTerm = searchTerm.replace(/\s+/g, '');
      const cleanCourseCode = courseCode.replace(/\s+/g, '');
      
      if (cleanCourseCode === cleanSearchTerm) {
        score = 1.0;
        reason = `Exact match for course code "${query}"`;
      }
      // Partial course code match
      else if (cleanCourseCode.includes(cleanSearchTerm) || cleanSearchTerm.includes(cleanCourseCode)) {
        score = 0.9;
        reason = `Course code matches "${query}"`;
      }
      // Course name match
      else if (course.course_name.toLowerCase().includes(searchTerm)) {
        score = 0.8;
        reason = `Course name contains "${query}"`;
      }
      // Description keyword match
      else if (course.course_description.toLowerCase().includes(searchTerm)) {
        score = 0.7;
        reason = `Course description contains "${query}"`;
      }
      // Subject area match
      else if (this.getSubjectMatchScore(course, searchTerm) > 0) {
        score = this.getSubjectMatchScore(course, searchTerm);
        reason = `Related to "${query}"`;
      }

      if (score > 0) {
        results.push({
          course: {
            id: course.id,
            course_code: course.course_code,
            course_name: course.course_name,
            course_units: course.course_units,
            course_description: course.course_description,
            prerequisites: course.prerequisites,
          },
          score,
          reason,
        });
      }
    }

    // Sort by score (highest first) and return top 5
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  // Get subject match score for broader searches
  private getSubjectMatchScore(course: CourseData, searchTerm: string): number {
    const courseCode = course.course_code.toLowerCase();
    const courseName = course.course_name.toLowerCase();
    const courseDesc = course.course_description.toLowerCase();

    // Computer Science
    if (searchTerm.includes('computer') || searchTerm.includes('programming') || searchTerm.includes('cs') || searchTerm.includes('software')) {
      if (courseCode.startsWith('cse') || courseCode.startsWith('dsc') || courseDesc.includes('programming') || courseDesc.includes('software')) {
        return 0.6;
      }
    }

    // Mathematics
    if (searchTerm.includes('math') || searchTerm.includes('calculus') || searchTerm.includes('algebra') || searchTerm.includes('statistics')) {
      if (courseCode.startsWith('math') || courseCode.startsWith('stat') || courseDesc.includes('calculus') || courseDesc.includes('statistics')) {
        return 0.6;
      }
    }

    // Economics
    if (searchTerm.includes('econ') || searchTerm.includes('economics') || searchTerm.includes('game theory')) {
      if (courseCode.startsWith('econ') || courseDesc.includes('economics') || courseDesc.includes('game theory')) {
        return 0.6;
      }
    }

    // Chemistry
    if (searchTerm.includes('chem') || searchTerm.includes('chemistry')) {
      if (courseCode.startsWith('chem') || courseDesc.includes('chemistry')) {
        return 0.6;
      }
    }

    // Physics
    if (searchTerm.includes('phys') || searchTerm.includes('physics')) {
      if (courseCode.startsWith('phys') || courseDesc.includes('physics')) {
        return 0.6;
      }
    }

    // Biology
    if (searchTerm.includes('bio') || searchTerm.includes('biology')) {
      if (courseCode.startsWith('bild') || courseDesc.includes('biology')) {
        return 0.6;
      }
    }

    // Psychology
    if (searchTerm.includes('psych') || searchTerm.includes('psychology')) {
      if (courseCode.startsWith('psyc') || courseDesc.includes('psychology')) {
        return 0.6;
      }
    }

    // Data Science
    if (searchTerm.includes('data') || searchTerm.includes('machine learning') || searchTerm.includes('analytics')) {
      if (courseCode.startsWith('dsc') || courseDesc.includes('data') || courseDesc.includes('machine learning')) {
        return 0.6;
      }
    }

    // Probability and Statistics
    if (searchTerm.includes('probability') || searchTerm.includes('statistical')) {
      if (courseDesc.includes('probability') || courseDesc.includes('statistical') || courseCode.startsWith('stat') || courseCode.startsWith('math 180')) {
        return 0.6;
      }
    }

    return 0;
  }

  // Get similar courses based on a course
  async getSimilarCourses(courseId: string): Promise<Course[]> {
    try {
      // Skip similar courses for now since backend isn't deployed
      console.log("Skipping similar courses - backend not deployed");
      return [];
    } catch (error) {
      console.error("Similar courses error:", error);
      return [];
    }
  }

  // Get personalized recommendations based on user interests
  async getPersonalizedRecommendations(
    interests: string[]
  ): Promise<AIRecommendation[]> {
    try {
      // Skip personalized recommendations for now since backend isn't deployed
      console.log("Skipping personalized recommendations - backend not deployed");
      return [];
    } catch (error) {
      console.error("Personalized recommendations error:", error);
      return [];
    }
  }

  // Fallback to mock data if backend is not available
  getMockRecommendations(query: string): AIRecommendation[] {
    return this.searchCourseDatabase(query);
  }
}

export const aiService = new AIService();
