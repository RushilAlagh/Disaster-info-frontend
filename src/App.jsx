import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Dashboard from "./Components/Dashboard.jsx";
// Import the new pages
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Docs from "./Components/Docs.jsx";        // <-- Added
import Privacy from "./Components/Privacy.jsx";  // <-- Added

/* Simple auth helpers using localStorage token */
export function setAuthToken(token) {
  localStorage.setItem("token", token);
}

export function clearAuthToken() {
  localStorage.removeItem("token");
}

const isAuthenticated = () => !!localStorage.getItem("token");

/* Protects private routes */
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
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/docs" element={<Docs />} />       {/* <-- Added */}
          <Route path="/privacy" element={<Privacy />} /> {/* <-- Added */}

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected dashboard route */}
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}