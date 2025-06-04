import React from 'react';

function VisionMission() {
  return (
    <section id="vision-mission" className="min-h-screen py-16 flex items-center">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Vision Box */}
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#bc9c4e]/10 rounded-lg blur-lg"></div>
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center mb-4">
                    <span className="text-[#bc9c4e] text-xl">👁️</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#bc9c4e]">Our Vision</h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To be the leading destination for luxury lifestyle, where innovation meets tradition. We envision a world where quality and exclusivity are not just promises, but experiences we deliver every day.
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#bc9c4e]/20">
                    <p className="text-[#bc9c4e] font-medium text-sm">"Excellence in every detail"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#bc9c4e]/10 rounded-lg blur-lg"></div>
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center mb-4">
                    <span className="text-[#bc9c4e] text-xl">🎯</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-[#bc9c4e]">Our Mission</h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    To create and curate exceptional products that elevate everyday experiences. We are committed to maintaining the highest standards of quality while pushing the boundaries of innovation in luxury retail.
                  </p>
                  <div className="mt-6 pt-4 border-t border-[#bc9c4e]/20">
                    <p className="text-[#bc9c4e] font-medium text-sm">"Innovation through tradition"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionMission; 