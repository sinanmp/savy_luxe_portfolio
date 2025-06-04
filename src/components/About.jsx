import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen py-16 flex items-center">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#bc9c4e]/20 rounded-lg blur-lg group-hover:bg-[#bc9c4e]/30 transition-all duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="About Savy Lux" 
                className="relative rounded-lg w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-4xl font-bold mb-6 text-[#bc9c4e]">About Us</h2>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Savy Lux represents the perfect blend of luxury and innovation. Our journey began with a simple idea: to create a brand that stands for excellence in every aspect.
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                Today, we've grown into a symbol of quality and sophistication, offering both our own exclusive products and carefully selected premium items that meet our exacting standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 