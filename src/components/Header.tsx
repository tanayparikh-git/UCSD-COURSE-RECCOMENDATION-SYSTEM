import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, LogOutIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { AuthModal } from "./AuthModal";

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <header className="bg-[#003B5C] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">UCSD Course Finder</h1>
        </div>

        <nav className="flex items-center">
          <ul className="flex space-x-6 mr-6">
            <li>
              <Link to="/" className="hover:text-[#FFCD00] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="hover:text-[#FFCD00] transition-colors"
              >
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#FFCD00] transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <UserIcon size={16} className="mr-2" />
                <span className="text-sm">{user?.name || user?.email}</span>
              </div>
              <Link
                to="/profile"
                className="text-[#FFCD00] hover:text-[#E6B800] transition-colors text-sm"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center bg-[#FFCD00] text-[#003B5C] px-3 py-1 rounded hover:bg-[#E6B800] disabled:bg-gray-400 transition-colors"
              >
                <LogOutIcon size={16} className="mr-1" />
                <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-[#FFCD00] text-[#003B5C] px-3 py-1 rounded hover:bg-[#E6B800] transition-colors"
            >
              <span>Student Login</span>
            </button>
          )}
        </nav>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialMode="login"
      />
    </header>
  );
}
