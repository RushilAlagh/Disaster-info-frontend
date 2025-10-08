// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Dashboard from "./Components/Dashboard.jsx";

/* Simple auth helpers using localStorage token */
export function setAuthToken(token) {
  localStorage.setItem("token", token);
}

export function clearAuthToken() {
  localStorage.removeItem("token");
}

const isAuthenticated = () => !!localStorage.getItem("token");

function Protected({ children }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-page text-[var(--text)]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Public landing page */}
          <Route path="/" element={<Home />} />

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected dashboard */}
<Route path="/dashboard" element={<Dashboard />} />


          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
