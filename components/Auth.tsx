import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

interface AuthProps {
  initialMode: 'login' | 'signup';
  onNavigate: (page: string) => void;
}

const Auth: React.FC<AuthProps> = ({ initialMode, onNavigate }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication success
    onNavigate('home');
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 min-h-[600px] animate-fadeIn">
        
        {/* Image Section */}
        <div className="relative hidden md:block group">
           <img 
             src={mode === 'login' 
                ? "https://picsum.photos/seed/travel_login_v2/800/1200" 
                : "https://picsum.photos/seed/travel_signup_v2/800/1200"} 
             alt="Travel" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-brand-900/40 backdrop-blur-[2px] flex flex-col justify-end p-12 text-white">
             <h2 className="text-4xl font-bold mb-4">
               {mode === 'login' ? 'Welcome Back!' : 'Start Your Journey'}
             </h2>
             <p className="text-lg text-brand-50 leading-relaxed">
               {mode === 'login' 
                 ? "Ready for your next adventure? Sign in to access your saved trips, exclusive offers, and personalized itinerary." 
                 : "Join thousands of travelers exploring the world with Wanderlust. Create an account to unlock exclusive deals."}
             </p>
           </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                </h1>
                <p className="text-gray-500">
                    {mode === 'login' ? 'Please enter your details to continue.' : 'Fill in your details to get started.'}
                </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {mode === 'signup' && (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input type="text" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="John Doe" required />
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                     <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input type="email" className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" placeholder="name@example.com" required />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-gray-700">Password</label>
                        {mode === 'login' && <button type="button" className="text-sm text-brand-600 hover:text-brand-700 font-medium">Forgot Password?</button>}
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" 
                            placeholder="••••••••"
                            required 
                        />
                         <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 outline-none"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <button className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl shadow-lg shadow-brand-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-4">
                    {mode === 'login' ? 'Sign In' : 'Sign Up'} <ArrowRight size={20} />
                </button>
            </form>

            <div className="mt-8 text-center pt-6 border-t border-gray-100">
                <p className="text-gray-500">
                    {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                    <button onClick={toggleMode} className="text-brand-600 font-bold hover:text-brand-700 transition-colors">
                        {mode === 'login' ? 'Sign Up' : 'Log In'}
                    </button>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;