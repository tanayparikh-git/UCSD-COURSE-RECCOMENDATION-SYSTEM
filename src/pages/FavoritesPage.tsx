import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { favoritesService, GlobalFavorite } from "../services/favoritesService";

export function FavoritesPage() {
  const [favorites, setFavorites] = useState<GlobalFavorite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = () => {
    setLoading(true);
    const globalFavorites = favoritesService.getGlobalFavorites();
    setFavorites(globalFavorites);
    setLoading(false);
  };

  const handleFavoriteToggle = (courseId: string, courseCode: string, courseName: string) => {
    favoritesService.toggleUserFavorite(courseId, courseCode, courseName);
    loadFavorites(); // Reload to update counts
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003B5C] mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading popular favorites...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#003B5C] hover:text-[#FFCD00] transition-colors mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Course Finder
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003B5C] mb-2">
            Most Popular Courses
          </h1>
          <p className="text-gray-600">
            Courses ranked by how many students have favorited them
          </p>
        </div>

        {/* Favorites List */}
        {favorites.length === 0 ? (
          <div className="text-center py-12">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              No favorites yet
            </h2>
            <p className="text-gray-500 mb-6">
              Start favoriting courses to see them appear here!
            </p>
            <Link 
              to="/" 
              className="bg-[#003B5C] text-white px-6 py-3 rounded-lg hover:bg-[#002B4C] transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {favorites.map((favorite, index) => (
              <div 
                key={favorite.courseId}
                className="bg-white rounded-lg shadow-md p-6 border-l-4 border-[#FFCD00]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-[#003B5C] text-white text-sm font-bold px-3 py-1 rounded-full mr-3">
                        #{index + 1}
                      </span>
                      <span className="text-2xl font-bold text-[#FFCD00] mr-2">
                        {favorite.favoriteCount}
                      </span>
                      <Heart 
                        size={20} 
                        className={`mr-1 ${
                          favoritesService.isFavoritedByUser(favorite.courseId)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400'
                        }`}
                      />
                      <span className="text-sm text-gray-600">
                        {favorite.favoriteCount === 1 ? 'favorite' : 'favorites'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-[#003B5C] mb-1">
                      {favorite.courseCode}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {favorite.courseName}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span>Last favorited: {formatDate(favorite.lastFavorited)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleFavoriteToggle(favorite.courseId, favorite.courseCode, favorite.courseName)}
                    className={`ml-4 p-2 rounded-full transition-colors ${
                      favoritesService.isFavoritedByUser(favorite.courseId)
                        ? 'bg-red-100 text-red-500 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                    title={
                      favoritesService.isFavoritedByUser(favorite.courseId)
                        ? 'Remove from favorites'
                        : 'Add to favorites'
                    }
                  >
                    <Heart 
                      size={20} 
                      className={
                        favoritesService.isFavoritedByUser(favorite.courseId)
                          ? 'fill-current'
                          : ''
                      }
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {favorites.length > 0 && (
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-[#003B5C] mb-4">
              Statistics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFCD00]">
                  {favorites.length}
                </div>
                <div className="text-gray-600">Total Favorited Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFCD00]">
                  {favorites.reduce((sum, fav) => sum + fav.favoriteCount, 0)}
                </div>
                <div className="text-gray-600">Total Favorites</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FFCD00]">
                  {favorites.length > 0 ? Math.round(favorites[0].favoriteCount) : 0}
                </div>
                <div className="text-gray-600">Most Popular Course</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
