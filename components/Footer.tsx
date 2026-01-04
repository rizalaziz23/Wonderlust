import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Globe size={28} className="text-brand-500" />
              <span className="font-bold text-2xl tracking-tight">Wanderlust</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We believe that travel is the best way to learn, grow, and connect with the world. Let us guide you to your next adventure.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              {['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy', 'Status'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-brand-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-500 mt-1" />
                <span>123 Adventure Lane, Suite 400<br/>San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-500" />
                <span>hello@wanderlust.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 Wanderlust Travel. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;