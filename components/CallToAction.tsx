import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/travel_cta/1920/800" 
          alt="Adventure Awaits" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/70"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Choose Your Adventure, <br/>
            We’re Ready To Make It Happen.
        </h2>
        <p className="text-gray-200 text-lg mb-10 max-w-2xl mx-auto">
            Get exclusive access to hidden gems, early-bird discounts, and personalized itineraries created by travel experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-full font-bold text-lg shadow-lg shadow-accent-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Get Started Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Contact Us
            </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;