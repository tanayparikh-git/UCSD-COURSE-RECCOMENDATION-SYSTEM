import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#003B5C] text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold hover:text-[#FFCD00] transition-colors"
        >
          UCSD Course Finder
        </Link>
        <nav>
          <Link
            to="/favorites"
            className="text-white hover:text-[#FFCD00] transition-colors text-sm md:text-base font-medium"
          >
            Popular Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
