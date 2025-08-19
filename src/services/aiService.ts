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
    const searchWords = searchTerm.split(/\s+/).filter(word => word.length > 0);
    const results: AIRecommendation[] = [];

    for (const course of courseDatabase) {
      let score = 0;
      let reason = "";
      let matchType = "";

      // Exact course code match (highest priority)
      const courseCode = course.course_code.toLowerCase();
      const cleanSearchTerm = searchTerm.replace(/\s+/g, '');
      const cleanCourseCode = courseCode.replace(/\s+/g, '');
      
      if (cleanCourseCode === cleanSearchTerm) {
        score = 1.0;
        reason = `Exact match for course code "${query}"`;
        matchType = "exact_code";
      }
      // Partial course code match
      else if (cleanCourseCode.includes(cleanSearchTerm) || cleanSearchTerm.includes(cleanCourseCode)) {
        score = 0.9;
        reason = `Course code matches "${query}"`;
        matchType = "partial_code";
      }
      // Course name match
      else if (course.course_name.toLowerCase().includes(searchTerm)) {
        score = 0.8;
        reason = `Course name contains "${query}"`;
        matchType = "course_name";
      }
      // Comprehensive description search
      else {
        const courseDesc = course.course_description.toLowerCase();
        const courseName = course.course_name.toLowerCase();
        const courseCodeLower = course.course_code.toLowerCase();
        
        // Check if ALL search words are found in description, name, or code
        const allWordsFound = searchWords.every(word => 
          courseDesc.includes(word) || 
          courseName.includes(word) || 
          courseCodeLower.includes(word)
        );
        
        // Check if ANY search words are found
        const anyWordsFound = searchWords.some(word => 
          courseDesc.includes(word) || 
          courseName.includes(word) || 
          courseCodeLower.includes(word)
        );
        
        if (allWordsFound) {
          score = 0.75;
          reason = `All search terms found in course description: "${query}"`;
          matchType = "all_words";
        } else if (anyWordsFound) {
          // Count how many words match
          const matchingWords = searchWords.filter(word => 
            courseDesc.includes(word) || 
            courseName.includes(word) || 
            courseCodeLower.includes(word)
          );
          score = 0.6 + (matchingWords.length / searchWords.length) * 0.1;
          reason = `${matchingWords.length}/${searchWords.length} search terms found: "${query}"`;
          matchType = "partial_words";
        }
        // Subject area match as fallback
        else if (this.getSubjectMatchScore(course, searchTerm) > 0) {
          score = this.getSubjectMatchScore(course, searchTerm);
          reason = `Related to "${query}"`;
          matchType = "subject_area";
        }
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

    // Computer Science & Programming
    if (searchTerm.includes('computer') || searchTerm.includes('programming') || searchTerm.includes('cs') || searchTerm.includes('software') || searchTerm.includes('algorithm') || searchTerm.includes('data structure')) {
      if (courseCode.startsWith('cse') || courseCode.startsWith('dsc') || courseDesc.includes('programming') || courseDesc.includes('software') || courseDesc.includes('algorithm') || courseDesc.includes('data structure')) {
        return 0.6;
      }
    }

    // Mathematics & Calculus
    if (searchTerm.includes('math') || searchTerm.includes('calculus') || searchTerm.includes('algebra') || searchTerm.includes('linear') || searchTerm.includes('analysis') || searchTerm.includes('differential') || searchTerm.includes('integral')) {
      if (courseCode.startsWith('math') || courseDesc.includes('calculus') || courseDesc.includes('algebra') || courseDesc.includes('analysis') || courseDesc.includes('differential') || courseDesc.includes('integral')) {
        return 0.6;
      }
    }

    // Statistics & Probability
    if (searchTerm.includes('statistics') || searchTerm.includes('statistical') || searchTerm.includes('probability') || searchTerm.includes('regression') || searchTerm.includes('inference') || searchTerm.includes('experimental design')) {
      if (courseCode.startsWith('stat') || courseCode.startsWith('math 180') || courseDesc.includes('statistics') || courseDesc.includes('probability') || courseDesc.includes('regression') || courseDesc.includes('inference')) {
        return 0.6;
      }
    }

    // Economics & Game Theory
    if (searchTerm.includes('econ') || searchTerm.includes('economics') || searchTerm.includes('game theory') || searchTerm.includes('microeconomics') || searchTerm.includes('macroeconomics') || searchTerm.includes('econometrics')) {
      if (courseCode.startsWith('econ') || courseDesc.includes('economics') || courseDesc.includes('game theory') || courseDesc.includes('microeconomics') || courseDesc.includes('macroeconomics') || courseDesc.includes('econometrics')) {
        return 0.6;
      }
    }

    // Chemistry & Organic Chemistry
    if (searchTerm.includes('chem') || searchTerm.includes('chemistry') || searchTerm.includes('organic') || searchTerm.includes('biochemistry') || searchTerm.includes('physical chemistry') || searchTerm.includes('inorganic')) {
      if (courseCode.startsWith('chem') || courseDesc.includes('chemistry') || courseDesc.includes('organic') || courseDesc.includes('biochemistry') || courseDesc.includes('physical chemistry') || courseDesc.includes('inorganic')) {
        return 0.6;
      }
    }

    // Physics & Quantum Mechanics
    if (searchTerm.includes('phys') || searchTerm.includes('physics') || searchTerm.includes('mechanics') || searchTerm.includes('quantum') || searchTerm.includes('electromagnetism') || searchTerm.includes('thermodynamics')) {
      if (courseCode.startsWith('phys') || courseDesc.includes('physics') || courseDesc.includes('mechanics') || courseDesc.includes('quantum') || courseDesc.includes('electromagnetism') || courseDesc.includes('thermodynamics')) {
        return 0.6;
      }
    }

    // Biology & Life Sciences
    if (searchTerm.includes('bio') || searchTerm.includes('biology') || searchTerm.includes('cell') || searchTerm.includes('genetics') || searchTerm.includes('physiology') || searchTerm.includes('anatomy') || searchTerm.includes('immunology') || searchTerm.includes('neurobiology')) {
      if (courseCode.startsWith('bild') || courseDesc.includes('biology') || courseDesc.includes('cell') || courseDesc.includes('genetics') || courseDesc.includes('physiology') || courseDesc.includes('anatomy') || courseDesc.includes('immunology') || courseDesc.includes('neurobiology')) {
        return 0.6;
      }
    }

    // Psychology & Cognitive Science
    if (searchTerm.includes('psych') || searchTerm.includes('psychology') || searchTerm.includes('cognitive') || searchTerm.includes('perception') || searchTerm.includes('memory') || searchTerm.includes('learning') || searchTerm.includes('neural') || searchTerm.includes('brain')) {
      if (courseCode.startsWith('psyc') || courseCode.startsWith('cogs') || courseDesc.includes('psychology') || courseDesc.includes('cognitive') || courseDesc.includes('perception') || courseDesc.includes('memory') || courseDesc.includes('learning') || courseDesc.includes('neural') || courseDesc.includes('brain')) {
        return 0.6;
      }
    }

    // Data Science & Machine Learning
    if (searchTerm.includes('data') || searchTerm.includes('machine learning') || searchTerm.includes('analytics') || searchTerm.includes('mining') || searchTerm.includes('artificial intelligence') || searchTerm.includes('nlp') || searchTerm.includes('text mining')) {
      if (courseCode.startsWith('dsc') || courseDesc.includes('data') || courseDesc.includes('machine learning') || courseDesc.includes('analytics') || courseDesc.includes('mining') || courseDesc.includes('artificial intelligence') || courseDesc.includes('natural language')) {
        return 0.6;
      }
    }

    // Laboratory & Experimental
    if (searchTerm.includes('laboratory') || searchTerm.includes('lab') || searchTerm.includes('experimental') || searchTerm.includes('techniques') || searchTerm.includes('methodology')) {
      if (courseDesc.includes('laboratory') || courseDesc.includes('lab') || courseDesc.includes('experimental') || courseDesc.includes('techniques') || courseDesc.includes('methodology')) {
        return 0.5;
      }
    }

    // Research & Capstone
    if (searchTerm.includes('research') || searchTerm.includes('capstone') || searchTerm.includes('project') || searchTerm.includes('seminar')) {
      if (courseDesc.includes('research') || courseDesc.includes('capstone') || courseDesc.includes('project') || courseDesc.includes('seminar')) {
        return 0.5;
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
