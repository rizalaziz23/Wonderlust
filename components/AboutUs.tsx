import React from 'react';
import { Target, Heart, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-16 animate-fadeIn">
      {/* Header Section */}
      <div className="relative bg-brand-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/travel_map/1920/600" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-brand-900"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Wanderlust</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Connecting the world through unforgettable experiences, sustainable travel, and authentic stories.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <img 
                src="https://picsum.photos/seed/travel_friends_hike/800/800" 
                alt="Our founding team" 
                className="relative rounded-3xl shadow-2xl z-10 object-cover aspect-square"
              />
            </div>
            <div>
              <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">From a Backpack to a Global Community</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Wanderlust was born in 2015 when two best friends, Sarah and Mike, realized that the best travel stories weren't found in guidebooks, but in the connections made along the way.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                What started as a humble blog sharing hidden gems has grown into a premier travel platform connecting over 100,000 travelers with curated experiences in 50+ countries. We believe every journey should change you for the better.
              </p>
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                <div>
                   <h4 className="text-4xl font-bold text-brand-600">50+</h4>
                   <p className="text-gray-500 font-medium">Countries</p>
                </div>
                <div>
                   <h4 className="text-4xl font-bold text-brand-600">10k+</h4>
                   <p className="text-gray-500 font-medium">Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Our mission is to make travel accessible, sustainable, and meaningful for everyone.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: "Global Connection", desc: "Bridging cultures through authentic travel experiences that respect local communities." },
                { icon: Heart, title: "Customer First", desc: "Your safety, comfort, and happiness are our top priorities, from booking to returning home." },
                { icon: Target, title: "Sustainability", desc: "Promoting eco-friendly travel practices to preserve our beautiful planet for future generations." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
                   <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 transition-colors duration-300">
                     <item.icon className="text-brand-600 group-hover:text-white transition-colors duration-300" size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                   <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Team Snippet */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">The Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 mt-2">Meet The Explorers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { name: "Sarah Jenkins", role: "Co-Founder & CEO", img: "person_sarah" },
                    { name: "Mike Ross", role: "Co-Founder & CTO", img: "person_mike" },
                    { name: "Elena Rodriguez", role: "Head of Guides", img: "person_elena" },
                    { name: "David Kim", role: "Travel Specialist", img: "person_david" }
                ].map((member, i) => (
                    <div key={i} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square shadow-lg">
                            <img 
                                src={`https://picsum.photos/seed/${member.img}/500/500`} 
                                alt={member.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-300"></div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                        <p className="text-brand-600 text-sm font-medium">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;