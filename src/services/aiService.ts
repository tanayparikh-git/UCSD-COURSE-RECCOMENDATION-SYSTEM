// AI Service for connecting React frontend with Python backend
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
  private baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"; // Python backend URL
  private supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://snrkourgqlpkketqlgte.supabase.co/rest/v1";
  private supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0";

  // Search courses with AI recommendations
  async searchCourses(
    query: string,
    limit: number = 20
  ): Promise<SearchResult> {
    try {
      console.log("aiService: Searching for query:", query);
      console.log("aiService: Using Supabase URL:", this.supabaseUrl);
      
      // First, try to get all courses to see the structure
      const testParams = new URLSearchParams({
        select: "*",
        limit: "100",
      });

      const testUrl = `${this.supabaseUrl}/courses?${testParams}`;
      console.log("aiService: Testing with URL:", testUrl);

      const testResponse = await fetch(testUrl, {
        headers: {
          apikey: this.supabaseKey,
          Authorization: `Bearer ${this.supabaseKey}`,
        },
      });

      console.log("aiService: Test response status:", testResponse.status);

      if (!testResponse.ok) {
        throw new Error(`Failed to fetch courses: ${testResponse.status} - ${testResponse.statusText}`);
      }

      const testCourses = await testResponse.json();
      console.log("aiService: Test courses structure:", testCourses);

      // Filter courses based on the search query
      const filteredCourses = testCourses.filter((course: any) => {
        const searchTerm = query.toLowerCase().trim();
        
        // Handle specific course code searches (e.g., "econ 1", "math 20a")
        const courseCode = course.course_code?.toLowerCase() || '';
        const courseName = course.course_name?.toLowerCase() || '';
        const courseDesc = course.course_description?.toLowerCase() || '';
        
        // Remove spaces for course code matching
        const cleanSearchTerm = searchTerm.replace(/\s+/g, '');
        const cleanCourseCode = courseCode.replace(/\s+/g, '');
        
        // Exact course code match (e.g., "econ 1" matches "ECON 1")
        if (cleanCourseCode.includes(cleanSearchTerm) || cleanSearchTerm.includes(cleanCourseCode)) {
          return true;
        }
        
        // Partial matches
        return (
          courseName.includes(searchTerm) ||
          courseCode.includes(searchTerm) ||
          courseDesc.includes(searchTerm)
        );
      });

      console.log("aiService: Filtered courses:", filteredCourses);
      const courses: Course[] = filteredCourses;
      console.log("aiService: Found courses:", courses.length);

      // Get AI recommendations if we have courses
      let recommendations: AIRecommendation[] = [];
      if (courses.length > 0 && query.trim()) {
        try {
          // Skip AI recommendations for now since backend isn't deployed
          console.log("Skipping AI recommendations - backend not deployed");
          recommendations = this.getMockRecommendations(query);
        } catch (error) {
          console.warn("AI recommendations failed:", error);
          recommendations = this.getMockRecommendations(query);
        }
      }

      return {
        courses,
        recommendations,
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

  // Get AI recommendations for a query
  async getAIRecommendations(
    query: string,
    courses: Course[]
  ): Promise<AIRecommendation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/recommend`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          courses: courses.slice(0, 10), // Limit to top 10 for AI processing
        }),
      });

      if (!response.ok) {
        throw new Error("AI recommendation failed");
      }

      return await response.json();
    } catch (error) {
      console.error("AI recommendation error:", error);
      return [];
    }
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
      const response = await fetch(`${this.baseUrl}/personalized`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interests }),
      });

      if (!response.ok) {
        throw new Error("Personalized recommendations failed");
      }

      return await response.json();
    } catch (error) {
      console.error("Personalized recommendations error:", error);
      return [];
    }
  }

  // Fallback to mock data if backend is not available
  getMockRecommendations(query: string): AIRecommendation[] {
    const searchTerm = query.toLowerCase();
    
    // Create dynamic recommendations based on the search query
    const recommendations: AIRecommendation[] = [];
    
    // Add relevant courses based on search term
    if (searchTerm.includes('computer') || searchTerm.includes('cse') || searchTerm.includes('programming') || searchTerm.includes('cs')) {
      recommendations.push({
        course: {
          id: "1",
          course_code: "CSE 8A",
          course_name: "Introduction to Computer Science: Java (I)",
          course_units: "4",
          course_description: "Introduction to computer programming in Java. Covers fundamental programming concepts including variables, control structures, methods, and arrays.",
          prerequisites: "None",
        },
        score: 0.95,
        reason: `Perfect match for "${query}" - foundational computer science course`,
      });
      
      recommendations.push({
        course: {
          id: "2",
          course_code: "CSE 8B",
          course_name: "Introduction to Computer Science: Java (II)",
          course_units: "4",
          course_description: "Continuation of CSE 8A. Covers object-oriented programming, inheritance, polymorphism, and basic data structures.",
          prerequisites: "CSE 8A",
        },
        score: 0.90,
        reason: `Great follow-up to "${query}" - advanced programming concepts`,
      });
      
      recommendations.push({
        course: {
          id: "3",
          course_code: "CSE 12",
          course_name: "Basic Data Structures and Object-Oriented Design",
          course_units: "4",
          course_description: "Implementation of basic data structures and object-oriented design principles.",
          prerequisites: "CSE 8B or CSE 11",
        },
        score: 0.88,
        reason: `Essential for "${query}" - data structures and OOP`,
      });
      
      recommendations.push({
        course: {
          id: "4",
          course_code: "CSE 15L",
          course_name: "Software Tools and Techniques Laboratory",
          course_units: "2",
          course_description: "Hands-on experience with software development tools and techniques.",
          prerequisites: "CSE 8B or CSE 11",
        },
        score: 0.85,
        reason: `Practical skills for "${query}" - development tools`,
      });
      
      recommendations.push({
        course: {
          id: "5",
          course_code: "CSE 20",
          course_name: "Discrete Mathematics",
          course_units: "4",
          course_description: "Mathematical foundations for computer science including logic, sets, and combinatorics.",
          prerequisites: "MATH 20A",
        },
        score: 0.87,
        reason: `Mathematical foundation for "${query}" - discrete math`,
      });
      
      recommendations.push({
        course: {
          id: "6",
          course_code: "CSE 21",
          course_name: "Mathematics for Algorithms and Systems",
          course_units: "4",
          course_description: "Mathematical concepts essential for algorithm analysis and system design.",
          prerequisites: "CSE 20, MATH 20B",
        },
        score: 0.84,
        reason: `Advanced math for "${query}" - algorithm analysis`,
      });
    }
    
    if (searchTerm.includes('math') || searchTerm.includes('calculus')) {
      recommendations.push({
        course: {
          id: "3",
          course_code: "MATH 20A",
          course_name: "Calculus for Science and Engineering",
          course_units: "4",
          course_description: "Differential calculus of functions of one variable. Applications to science and engineering.",
          prerequisites: "MATH 4C or MATH 10A or MATH 20A",
        },
        score: 0.92,
        reason: `Essential for "${query}" - foundational calculus course`,
      });
      
      recommendations.push({
        course: {
          id: "4",
          course_code: "MATH 20B",
          course_name: "Calculus for Science and Engineering",
          course_units: "4",
          course_description: "Integral calculus of functions of one variable. Applications to science and engineering.",
          prerequisites: "MATH 20A",
        },
        score: 0.88,
        reason: `Continues from "${query}" - integral calculus`,
      });
    }
    
    if (searchTerm.includes('econ') || searchTerm.includes('economics')) {
      recommendations.push({
        course: {
          id: "9",
          course_code: "ECON 1",
          course_name: "Principles of Microeconomics",
          course_units: "4",
          course_description: "Introduction to microeconomic principles including supply and demand, market structures, and consumer behavior.",
          prerequisites: "None",
        },
        score: 0.94,
        reason: `Perfect match for "${query}" - introductory economics course`,
      });
      
      recommendations.push({
        course: {
          id: "10",
          course_code: "ECON 2",
          course_name: "Principles of Macroeconomics",
          course_units: "4",
          course_description: "Introduction to macroeconomic principles including GDP, inflation, unemployment, and fiscal policy.",
          prerequisites: "ECON 1",
        },
        score: 0.89,
        reason: `Great follow-up to "${query}" - macroeconomic perspective`,
      });
      
      recommendations.push({
        course: {
          id: "11",
          course_code: "ECON 3",
          course_name: "Intermediate Microeconomics",
          course_units: "4",
          course_description: "Advanced microeconomic theory including consumer choice, production theory, and market equilibrium.",
          prerequisites: "ECON 1, MATH 20A",
        },
        score: 0.85,
        reason: `Advanced course for "${query}" - intermediate theory`,
      });
      
      recommendations.push({
        course: {
          id: "12",
          course_code: "ECON 4",
          course_name: "Intermediate Macroeconomics",
          course_units: "4",
          course_description: "Advanced macroeconomic theory including economic growth, business cycles, and monetary policy.",
          prerequisites: "ECON 2, MATH 20A",
        },
        score: 0.83,
        reason: `Advanced course for "${query}" - macroeconomic theory`,
      });
      
      recommendations.push({
        course: {
          id: "13",
          course_code: "ECON 100A",
          course_name: "Microeconomic Analysis",
          course_units: "4",
          course_description: "Upper-division microeconomic analysis with mathematical rigor and advanced applications.",
          prerequisites: "ECON 3, MATH 20B",
        },
        score: 0.80,
        reason: `Upper-division course for "${query}" - advanced analysis`,
      });
    }
    
    if (searchTerm.includes('chem') || searchTerm.includes('chemistry')) {
      recommendations.push({
        course: {
          id: "5",
          course_code: "CHEM 6A",
          course_name: "General Chemistry I",
          course_units: "4",
          course_description: "Fundamental principles of chemistry including atomic structure, bonding, and chemical reactions.",
          prerequisites: "MATH 3C or MATH 4C or MATH 10A",
        },
        score: 0.91,
        reason: `Perfect for "${query}" - foundational chemistry course`,
      });
    }
    
    if (searchTerm.includes('phys') || searchTerm.includes('physics')) {
      recommendations.push({
        course: {
          id: "6",
          course_code: "PHYS 2A",
          course_name: "Physics-Mechanics",
          course_units: "4",
          course_description: "Classical mechanics including kinematics, dynamics, energy, momentum, and rotational motion.",
          prerequisites: "MATH 20A",
        },
        score: 0.93,
        reason: `Essential for "${query}" - foundational physics course`,
      });
    }
    
    if (searchTerm.includes('bio') || searchTerm.includes('biology')) {
      recommendations.push({
        course: {
          id: "7",
          course_code: "BILD 1",
          course_name: "The Cell",
          course_units: "4",
          course_description: "Introduction to cell biology including cell structure, function, and molecular biology.",
          prerequisites: "None",
        },
        score: 0.90,
        reason: `Perfect for "${query}" - foundational biology course`,
      });
      
      recommendations.push({
        course: {
          id: "8",
          course_code: "BILD 2",
          course_name: "Multicellular Life",
          course_units: "4",
          course_description: "Introduction to organismal biology including genetics, evolution, and ecology.",
          prerequisites: "BILD 1",
        },
        score: 0.87,
        reason: `Great follow-up to "${query}" - organismal biology`,
      });
    }
    
    // If no specific matches, provide general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        course: {
          id: "1",
          course_code: "CSE 8A",
          course_name: "Introduction to Computer Science: Java (I)",
          course_units: "4",
          course_description: "Introduction to computer programming in Java. Covers fundamental programming concepts including variables, control structures, methods, and arrays.",
          prerequisites: "None",
        },
        score: 0.85,
        reason: `Popular course related to "${query}"`,
      });
    }
    
    return recommendations;
  }
}

export const aiService = new AIService();
