import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Auth from './components/Auth';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <Features />
          <Destinations />
          <Testimonials />
          <CallToAction />
        </>
      )}
      
      {currentPage === 'about' && <AboutUs />}
      
      {currentPage === 'service' && <Services />}
      
      {currentPage === 'pricing' && <Pricing />}
      
      {(currentPage === 'login' || currentPage === 'signup') && (
        <Auth initialMode={currentPage === 'login' ? 'login' : 'signup'} onNavigate={setCurrentPage} />
      )}
      
      <Footer />
    </div>
  );
};

export default App;