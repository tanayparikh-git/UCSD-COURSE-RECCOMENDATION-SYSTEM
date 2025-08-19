import { useEffect, useRef, ReactNode } from "react";
import { Course } from "../services/aiService";
import { XIcon, StarIcon } from "lucide-react";

interface CourseModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  children?: ReactNode;
}

export function CourseModal({
  course,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
  children,
}: CourseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-[#003B5C]">
                {course.course_code}
              </h2>
              <h3 className="text-xl">{course.course_name}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <XIcon size={24} />
            </button>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
              {course.course_units} units
            </span>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-[#003B5C]">
              Description
            </h4>
            <p className="text-gray-700">{course.course_description}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-medium mb-2 text-[#003B5C]">
              Prerequisites
            </h4>
            <p className="text-gray-700">
              {course.prerequisites || "No prerequisites required."}
            </p>
          </div>

          {/* Similar Courses Section */}
          {children}

          <button
            onClick={onToggleFavorite}
            className="flex items-center justify-center w-full bg-[#FFCD00] hover:bg-[#E6B800] text-[#003B5C] font-bold py-3 px-4 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFCD00] focus:ring-opacity-50"
          >
            <StarIcon
              size={20}
              className={isFavorite ? "fill-[#003B5C] mr-2" : "mr-2"}
            />
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
