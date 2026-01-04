import React from 'react';
import { ShieldCheck, Map, CalendarHeart } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: "Flexible Booking Plans",
    description: "Life happens. Change your dates or cancel with ease thanks to our flexible policies tailored for modern travelers.",
    iconName: "CalendarHeart"
  },
  {
    id: 2,
    title: "Best Choice Destinations",
    description: "We rigorously vet every destination to ensure you experience the hidden gems and top-tier spots worldwide.",
    iconName: "Map"
  },
  {
    id: 3,
    title: "Expert Local Guides",
    description: "Don't just visit—understand. Our network of local experts provides authentic insights you won't find in a guidebook.",
    iconName: "ShieldCheck"
  }
];

const Features: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'CalendarHeart': return <CalendarHeart size={32} className="text-white" />;
      case 'Map': return <Map size={32} className="text-white" />;
      case 'ShieldCheck': return <ShieldCheck size={32} className="text-white" />;
      default: return null;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">We Make Your Travel Comfortable</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We prioritize your experience, ensuring every step of your journey is seamless, safe, and truly unforgettable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-brand-500 flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:scale-110 transition-transform duration-300">
                {getIcon(feature.iconName)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;