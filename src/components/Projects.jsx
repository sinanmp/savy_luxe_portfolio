import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Luxury Watch Collection",
      description: "Our exclusive line of premium timepieces, crafted with precision and elegance.",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Designer Bags",
      description: "Curated collection of high-end designer bags from renowned fashion houses.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Premium Accessories",
      description: "Exclusive accessories that complement your luxury lifestyle.",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#bc9c4e]" data-aos="fade-up">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative group" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="absolute -inset-1 bg-[#bc9c4e]/20 rounded-lg blur-lg group-hover:bg-[#bc9c4e]/30 transition-all duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-[#bc9c4e]">{project.title}</h3>
                  <p className="text-white/80">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 