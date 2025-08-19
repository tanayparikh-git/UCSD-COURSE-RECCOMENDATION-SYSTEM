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
  private baseUrl = "http://localhost:5000"; // Python backend URL

  // Search courses with AI recommendations
  async searchCourses(
    query: string,
    limit: number = 20
  ): Promise<SearchResult> {
    try {
      // First, get courses from Supabase
      const supabaseUrl = "https://snrkourgqlpkketqlgte.supabase.co/rest/v1";
      const supabaseKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucmtvdXJncWxwa2tldHFsZ3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1NTI0MzQsImV4cCI6MjA3MTEyODQzNH0.uXuVaTiO-vIQzy3TQvg68HRMeRgSosR23qVWHYHwGw0";

      const searchParams = new URLSearchParams({
        select: "*",
        or: `course_name.ilike.%${query}%,course_code.ilike.%${query}%,course_description.ilike.%${query}%`,
        limit: limit.toString(),
      });

      const response = await fetch(`${supabaseUrl}/courses?${searchParams}`, {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const courses: Course[] = await response.json();

      // Get AI recommendations if we have courses
      let recommendations: AIRecommendation[] = [];
      if (courses.length > 0 && query.trim()) {
        try {
          recommendations = await this.getAIRecommendations(query, courses);
        } catch (error) {
          console.warn("AI recommendations failed:", error);
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
      const response = await fetch(`${this.baseUrl}/similar/${courseId}`);

      if (!response.ok) {
        throw new Error("Failed to get similar courses");
      }

      return await response.json();
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
    const mockCourses: Course[] = [
      {
        id: "1",
        course_code: "CSE 110",
        course_name: "Software Engineering",
        course_units: "4",
        course_description:
          "Introduction to software development and engineering methods.",
        prerequisites: "CSE 100 or CSE 100R",
      },
      {
        id: "2",
        course_code: "CSE 101",
        course_name: "Design and Analysis of Algorithms",
        course_units: "4",
        course_description: "Design and analysis of efficient algorithms.",
        prerequisites: "CSE 100 or CSE 100R, and CSE 21 or MATH 154",
      },
    ];

    return mockCourses.map((course) => ({
      course,
      score: Math.random() * 0.5 + 0.5, // Random score between 0.5 and 1.0
      reason: `Recommended based on your search for "${query}"`,
    }));
  }
}

export const aiService = new AIService();
