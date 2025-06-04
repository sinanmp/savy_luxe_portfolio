import React, { useState } from 'react';
import logo from '../assets/savy_lux_logo_only.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="w-full">
      {/* Center Logo */}
      <div className="flex-1 flex items-center gap-16 justify-center">
        <ul className="hidden md:flex gap-8 text-[#bc9c4e] text-md font-medium">
          <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">HOME</button></li>
          <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">ABOUT</button></li>
        </ul>
        <div className='relative group'>
          <div className='absolute -inset-1 bg-[#bc9c4e]/10 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000'></div>
          <div className='relative'>
            <img 
              src={logo} 
              alt="Savy Lux Logo" 
              className='w-36 h-16 object-contain transform hover:scale-105 transition duration-300 cursor-pointer'
              onClick={() => scrollToSection('home')}
            />
          </div>
        </div>
        <ul className="hidden md:flex gap-8 text-[#bc9c4e] text-md justify-end font-medium">
          <li><button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">PROJECT</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">CONTACT</button></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#bc9c4e] absolute right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black/95 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <button onClick={() => scrollToSection('home')} className="text-[#bc9c4e] hover:text-white transition-colors text-lg py-3 text-right">HOME</button>
          <button onClick={() => scrollToSection('about')} className="text-[#bc9c4e] hover:text-white transition-colors text-lg py-3 text-right">ABOUT</button>
          <button onClick={() => scrollToSection('projects')} className="text-[#bc9c4e] hover:text-white transition-colors text-lg py-3 text-right">PROJECT</button>
          <button onClick={() => scrollToSection('contact')} className="text-[#bc9c4e] hover:text-white transition-colors text-lg py-3 text-right">CONTACT</button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;
