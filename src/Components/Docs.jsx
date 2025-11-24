import React, { useState } from "react";

export default function Docs() {
  const [activeSection, setActiveSection] = useState("intro");

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "auth", label: "Authentication" },
    { id: "reports", label: "Disaster Reports" },
    { id: "sources", label: "Data Sources" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-24 p-4 rounded-2xl bg-gray-800/50 backdrop-blur-xl border border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-red-500">Documentation</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-gray-700 text-white font-medium shadow-lg"
                      : "text-gray-400 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="bg-gray-800/30 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm">
            
            {activeSection === "intro" && (
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-4xl font-bold">Introduction</h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Welcome to the <span className="text-orange-500 font-semibold">DisasterEye</span> Developer Documentation. 
                  Our platform aggregates real-time disaster intelligence from social media, news APIs, and direct user reports.
                </p>
                <div className="p-4 bg-gray-900/80 rounded-xl border-l-4 border-orange-500">
                  <p className="text-sm text-gray-400">
                    <strong>Note:</strong> Access to the live API requires an API Key. Please contact support to request access.
                  </p>
                </div>
              </div>
            )}

            {activeSection === "auth" && (
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-4xl font-bold">Authentication</h1>
                <p className="text-gray-300">
                  All API requests must include a valid JWT token in the header.
                </p>
                
                <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-sm overflow-x-auto">
                  <div className="text-gray-500 mb-2">// Header format</div>
                  <div className="text-purple-400">Authorization: <span className="text-green-400">Bearer &lt;your_jwt_token&gt;</span></div>
                </div>

                <h3 className="text-xl font-semibold mt-8">Login Endpoint</h3>
                <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-sm">
                  <span className="text-orange-500 font-bold">POST</span> <span className="text-gray-300">/api/auth/login</span>
                </div>
              </div>
            )}

            {activeSection === "reports" && (
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-4xl font-bold">Disaster Reports</h1>
                <p className="text-gray-300">
                  Retrieve validated disaster events with geospatial data.
                </p>

                <h3 className="text-xl font-semibold mt-4">Get All Reports</h3>
                <div className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-sm mb-4">
                  <span className="text-green-500 font-bold">GET</span> <span className="text-gray-300">/api/reports</span>
                </div>

                <h3 className="text-xl font-semibold mt-4">Response Object</h3>
                <pre className="bg-gray-950 rounded-xl p-4 border border-gray-800 font-mono text-xs text-gray-300 overflow-x-auto">
{`[
  {
    "_id": "654a...",
    "title": "Flood in Downtown",
    "type": "Flood",
    "severity": "High",
    "location": "28.61, 77.20",
    "reporter": { "fullname": "John Doe" }
  }
]`}
                </pre>
              </div>
            )}

            {activeSection === "sources" && (
              <div className="space-y-6 animate-fadeIn">
                <h1 className="text-4xl font-bold">Data Sources</h1>
                <p className="text-gray-300">
                  Our intelligence engine fuses data from multiple streams to ensure accuracy.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <li className="p-4 bg-gray-900 rounded-xl border border-gray-700">
                    <div className="font-bold text-white mb-1">Social Media</div>
                    <div className="text-sm text-gray-400">Twitter/X, Reddit scraping for real-time keywords.</div>
                  </li>
                  <li className="p-4 bg-gray-900 rounded-xl border border-gray-700">
                    <div className="font-bold text-white mb-1">News APIs</div>
                    <div className="text-sm text-gray-400">Global news aggregators for confirmed reports.</div>
                  </li>
                  <li className="p-4 bg-gray-900 rounded-xl border border-gray-700">
                    <div className="font-bold text-white mb-1">User Reports</div>
                    <div className="text-sm text-gray-400">Direct on-ground reporting via our Dashboard.</div>
                  </li>
                </ul>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}