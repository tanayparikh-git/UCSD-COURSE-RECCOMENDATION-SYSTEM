import React, { useEffect, useState, useRef } from "react";
import { XIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

type AuthMode = "login" | "signup" | "reset";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
};

export function AuthModal({
  isOpen,
  onClose,
  initialMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { login, signup, resetPassword } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset form when mode changes
  useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setError("");
    setSuccess("");
  }, [mode]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      if (mode === "login") {
        const result = await login(email, password);
        if (result.success) {
          onClose();
        } else {
          setError(result.error || "Login failed");
        }
      } else if (mode === "signup") {
        if (password !== confirmPassword) {
          setError("Passwords do not match");
          setIsLoading(false);
          return;
        }
        if (password.length < 6) {
          setError("Password must be at least 6 characters long");
          setIsLoading(false);
          return;
        }
        const result = await signup(email, password, name);
        if (result.success) {
          setSuccess(
            "Account created successfully! Please check your email to verify your account."
          );
        } else {
          setError(result.error || "Signup failed");
        }
      } else if (mode === "reset") {
        const result = await resetPassword(email);
        if (result.success) {
          setSuccess("Password reset email sent! Please check your inbox.");
        } else {
          setError(result.error || "Failed to send reset email");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const getTitle = () => {
    switch (mode) {
      case "login":
        return "Student Login";
      case "signup":
        return "Create Account";
      case "reset":
        return "Reset Password";
      default:
        return "Authentication";
    }
  };

  const getSubmitText = () => {
    if (isLoading) {
      switch (mode) {
        case "login":
          return "Logging in...";
        case "signup":
          return "Creating account...";
        case "reset":
          return "Sending email...";
        default:
          return "Loading...";
      }
    }

    switch (mode) {
      case "login":
        return "Log In";
      case "signup":
        return "Create Account";
      case "reset":
        return "Send Reset Email";
      default:
        return "Submit";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#003B5C]">{getTitle()}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <XIcon size={24} />
            </button>
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

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                placeholder="your.name@ucsd.edu"
                required
              />
            </div>

            {mode !== "reset" && (
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={20} className="text-gray-400" />
                    ) : (
                      <EyeIcon size={20} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {mode === "signup" && (
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003B5C]"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon size={20} className="text-gray-400" />
                    ) : (
                      <EyeIcon size={20} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#003B5C] hover:bg-[#00304a] disabled:bg-gray-400 text-white font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-[#003B5C] focus:ring-opacity-50 transition-colors"
            >
              {getSubmitText()}
            </button>
          </form>

          <div className="mt-6 text-center">
            {mode === "login" && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-[#003B5C] hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
                <p className="text-sm text-gray-600">
                  Forgot your password?{" "}
                  <button
                    onClick={() => setMode("reset")}
                    className="text-[#003B5C] hover:underline font-medium"
                  >
                    Reset it
                  </button>
                </p>
              </div>
            )}

            {mode === "signup" && (
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-[#003B5C] hover:underline font-medium"
                >
                  Log in
                </button>
              </p>
            )}

            {mode === "reset" && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Remember your password?{" "}
                  <button
                    onClick={() => setMode("login")}
                    className="text-[#003B5C] hover:underline font-medium"
                  >
                    Log in
                  </button>
                </p>
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setMode("signup")}
                    className="text-[#003B5C] hover:underline font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
