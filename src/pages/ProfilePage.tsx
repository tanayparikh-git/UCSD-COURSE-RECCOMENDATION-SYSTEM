import React from "react";
import { UserProfile } from "../components/UserProfile";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export function ProfilePage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003B5C] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003B5C] mb-4">
            Access Denied
          </h1>
          <p className="text-gray-600 mb-6">
            You need to be logged in to view your profile.
          </p>
          <Link
            to="/"
            className="bg-[#003B5C] text-white px-6 py-2 rounded hover:bg-[#00304a] transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#003B5C] mb-2">
              My Profile
            </h1>
            <p className="text-gray-600">
              Manage your account settings and preferences
            </p>
          </div>

          <div className="space-y-6">
            <UserProfile />

            {/* Additional profile sections can be added here */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-[#003B5C] mb-4">
                Account Actions
              </h2>
              <div className="space-y-3">
                <Link
                  to="/favorites"
                  className="block w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium text-[#003B5C]">My Favorites</div>
                  <div className="text-sm text-gray-600">
                    View your saved courses
                  </div>
                </Link>

                <div className="px-4 py-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-[#003B5C]">
                    Email Preferences
                  </div>
                  <div className="text-sm text-gray-600">
                    Manage your email notifications
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Coming soon</div>
                </div>

                <div className="px-4 py-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-[#003B5C]">
                    Privacy Settings
                  </div>
                  <div className="text-sm text-gray-600">
                    Control your privacy and data
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
