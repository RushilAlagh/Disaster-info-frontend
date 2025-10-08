import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <nav className="relative bg-gray-900/95 backdrop-blur-xl text-white shadow-2xl border-b border-gray-800">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                DisasterEye
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-2 items-center">
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:text-red-400"
            >
              Home
            </Link>
            {token && (
              <Link 
                to="/dashboard" 
                className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:text-orange-400"
              >
                Dashboard
              </Link>
            )}
            {!token && (
              <>
                <Link 
                  to="/login" 
                  className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:text-red-400"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 ml-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all duration-200 font-semibold shadow-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
            {token && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 ml-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-lg transition-all duration-200 font-semibold shadow-lg"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-800/50 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-2">
            <Link 
              to="/" 
              className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {token && (
              <Link 
                to="/dashboard" 
                className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!token && (
              <>
                <Link 
                  to="/login" 
                  className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="block px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
            {token && (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-all font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}