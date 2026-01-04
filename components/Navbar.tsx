import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-black/10 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-brand-500 text-white' : 'bg-white text-brand-600'}`}>
              <Globe size={24} />
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Wanderlust
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
                onClick={() => handleNavClick('home')}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${currentPage === 'home' && isScrolled ? 'text-brand-600' : isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
                Home
            </button>
            <button 
                onClick={() => handleNavClick('about')}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${currentPage === 'about' && isScrolled ? 'text-brand-600' : isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
                About Us
            </button>
            <button 
                onClick={() => handleNavClick('service')}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${currentPage === 'service' && isScrolled ? 'text-brand-600' : isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
                Service
            </button>
            <button 
                onClick={() => handleNavClick('pricing')}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${currentPage === 'pricing' && isScrolled ? 'text-brand-600' : isScrolled ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
                Pricing
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('login')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white hover:text-white/80'}`}
            >
              Login
            </button>
            <button 
              onClick={() => handleNavClick('signup')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 active:scale-95 ${isScrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-brand-600 hover:bg-gray-100'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 animate-fadeIn">
          <button 
            onClick={() => handleNavClick('home')}
            className={`text-left text-lg font-medium hover:text-brand-600 ${currentPage === 'home' ? 'text-brand-600' : 'text-gray-700'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className={`text-left text-lg font-medium hover:text-brand-600 ${currentPage === 'about' ? 'text-brand-600' : 'text-gray-700'}`}
          >
            About Us
          </button>
          <button 
            onClick={() => handleNavClick('service')}
            className={`text-left text-lg font-medium hover:text-brand-600 ${currentPage === 'service' ? 'text-brand-600' : 'text-gray-700'}`}
          >
            Service
          </button>
          <button 
            onClick={() => handleNavClick('pricing')}
            className={`text-left text-lg font-medium hover:text-brand-600 ${currentPage === 'pricing' ? 'text-brand-600' : 'text-gray-700'}`}
          >
            Pricing
          </button>
          <div className="border-t pt-4 flex flex-col space-y-3">
            <button 
              onClick={() => handleNavClick('login')}
              className="w-full py-2 text-center text-gray-600 font-medium"
            >
              Login
            </button>
            <button 
              onClick={() => handleNavClick('signup')}
              className="w-full py-2 text-center bg-brand-600 text-white rounded-lg font-medium"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;