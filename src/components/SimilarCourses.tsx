import React from "react";
import { Course } from "../services/aiService";

interface SimilarCoursesProps {
  courses: Course[];
  isLoading?: boolean;
  onCourseClick: (course: Course) => void;
}

export const SimilarCourses: React.FC<SimilarCoursesProps> = ({
  courses,
  isLoading = false,
  onCourseClick,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Similar Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Similar Courses
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.slice(0, 4).map((course) => (
          <div
            key={course.id}
            className="border border-gray-200 rounded-lg p-3 hover:border-green-300 hover:bg-green-50 transition-colors cursor-pointer"
            onClick={() => onCourseClick(course)}
          >
            <h4 className="font-medium text-gray-900 text-sm">
              {course.course_code}: {course.course_name}
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              {course.course_units} units
            </p>
            <p className="text-xs text-gray-700 mt-2 line-clamp-2">
              {course.course_description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
