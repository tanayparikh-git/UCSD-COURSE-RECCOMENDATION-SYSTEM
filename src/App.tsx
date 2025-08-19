import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { CourseGrid } from "./components/CourseGrid";
import { CourseModal } from "./components/CourseModal";
import { AIRecommendations } from "./components/AIRecommendations";
import { SimilarCourses } from "./components/SimilarCourses";
import { aiService, Course, AIRecommendation } from "./services/aiService";
import { mockCourses } from "./utils/mockData";

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

  // Get favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("favorites");
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
    setSearchQuery(query);

    if (!query.trim()) {
      setCourses([]);
      setRecommendations([]);
      return;
    }

    setIsSearching(true);

    try {
      const result = await aiService.searchCourses(query, 20);
      setCourses(result.courses);
      setRecommendations(result.recommendations || []);
    } catch (error) {
      console.error("Search error:", error);
      // Fallback to mock data
      const filteredCourses = mockCourses.filter(
        (course) =>
          course.code.toLowerCase().includes(query.toLowerCase()) ||
          course.name.toLowerCase().includes(query.toLowerCase())
      );

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

  const toggleFavorite = (courseId: string) => {
    const newFavorites = favorites.includes(courseId)
      ? favorites.filter((id) => id !== courseId)
      : [...favorites, courseId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
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

        {/* AI Recommendations */}
        {searchQuery && (
          <AIRecommendations
            recommendations={recommendations}
            isLoading={isSearching}
            onCourseClick={openCourseModal}
          />
        )}

        {/* Course Grid */}
        <CourseGrid
          courses={courses}
          onViewDetails={openCourseModal}
          favorites={favorites}
          isLoading={isSearching}
        />

        {/* Course Modal with Similar Courses */}
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            isOpen={isModalOpen}
            onClose={closeCourseModal}
            isFavorite={favorites.includes(selectedCourse.id)}
            onToggleFavorite={() => toggleFavorite(selectedCourse.id)}
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
