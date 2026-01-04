import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Travel Enthusiast",
    comment: "The most seamless travel experience I've ever had. From booking to the actual trip, everything was handled with extreme professionalism. Wanderlust made our honeymoon magical!",
    avatarUrl: "https://picsum.photos/seed/person1/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Digital Nomad",
    comment: "I travel for work constantly, and finding reliable packages is tough. This platform gave me exactly what I needed: flexibility, good wifi spots in the itinerary, and great prices.",
    avatarUrl: "https://picsum.photos/seed/person2/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Watson",
    role: "Adventure Seeker",
    comment: "The local guides were incredible. We didn't just see the tourist spots; we ate where locals eat and found hidden waterfalls. Highly recommend the 'Explorer' package.",
    avatarUrl: "https://picsum.photos/seed/person3/100/100",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Join Hundreds of Satisfied Customers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={`${i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
                <div className="mb-6 relative">
                    <Quote className="absolute -top-2 -left-2 text-brand-100 transform -scale-x-100" size={40} />
                    <p className="text-gray-600 italic relative z-10 pl-2">{t.comment}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                <img src={t.avatarUrl} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-100" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;