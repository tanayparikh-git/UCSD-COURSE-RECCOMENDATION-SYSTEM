import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { FavoritesPage } from "./pages/FavoritesPage";
import { AuthProvider } from "./contexts/AuthContext";

// Simple error boundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h1>Something went wrong.</h1>
          <p>Error: {this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export function AppRouter() {
  console.log("AppRouter rendering");
  
  return (
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}
