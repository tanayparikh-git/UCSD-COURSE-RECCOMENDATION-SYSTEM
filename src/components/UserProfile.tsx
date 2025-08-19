import React, { useState } from "react";
import { UserIcon, EditIcon, SaveIcon, XIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export function UserProfile() {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSave = async () => {
    if (!name.trim()) {
      setError("Name cannot be empty");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await updateProfile({ name: name.trim() });
      if (result.success) {
        setSuccess("Profile updated successfully!");
        setIsEditing(false);
      } else {
        setError(result.error || "Failed to update profile");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setName(user?.name || "");
    setIsEditing(false);
    setError("");
    setSuccess("");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#003B5C]">Profile</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center text-[#003B5C] hover:text-[#00304a] transition-colors"
          >
            <EditIcon size={16} className="mr-1" />
            Edit
          </button>
        )}
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-[#003B5C] rounded-full flex items-center justify-center mr-4">
            <UserIcon size={24} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-1">Name</p>
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                placeholder="Enter your name"
              />
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="flex items-center bg-[#003B5C] text-white px-3 py-2 rounded hover:bg-[#00304a] disabled:bg-gray-400 transition-colors"
              >
                <SaveIcon size={16} className="mr-1" />
                {isLoading ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                <XIcon size={16} className="mr-1" />
                Cancel
              </button>
            </div>
          ) : (
            <p className="font-medium">{user.name || "No name set"}</p>
          )}
        </div>

        {user.created_at && (
          <div>
            <p className="text-sm text-gray-600 mb-1">Member since</p>
            <p className="font-medium">
              {new Date(user.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
