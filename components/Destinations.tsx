import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '../types';

const destinations: Destination[] = [
  {
    id: 1,
    name: "Santorini Island",
    country: "Greece",
    price: 1200,
    imageUrl: "https://picsum.photos/seed/santorini/800/600",
    rating: 4.9
  },
  {
    id: 2,
    name: "Kyoto Ancient City",
    country: "Japan",
    price: 1850,
    imageUrl: "https://picsum.photos/seed/kyoto/800/600",
    rating: 4.8
  },
  {
    id: 3,
    name: "Machu Picchu",
    country: "Peru",
    price: 2100,
    imageUrl: "https://picsum.photos/seed/peru/800/600",
    rating: 4.9
  },
  {
    id: 4,
    name: "Amalfi Coast",
    country: "Italy",
    price: 1550,
    imageUrl: "https://picsum.photos/seed/amalfi/800/600",
    rating: 4.7
  }
];

const Destinations: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Top Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Dive Into The Beauty Of The World</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
            View All <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-800">{dest.rating}</span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{dest.name}</h3>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPin size={16} />
                  <span>{dest.country}</span>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 font-medium uppercase">Price</span>
                    <span className="text-lg font-bold text-brand-600">${dest.price}<span className="text-sm text-gray-400 font-normal">/person</span></span>
                  </div>
                  <button className="bg-gray-100 hover:bg-brand-50 text-brand-600 p-2 rounded-lg transition-colors">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors">
            View All <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;