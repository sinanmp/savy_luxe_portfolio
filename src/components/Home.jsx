import React from 'react';
import pic from '../assets/bussiness.jpg';

function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-5rem)]">
        {/* Left Side - Brand Image */}
        <div className="w-full md:w-1/2 p-8" data-aos="fade-right">
          <div className="relative group">
            <div className="absolute -inset-1 bg-[#bc9c4e]/20 rounded-lg blur-lg group-hover:bg-[#bc9c4e]/30 transition-all duration-300"></div>
            <img 
              src={pic}
              alt="Savy Lux Brand" 
              className="relative rounded-lg w-full h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side - Brand Introduction */}
        <div className="w-full md:w-1/2 p-8" data-aos="fade-left">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h1 className="text-5xl font-bold mb-6 text-[#bc9c4e]">
              Welcome to Savy Lux
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Where luxury meets innovation. We are more than just a brand – we are a lifestyle. Creating exclusive experiences through our own products and carefully curated selections.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-xl">✓</span>
                </div>
                <p className="text-white/80">Exclusive Brand Experience</p>
              </div>
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-xl">✓</span>
                </div>
                <p className="text-white/80">Premium Quality</p>
              </div>
              <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[#bc9c4e]/20 flex items-center justify-center">
                  <span className="text-[#bc9c4e] text-xl">✓</span>
                </div>
                <p className="text-white/80">Innovative Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home; 