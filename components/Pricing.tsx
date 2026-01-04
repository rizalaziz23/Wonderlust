import React from 'react';
import { Check, HelpCircle, MapPin, Calendar, Users, Mail, User } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="pt-16 animate-fadeIn">
      {/* Header Section */}
      <div className="relative bg-brand-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/travel_pricing_bg/1920/600" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-brand-900"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Choose the perfect planning package for your next adventure, or get a custom quote tailored to your dreams.
          </p>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Service Packages</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Plan Your Trip Your Way</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Tier */}
                <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Essential Explorer</h3>
                    <p className="text-gray-500 mb-6 text-sm">Perfect for solo travelers or quick getaways.</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-gray-900">$299</span>
                        <span className="text-gray-500 ml-2">/ trip planning</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {['Custom Itinerary Design', 'Flight & Hotel Booking', 'Digital Guidebook', 'Standard Support (Email)'].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-brand-500 flex-shrink-0" size={20} />
                                <span className="text-gray-700 text-sm">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-50 transition-colors">
                        Choose Essential
                    </button>
                </div>

                {/* Popular Tier */}
                <div className="border-2 border-brand-500 rounded-3xl p-8 shadow-2xl relative bg-white transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wide">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Signature Journey</h3>
                    <p className="text-gray-500 mb-6 text-sm">Ideal for families and couples wanting ease.</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-gray-900">$599</span>
                        <span className="text-gray-500 ml-2">/ trip planning</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {['Everything in Essential', 'Transportation & Transfers', 'Activity & Tour Reservations', 'Priority Support (Phone/Chat)', 'Restaurant Reservations'].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-brand-500 flex-shrink-0" size={20} />
                                <span className="text-gray-700 text-sm">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                        Choose Signature
                    </button>
                </div>

                {/* Luxury Tier */}
                <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative bg-white">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ultimate Luxury</h3>
                    <p className="text-gray-500 mb-6 text-sm">For those who want a fully managed experience.</p>
                    <div className="flex items-baseline mb-8">
                        <span className="text-4xl font-bold text-gray-900">$999</span>
                        <span className="text-gray-500 ml-2">/ trip planning</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {['Everything in Signature', 'Private Concierge 24/7', 'VIP Upgrades & Amenities', 'Private Guides & Drivers', 'Crisis Management'].map((feat, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-brand-500 flex-shrink-0" size={20} />
                                <span className="text-gray-700 text-sm">{feat}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="w-full py-3 rounded-xl border-2 border-brand-600 text-brand-600 font-bold hover:bg-brand-50 transition-colors">
                        Choose Luxury
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Request a Custom Quote</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        Ready to start planning? Fill out the form below and one of our travel specialists will get back to you with a personalized proposal within 24 hours.
                    </p>
                    
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-start gap-4 mb-4">
                            <HelpCircle className="text-brand-500 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Not sure where to go?</h4>
                                <p className="text-sm text-gray-500 mt-1">Select "Undecided" in the destination field and let us surprise you based on your preferences.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <User size={16} /> First Name
                                </label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Mail size={16} /> Email Address
                            </label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                             <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <MapPin size={16} /> Desired Destination
                            </label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
                                <option value="" disabled selected>Select a region or country</option>
                                <option value="undecided">I'm Undecided / Open to suggestions</option>
                                <option value="europe">Europe (Italy, France, Greece...)</option>
                                <option value="asia">Asia (Japan, Thailand, Bali...)</option>
                                <option value="americas">The Americas (Peru, Costa Rica, USA...)</option>
                                <option value="africa">Africa (Safari, Egypt, Morocco...)</option>
                                <option value="oceania">Oceania (Australia, New Zealand...)</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Calendar size={16} /> Travel Dates
                                </label>
                                <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Users size={16} /> Travelers
                                </label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white">
                                    <option>1 Person</option>
                                    <option>2 People</option>
                                    <option>3-5 People</option>
                                    <option>6+ People</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Additional Notes</label>
                            <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all h-32" placeholder="Tell us about your interests, special occasions, or specific requirements..."></textarea>
                        </div>

                        <button className="w-full py-4 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-lg shadow-accent-200 transition-all hover:scale-[1.02] active:scale-[0.98]">
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;