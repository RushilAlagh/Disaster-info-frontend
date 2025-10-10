import React from "react";
import { Link } from "react-router-dom";

const sampleAlerts = [
  { id: "a1", type: "Flood", place: "Patna, IN", time: "2m ago", severity: "High", text: "River overflow after heavy rain." },
  { id: "a2", type: "Wildfire", place: "Rishikesh, IN", time: "12m ago", severity: "Medium", text: "Forest fire spreading quickly." },
  { id: "a3", type: "Earthquake", place: "Jaipur, IN", time: "30m ago", severity: "Low", text: "Minor tremors felt across city." }
];

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">Real-time Monitoring Active</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Real-time disaster intelligence — 
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"> faster decisions, saved lives</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            Aggregate, validate and visualize disaster events from social media, news, and official sources — all in one dashboard.
          </p>
          
          <div className="flex gap-4">
            <Link 
              to="/signup" 
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold shadow-lg transition-all"
            >
              Get started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a 
              href="#how" 
              className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800 transition-all"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Live Alert Preview Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">Live Alert Preview</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs text-gray-400">Live</span>
              </div>
            </div>
            
            <div className="space-y-3">
              {sampleAlerts.map(a => (
                <div 
                  key={a.id} 
                  className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-gray-600 transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${a.severity === 'High' ? 'bg-red-500' : a.severity === 'Medium' ? 'bg-orange-500' : 'bg-yellow-500'}`}></div>
                      <div className="text-sm font-semibold text-white">{a.type}</div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-md font-medium ${
                      a.severity === 'High' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                      a.severity === 'Medium' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {a.severity}
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2 flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {a.place}
                    <span className="mx-2">•</span>
                    {a.time}
                  </div>
                  
                  <div className="text-sm text-gray-300">{a.text}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-5 pt-4 border-t border-gray-700">
              <Link 
                to="/dashboard" 
                className="text-sm text-red-400 hover:text-red-300 font-medium inline-flex items-center group transition-colors"
              >
                Open full dashboard
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { 
      id: 1, 
      title: "Collect", 
      text: "Aggregate posts, news, and feeds from many sources.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      id: 2, 
      title: "Analyze", 
      text: "AI classifies and assigns confidence scores.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    { 
      id: 3, 
      title: "Verify", 
      text: "Cross-source validation reduces false alarms.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 4, 
      title: "Alert", 
      text: "Real-time notifications and geospatial visualization.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    }
  ];

  return (
    <section id="how" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">How it works</h2>
          <p className="text-gray-400">Four simple steps to comprehensive disaster monitoring</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.id} className="relative group">
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-gray-700 to-gray-800"></div>
              )}
              
              <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all shadow-xl group-hover:shadow-2xl">
                {/* Step Number Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {s.id}
                </div>
                
                {/* Icon */}
                <div className="mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                
                <div className="font-semibold text-lg text-white mb-2">{s.title}</div>
                <div className="text-sm text-gray-400">{s.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700 shadow-2xl overflow-hidden">
          {/* Gradient top accent */}
          <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"></div>
          
          <div className="p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-white mb-3">
                Ready to monitor disasters in real time?
              </h3>
              <p className="text-gray-300 text-lg">
                Sign up for full access to the live dashboard and customizable alerts.
              </p>
              
              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time alerts
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI-powered analysis
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom notifications
                </span>
              </div>
            </div>
            
            <div>
              <Link 
                to="/signup" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-xl font-semibold text-lg shadow-lg transition-all group"
              >
                Create account
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <HowItWorks />
      <CTA />
    </div>
  );
}