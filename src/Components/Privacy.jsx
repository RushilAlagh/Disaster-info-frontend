import React from "react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 relative py-20 px-6">
       {/* Background Accent */}
       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-pink-500"></div>
       
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: November 24, 2025</p>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center mr-3 text-sm">01</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              DisasterEye collects information to provide real-time safety alerts. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li><strong>Account Information:</strong> Name and email address provided during signup.</li>
              <li><strong>Location Data:</strong> Real-time geolocation data when you use the Dashboard map to report incidents.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our alerts and reports.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center mr-3 text-sm">02</span>
              How We Use Your Data
            </h2>
            <p className="mb-4">
              Your data is used strictly for safety and humanitarian purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>To verify disaster reports based on proximity.</li>
              <li>To visualize aggregate data on the public dashboard.</li>
              <li>To send critical notifications to users in affected zones.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-gray-800/40 backdrop-blur-md p-8 rounded-3xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center mr-3 text-sm">03</span>
              Data Security
            </h2>
            <p>
              We implement industry-standard encryption (including bcrypt for passwords and HTTPS for data transmission) to protect your personal information. We do not sell your data to third-party advertisers.
            </p>
          </section>

          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              If you have any questions about this Privacy Policy, please contact us at <a href="/contact" className="text-orange-500 hover:underline">privacy@disastereye.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}