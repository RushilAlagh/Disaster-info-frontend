import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import io from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // load initial demo events (replace with API call later)
    setEvents([
      { id: "d1", type: "Flood", place: "Patna", lat:25.6, lon:85.1, severity: "High", time: new Date().toISOString() },
      { id: "d2", type: "Wildfire", place: "Rishikesh", lat:30.1, lon:78.3, severity: "Medium", time: new Date().toISOString() },
      { id: "d3", type: "Earthquake", place: "Jaipur", lat:26.9, lon:75.8, severity: "Low", time: new Date().toISOString() }
    ]);

    // connect socket (if backend available)
    let socket;
    try {
      socket = io(SOCKET_URL);
      socket.on("new_event", evt => setEvents(prev => [evt, ...prev]));
    } catch (err) {
      console.warn("Socket not available", err.message);
    }
    return () => socket && socket.disconnect();
  }, []);

  useEffect(() => {
    const map = L.map("dashboard-map", { 
      preferCanvas: true, 
      attributionControl: false,
      zoomControl: false
    }).setView([20.6, 78.9], 5);
    
    // Dark theme tile layer
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);
    
    // Add custom zoom control in top-right
    L.control.zoom({ position: 'topright' }).addTo(map);
    
    window._disasterMap = map;
    return () => map.remove();
  }, []);

  useEffect(() => {
    const map = window._disasterMap;
    if (!map) return;
    if (window._dashMarkers) window._dashMarkers.forEach(m => m.remove());
    window._dashMarkers = [];
    
    const filteredEvents = filter === "all" ? events : events.filter(e => e.severity === filter);
    
    filteredEvents.forEach(e => {
      if (e.lat && e.lon) {
        const colors = {
          High: "#EF4444",
          Medium: "#F97316",
          Low: "#EAB308"
        };
        
        const marker = L.circleMarker([e.lat, e.lon], {
          radius: e.severity === "High" ? 10 : e.severity === "Medium" ? 8 : 6,
          fillColor: colors[e.severity] || "#6B7280",
          color: "#fff",
          weight: 2,
          fillOpacity: 0.8
        }).addTo(map);
        
        marker.bindPopup(`
          <div style="background: #1F2937; color: white; padding: 8px; border-radius: 8px;">
            <b style="color: ${colors[e.severity]}; font-size: 14px;">${e.type}</b><br/>
            <span style="font-size: 12px; color: #D1D5DB;">${e.place}</span><br/>
            <span style="font-size: 11px; color: #9CA3AF;">Severity: ${e.severity}</span>
          </div>
        `);
        
        window._dashMarkers.push(marker);
      }
    });
  }, [events, filter]);

  const filteredEvents = filter === "all" ? events : events.filter(e => e.severity === filter);

  const stats = {
    total: events.length,
    high: events.filter(e => e.severity === "High").length,
    medium: events.filter(e => e.severity === "Medium").length,
    low: events.filter(e => e.severity === "Low").length
  };

  return (
    <div className="min-h-screen bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Stats */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Total Events</p>
                <p className="text-2xl font-bold text-white mt-1">{stats.total}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-4 border border-red-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">High Severity</p>
                <p className="text-2xl font-bold text-red-400 mt-1">{stats.high}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-4 border border-orange-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Medium Severity</p>
                <p className="text-2xl font-bold text-orange-400 mt-1">{stats.medium}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-4 border border-yellow-700/50">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Low Severity</p>
                <p className="text-2xl font-bold text-yellow-400 mt-1">{stats.low}</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-gray-700 bg-gray-900/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Live Feed
                  </h3>
                  <span className="text-xs text-gray-400">{filteredEvents.length} events</span>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      filter === "all"
                        ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("High")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      filter === "High"
                        ? "bg-red-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    High
                  </button>
                  <button
                    onClick={() => setFilter("Medium")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      filter === "Medium"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    Medium
                  </button>
                  <button
                    onClick={() => setFilter("Low")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      filter === "Low"
                        ? "bg-yellow-500 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    Low
                  </button>
                </div>
              </div>

              {/* Event List */}
              <div className="max-h-[calc(100vh-350px)] overflow-auto p-4 space-y-3">
                {filteredEvents.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <p className="text-sm">No events match filter</p>
                  </div>
                ) : (
                  filteredEvents.map(ev => (
                    <div
                      key={ev.id}
                      className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all cursor-pointer group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${
                            ev.severity === "High" ? "bg-red-500" :
                            ev.severity === "Medium" ? "bg-orange-500" : "bg-yellow-500"
                          }`}></div>
                          <div className="font-semibold text-white text-sm">{ev.type}</div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-md font-medium ${
                          ev.severity === "High"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : ev.severity === "Medium"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        }`}>
                          {ev.severity}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 flex items-center mb-2">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {ev.place}
                      </div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {new Date(ev.time).toLocaleString()}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>

          {/* Map */}
          <section className="lg:col-span-3">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
              <div className="h-[calc(100vh-250px)] w-full" id="dashboard-map"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}