import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">DisasterEye</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering communities and first responders with real-time disaster intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            In the face of increasing climate uncertainty, information is the most valuable resource. 
            DisasterEye was built to bridge the gap between chaotic data streams and actionable intelligence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            By aggregating data from social media, geological sensors, and official news outlets, 
            we provide a unified view of crisis situations as they unfold, allowing for faster 
            response times and safer communities.
          </p>
        </div>

        {/* Stats / Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-400">Real-time Monitoring</div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-colors">
            <div className="text-3xl font-bold text-orange-500 mb-2">AI</div>
            <div className="text-gray-400">Powered Analysis</div>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-colors">
            <div className="text-3xl font-bold text-yellow-500 mb-2">100%</div>
            <div className="text-gray-400">Open Source</div>
          </div>
        </div>
      </div>
    </div>
  );
}