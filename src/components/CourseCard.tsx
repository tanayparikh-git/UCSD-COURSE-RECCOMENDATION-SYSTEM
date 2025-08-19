import { Course } from "../services/aiService";
import { StarIcon } from "lucide-react";

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  isFavorite: boolean;
}

export function CourseCard({
  course,
  onViewDetails,
  isFavorite,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#003B5C]">
            {course.course_code}
          </h3>
          {isFavorite && (
            <StarIcon size={20} className="text-[#FFCD00] fill-[#FFCD00]" />
          )}
        </div>

        <h4 className="text-lg font-medium mb-2">{course.course_name}</h4>

        <div className="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded mb-3">
          {course.course_units} units
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {course.course_description}
        </p>

        <button
          onClick={() => onViewDetails(course)}
          className="w-full border border-[#003B5C] text-[#003B5C] hover:bg-[#003B5C] hover:text-white py-2 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#003B5C] focus:ring-opacity-50"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
