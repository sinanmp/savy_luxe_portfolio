import React from 'react';
import pic from '../assets/bussiness.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex p-10 items-center w-full">
      <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-5rem)] w-full m-0">
        {/* Left Side - Brand Image (desktop only) */}
        <div className="hidden md:flex w-full md:w-1/2 p-0 md:p-8 justify-center" data-aos="fade-right">
          <div className="relative group w-full max-w-xs md:max-w-full">
            <div className="absolute -inset-1 bg-[#bc9c4e]/20 rounded-lg blur-lg group-hover:bg-[#bc9c4e]/30 transition-all duration-300"></div>
            <img 
              src={pic}
              alt="Savy Lux Brand" 
              className="relative rounded-lg w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side - Brand Introduction (first in code, always top on mobile, right on desktop) */}
        <div className="w-full md:w-1/2 md:p-8 flex flex-col" data-aos="fade-left">
          {/* Welcome Message - Mobile Only */}
          <div className="md:hidden w-full text-center mb-4">
            <h1 className="text-4xl font-bold text-[#bc9c4e] mb-4">
              Welcome to Savy Lux
            </h1>
            <p className="text-white/80 text-lg mb-4">
              Where luxury meets innovation
            </p>
            {/* Image for mobile only */}
            <div className="flex justify-center mb-4">
              <div className="relative group w-full max-w-xs">
                <div className="absolute -inset-1 bg-[#bc9c4e]/20 rounded-lg blur-lg group-hover:bg-[#bc9c4e]/30 transition-all duration-300"></div>
                <img 
                  src={pic}
                  alt="Savy Lux Brand" 
                  className="relative rounded-lg w-full h-[220px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#bc9c4e] hidden md:block">
              Welcome to Savy Lux
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Where luxury meets innovation. We are more than just a brand – we are a lifestyle. Creating exclusive experiences through our own products and carefully curated selections.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-lg md:text-xl">✓</span>
                </div>
                <p className="text-white/80 text-sm md:text-base">Exclusive Brand Experience</p>
              </div>
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-lg md:text-xl">✓</span>
                </div>
                <p className="text-white/80 text-sm md:text-base">Premium Quality</p>
              </div>
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-lg md:text-xl">✓</span>
                </div>
                <p className="text-white/80 text-sm md:text-base">Innovative Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 