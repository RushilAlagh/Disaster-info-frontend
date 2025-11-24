import React from "react";
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-gray-800 bg-gray-900/95 backdrop-blur-xl text-white">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} <span className="font-semibold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">DisasterEye</span>. All rights reserved.
            </span>
          </div>

          {/* Links Section - UPDATED */}
          <div className="flex space-x-6">
            <Link 
              to="/about"
              className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/contact"
              className="text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/docs" 
              className="text-sm text-gray-400 hover:text-pink-500 transition-colors duration-200"
            >
              Docs
            </Link>
            <Link 
              to="/privacy"
              className="text-sm text-gray-400 hover:text-red-500 transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Optional: Social Links or Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-800/50 text-center">
          <p className="text-xs text-gray-500">
            Real-time disaster monitoring and intelligence platform
          </p>
        </div>
      </div>
    </footer>
  );
}