import React, { useState } from "react";
import { CourseGrid } from "../components/CourseGrid";
import { CourseModal } from "../components/CourseModal";
import { Course } from "../services/aiService";
import { mockCourses } from "../utils/mockData";

export function FavoritesPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Convert mock courses to the new format and filter favorites
  const favoriteCourses: Course[] = mockCourses
    .filter((course) => favorites.includes(course.id.toString()))
    .map((course) => ({
      id: course.id.toString(),
      course_code: course.code,
      course_name: course.name,
      course_units: course.units.toString(),
      course_description: course.description,
      prerequisites: course.prerequisites,
    }));

  const openCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeCourseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
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
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#003B5C] mb-4">
              My Favorite Courses
            </h1>
            <p className="text-gray-600">
              {favoriteCourses.length === 0
                ? "You haven't added any courses to your favorites yet."
                : `You have ${favoriteCourses.length} favorite course${
                    favoriteCourses.length === 1 ? "" : "s"
                  }.`}
            </p>
          </div>

          {favoriteCourses.length > 0 ? (
            <CourseGrid
              courses={favoriteCourses}
              onViewDetails={openCourseModal}
              favorites={favorites}
              isLoading={false}
            />
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg
                  className="mx-auto h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No favorite courses yet
              </h3>
              <p className="text-gray-500">
                Start exploring courses and add them to your favorites!
              </p>
            </div>
          )}

          {/* Course Modal */}
          {selectedCourse && (
            <CourseModal
              course={selectedCourse}
              isOpen={isModalOpen}
              onClose={closeCourseModal}
              isFavorite={favorites.includes(selectedCourse.id)}
              onToggleFavorite={() => toggleFavorite(selectedCourse.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
