import React from 'react';
import { MapPin, Calendar, Users, Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/travel_hero_2/1920/1080" 
          alt="Beautiful Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Discover The Magic In <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">Every Destination</span> With Us!
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md">
            Embark on unforgettable journeys with our exclusive travel packages. 
            We curate the best experiences so you can focus on creating memories.
          </p>
        </div>
      </div>

      {/* Floating Search Bar */}
      <div className="relative z-20 -mt-24 px-4 w-full flex justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-4 items-center border border-gray-100">
          
          {/* Destination Input */}
          <div className="md:col-span-3 relative group">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors cursor-pointer">
              <MapPin className="text-brand-500" size={20} />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
                <input 
                  type="text" 
                  placeholder="Where are you going?" 
                  className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-400 text-sm font-medium w-full"
                />
              </div>
            </div>
          </div>

          {/* Check In */}
          <div className="md:col-span-3 relative group">
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors cursor-pointer">
              <Calendar className="text-brand-500" size={20} />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Check In</label>
                <input 
                  type="date" 
                  className="bg-transparent border-none outline-none text-gray-900 text-sm font-medium w-full"
                />
              </div>
            </div>
          </div>

          {/* Check Out */}
          <div className="md:col-span-3 relative group">
             <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors cursor-pointer">
              <Calendar className="text-brand-500" size={20} />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Check Out</label>
                <input 
                  type="date" 
                  className="bg-transparent border-none outline-none text-gray-900 text-sm font-medium w-full"
                />
              </div>
            </div>
          </div>

          {/* Guests & Button */}
          <div className="md:col-span-3 flex gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors cursor-pointer">
              <Users className="text-brand-500" size={20} />
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Guests</label>
                <select className="bg-transparent border-none outline-none text-gray-900 text-sm font-medium w-full appearance-none">
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>Family</option>
                </select>
              </div>
            </div>
            
            <button className="bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-2xl shadow-lg shadow-brand-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
              <Search size={24} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;