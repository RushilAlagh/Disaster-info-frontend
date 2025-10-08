import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    setLoading(true);

    try {
      // Demo authentication (simulate network latency)
      await new Promise(resolve => setTimeout(resolve, 800));
      localStorage.setItem("token", "demo-token-" + Date.now());

      // Go to protected dashboard after successful signup
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Signup failed — please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 relative bg-gray-900 text-white">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md relative">
        <div className="relative bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-700 overflow-hidden">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"></div>

          <div className="p-8">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl">
                  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-center text-gray-300 mb-8">
              Join the disaster intelligence platform
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-200 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 outline-none transition-all bg-gray-700 text-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-200 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 outline-none transition-all bg-gray-700 text-white"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-200 mb-2">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 outline-none transition-all bg-gray-700 text-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl text-white bg-gradient-to-r from-red-500 to-orange-500 shadow-lg hover:from-red-600 hover:to-orange-600 transition-all disabled:opacity-70"
                >
                  {loading ? 'Creating account...' : 'Create account'}
                </button>
              </div>
            </form>

            <div className="mt-4 text-sm text-center text-gray-300">
              <span>Already have an account?</span>{' '}
              <Link to="/login" className="text-red-500 font-medium hover:text-red-400 transition-colors">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}