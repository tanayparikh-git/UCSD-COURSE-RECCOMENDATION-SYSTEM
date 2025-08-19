export interface GlobalFavorite {
  courseId: string;
  courseCode: string;
  courseName: string;
  favoriteCount: number;
  lastFavorited: string;
}

class FavoritesService {
  private readonly STORAGE_KEY = 'global_favorites';

  // Get all global favorites
  getGlobalFavorites(): GlobalFavorite[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading global favorites:', error);
      return [];
    }
  }

  // Add a favorite (increment count if already exists)
  addFavorite(courseId: string, courseCode: string, courseName: string): void {
    try {
      const favorites = this.getGlobalFavorites();
      const existingIndex = favorites.findIndex(fav => fav.courseId === courseId);
      
      if (existingIndex >= 0) {
        // Increment existing favorite
        favorites[existingIndex].favoriteCount += 1;
        favorites[existingIndex].lastFavorited = new Date().toISOString();
      } else {
        // Add new favorite
        favorites.push({
          courseId,
          courseCode,
          courseName,
          favoriteCount: 1,
          lastFavorited: new Date().toISOString()
        });
      }

      // Sort by favorite count (descending)
      favorites.sort((a, b) => b.favoriteCount - a.favoriteCount);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  }

  // Remove a favorite (decrement count, remove if count reaches 0)
  removeFavorite(courseId: string): void {
    try {
      const favorites = this.getGlobalFavorites();
      const existingIndex = favorites.findIndex(fav => fav.courseId === courseId);
      
      if (existingIndex >= 0) {
        favorites[existingIndex].favoriteCount -= 1;
        
        if (favorites[existingIndex].favoriteCount <= 0) {
          // Remove if count reaches 0
          favorites.splice(existingIndex, 1);
        }
        
        // Sort by favorite count (descending)
        favorites.sort((a, b) => b.favoriteCount - a.favoriteCount);
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  }

  // Get favorite count for a specific course
  getFavoriteCount(courseId: string): number {
    const favorites = this.getGlobalFavorites();
    const favorite = favorites.find(fav => fav.courseId === courseId);
    return favorite ? favorite.favoriteCount : 0;
  }

  // Check if a course is favorited by current user
  isFavoritedByUser(courseId: string): boolean {
    try {
      const userFavorites = localStorage.getItem('user_favorites');
      if (!userFavorites) return false;
      
      const favorites = JSON.parse(userFavorites);
      return favorites.includes(courseId);
    } catch (error) {
      console.error('Error checking user favorite:', error);
      return false;
    }
  }

  // Toggle user favorite and update global count
  toggleUserFavorite(courseId: string, courseCode: string, courseName: string): boolean {
    try {
      const userFavorites = localStorage.getItem('user_favorites');
      let favorites = userFavorites ? JSON.parse(userFavorites) : [];
      
      const isCurrentlyFavorited = favorites.includes(courseId);
      
      if (isCurrentlyFavorited) {
        // Remove from user favorites
        favorites = favorites.filter((id: string) => id !== courseId);
        this.removeFavorite(courseId);
      } else {
        // Add to user favorites
        favorites.push(courseId);
        this.addFavorite(courseId, courseCode, courseName);
      }
      
      localStorage.setItem('user_favorites', JSON.stringify(favorites));
      return !isCurrentlyFavorited;
    } catch (error) {
      console.error('Error toggling user favorite:', error);
      return false;
    }
  }
}

export const favoritesService = new FavoritesService();
