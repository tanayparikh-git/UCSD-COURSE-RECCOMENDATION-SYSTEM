import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthProvider } from "./contexts/AuthContext";

export function AppRouter() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/about"
            element={
              <div className="p-8 text-center">About page coming soon!</div>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
