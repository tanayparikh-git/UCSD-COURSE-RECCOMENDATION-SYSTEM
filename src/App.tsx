import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CourseGrid } from "./components/CourseGrid";
import { CourseModal } from "./components/CourseModal";
import { AIRecommendations } from "./components/AIRecommendations";
import { SimilarCourses } from "./components/SimilarCourses";
import { aiService, Course, AIRecommendation } from "./services/aiService";
import { mockCourses } from "./utils/mockData";
import { favoritesService } from "./services/favoritesService";

export function App() {
  console.log("App component rendering");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [recommendations, setRecommendations] = useState<AIRecommendation[]>(
    []
  );
  const [similarCourses, setSimilarCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Get user favorites
  const [userFavorites, setUserFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("user_favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Load initial courses (mock data for now)
  useEffect(() => {
    // Convert mock courses to the new format
    const convertedCourses: Course[] = mockCourses.map((course) => ({
      id: course.id.toString(),
      course_code: course.code,
      course_name: course.name,
      course_units: course.units.toString(),
      course_description: course.description,
      prerequisites: course.prerequisites,
    }));
    setCourses(convertedCourses);
  }, []);

  // Search courses with AI recommendations
  const handleSearch = async (query: string) => {
    console.log("Searching for:", query);
    setSearchQuery(query);

    if (!query.trim()) {
      setCourses([]);
      setRecommendations([]);
      return;
    }

    setIsSearching(true);

    try {
      console.log("Attempting to search with aiService...");
      const result = await aiService.searchCourses(query, 20);
      console.log("Search result:", result);
      setCourses(result.courses);
      setRecommendations(result.recommendations || []);
    } catch (error) {
      console.error("Search error:", error);
      console.log("Falling back to mock data...");
      
      // Fallback to mock data
      const filteredCourses = mockCourses.filter(
        (course) =>
          course.code.toLowerCase().includes(query.toLowerCase()) ||
          course.name.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
      );

      console.log("Filtered mock courses:", filteredCourses);

      const convertedCourses: Course[] = filteredCourses.map((course) => ({
        id: course.id.toString(),
        course_code: course.code,
        course_name: course.name,
        course_units: course.units.toString(),
        course_description: course.description,
        prerequisites: course.prerequisites,
      }));

      setCourses(convertedCourses);
      setRecommendations(aiService.getMockRecommendations(query));
    } finally {
      setIsSearching(false);
    }
  };

  const openCourseModal = async (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    setIsLoading(true);

    try {
      // Get similar courses
      const similar = await aiService.getSimilarCourses(course.id);
      setSimilarCourses(similar);
    } catch (error) {
      console.error("Error getting similar courses:", error);
      setSimilarCourses([]);
    } finally {
      setIsLoading(false);
    }
  };

  const closeCourseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
    setSimilarCourses([]);
  };

  const toggleFavorite = (courseId: string, courseCode: string, courseName: string) => {
    const isFavorited = favoritesService.toggleUserFavorite(courseId, courseCode, courseName);
    
    if (isFavorited) {
      setUserFavorites(prev => [...prev, courseId]);
    } else {
      setUserFavorites(prev => prev.filter(id => id !== courseId));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#003B5C] mb-8">
            Find Your UCSD Courses
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Fake Reviews Section - Moved to Top */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-center text-[#003B5C] mb-8">
            What Students Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 5 Star Review */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">5.0</span>
              </div>
              <p className="text-gray-800 mb-3 italic">
                "Amazing website - My mom"
              </p>
              <p className="text-sm text-gray-600">- Anonymous Student</p>
            </div>

            {/* 1 Star Review - Updated */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(1)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">1.0</span>
              </div>
              <p className="text-gray-800 mb-3 italic">
                "This sucks! Couldn't find any courses."
              </p>
              <p className="text-sm text-gray-600">- Berkeley Student</p>
            </div>

            {/* 4 Star Japanese Review */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {[...Array(1)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">4.0</span>
              </div>
              <p className="text-gray-800 mb-3 italic">
                "私はバナナがとてもとても大好きです、バナナナナ"
              </p>
              <p className="text-sm text-gray-600">- 日本の学生</p>
            </div>
          </div>
        </div>

        {/* AI Recommendations - Main Search Results */}
        {searchQuery && (
          <AIRecommendations
            recommendations={recommendations}
            isLoading={isSearching}
            onCourseClick={openCourseModal}
          />
        )}

        {/* Show course grid only when no search query */}
        {!searchQuery && (
          <CourseGrid
            courses={courses}
            onViewDetails={openCourseModal}
            favorites={userFavorites}
            isLoading={isSearching}
          />
        )}

        {/* Course Modal with Similar Courses */}
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            isOpen={isModalOpen}
            onClose={closeCourseModal}
            isFavorite={userFavorites.includes(selectedCourse.id)}
            onToggleFavorite={() => toggleFavorite(selectedCourse.id, selectedCourse.course_code, selectedCourse.course_name)}
          >
            {/* Similar Courses Section */}
            <div className="mt-6">
              <SimilarCourses
                courses={similarCourses}
                isLoading={isLoading}
                onCourseClick={openCourseModal}
              />
            </div>
          </CourseModal>
        )}
      </main>
    </div>
  );
}
