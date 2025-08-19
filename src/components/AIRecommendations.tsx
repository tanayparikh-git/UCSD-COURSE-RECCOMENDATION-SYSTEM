import React from "react";
import { AIRecommendation } from "../services/aiService";

interface AIRecommendationsProps {
  recommendations: AIRecommendation[];
  isLoading?: boolean;
  onCourseClick: (course: AIRecommendation["course"]) => void;
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({
  recommendations,
  isLoading = false,
  onCourseClick,
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <div className="w-6 h-6 mr-2">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          </div>
          AI Recommendations
        </h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 mb-6 border border-blue-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        AI-Powered Recommendations
      </h3>

      <div className="space-y-4">
        {recommendations.slice(0, 3).map((rec, index) => (
          <div
            key={rec.course.id}
            className="bg-white rounded-lg p-4 border border-blue-100 hover:border-blue-300 transition-colors cursor-pointer"
            onClick={() => onCourseClick(rec.course)}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">
                  {rec.course.course_code}: {rec.course.course_name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {rec.course.course_units} units
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                  {Math.round(rec.score * 100)}% match
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 line-clamp-2 mb-2">
              {rec.course.course_description}
            </p>

            <div className="flex items-center text-xs text-blue-600">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              {rec.reason}
            </div>
          </div>
        ))}
      </div>

      {recommendations.length > 3 && (
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View {recommendations.length - 3} more recommendations
          </button>
        </div>
      )}
    </div>
  );
};
