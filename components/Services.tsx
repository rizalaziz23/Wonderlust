import React from 'react';
import { Plane, Hotel, Map, Shield, CreditCard, Headphones, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "We secure the best routes and prices for domestic and international flights, ensuring a smooth journey from takeoff to landing."
  },
  {
    icon: Hotel,
    title: "Luxury Accommodation",
    description: "From boutique hotels to 5-star resorts, we handpick accommodations that offer comfort, style, and authentic local experiences."
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description: "Our travel experts craft personalized daily plans tailored to your interests, pace, and budget for a truly unique adventure."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Travel with peace of mind. We offer comprehensive insurance packages covering medical emergencies, cancellations, and lost luggage."
  },
  {
    icon: CreditCard,
    title: "Visa Assistance",
    description: "Navigating entry requirements can be tricky. We provide guidance and handling services for visas and travel documentation."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our global support team is available around the clock to assist you with any changes or emergencies during your trip."
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-16 animate-fadeIn">
      {/* Header */}
      <div className="relative bg-brand-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="https://picsum.photos/seed/travel_service_bg/1920/600" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/50 to-brand-900"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Comprehensive travel solutions designed to make your journey effortless and unforgettable.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">What We Offer</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">World-Class Travel Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-500 transition-colors duration-300">
                            <service.icon className="text-brand-600 group-hover:text-white transition-colors duration-300" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Journey Starts Here</h2>
                    <p className="text-brand-100 text-lg mb-8 leading-relaxed">
                        We've simplified the travel planning process so you can focus on the excitement of your upcoming adventure. Here is how we make it happen:
                    </p>
                    <div className="space-y-6">
                        {[
                            "Consultation: We discuss your preferences, budget, and dreams.",
                            "Planning: Our experts craft a bespoke itinerary just for you.",
                            "Booking: We handle all reservations, from flights to dining.",
                            "Support: You travel with full support, 24/7, anywhere in the world."
                        ].map((step, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <CheckCircle className="text-accent-500 flex-shrink-0 mt-1" size={24} />
                                <span className="text-lg text-gray-200">{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <img 
                        src="https://picsum.photos/seed/travel_planning/800/600" 
                        alt="Planning travel" 
                        className="rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
                {[
                    { q: "Do you charge a consultation fee?", a: "Our initial consultation is completely free. We only charge a planning fee if you decide to proceed with a custom itinerary, which is then deducted from your final booking cost." },
                    { q: "Can I change my itinerary after booking?", a: "Yes! We understand plans change. Depending on the specific policies of airlines and hotels, we will do our best to accommodate changes with minimal fees." },
                    { q: "Do you offer group travel packages?", a: "Absolutely. We specialize in group travel for families, corporate retreats, and destination weddings." }
                ].map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{faq.q}</h3>
                        <p className="text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Services;