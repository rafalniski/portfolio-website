import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO, PROFESSIONAL_INFO } from '../config/constants';
import { trackCTA } from '../config/analytics';

export default function Hero() {
  const { theme } = useTheme();

  // Determine timezone message
  const getTimezoneMessage = () => {
    return 'Available CET and EST';
  };

  return (
    <section className={`min-h-screen flex items-center justify-center pt-32 pb-20 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-800'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-10 flex justify-center">
          <div className={`relative w-48 h-48 rounded-full overflow-hidden shadow-2xl ring-8 transition-all ${
            theme === 'light' ? 'ring-orange-200' : 'ring-orange-900'
          }`}>
            <img
              src="/assets/images/profile-photo.jpg"
              alt="Rafal Niski - Lead Android Engineer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image doesn't exist
                (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop';
              }}
            />
          </div>
        </div>

        <div className="mb-6">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
            theme === 'light'
              ? 'bg-green-100 text-green-700'
              : 'bg-green-900/30 text-green-400'
          }`}>
            ✓ {CONTACT_INFO.availability}
          </span>
        </div>

        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 transition-colors ${
          theme === 'light' ? 'text-orange-700' : 'text-orange-500'
        }`}>
          Freelance Android Developer
        </h1>
        <p className={`text-lg sm:text-xl mb-6 transition-colors ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {PROFESSIONAL_INFO.yearsExperience}+ Years Crafting Production-Ready Applications
        </p>

        <p className={`text-xl mb-8 max-w-3xl mx-auto leading-relaxed transition-colors ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          I help companies build enterprise-grade Android applications that serve millions of users. 
          Specialized in Kotlin, Clean Architecture, Jetpack Compose, and real-time systems. 
          Lead architect on apps for Volvo Cars, TravelBank, and other leading brands.
        </p>

        <div className={`flex flex-wrap justify-center gap-4 mb-8 max-w-2xl mx-auto ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}>
          <div className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-500'}`} />
            <span className="text-sm font-medium">Enterprise Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-500'}`} />
            <span className="text-sm font-medium">Remote-Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className={`w-5 h-5 ${theme === 'light' ? 'text-orange-600' : 'text-orange-500'}`} />
            <span className="text-sm font-medium">{getTimezoneMessage()}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="#contact"
            onClick={() => trackCTA('Start Your Project', 'Hero')}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-400/50 transition-all transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            onClick={() => trackCTA('View My Work', 'Hero')}
            className={`px-8 py-3 border-2 rounded-full font-semibold transition-all ${
              theme === 'light'
                ? 'border-orange-600 text-orange-700 hover:bg-orange-50'
                : 'border-orange-500 text-orange-400 hover:bg-orange-900/20'
            }`}
          >
            View My Work
          </a>
        </div>

        <div className={`text-sm font-medium transition-colors ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-400'
        }`}>
          <p>Response time: {CONTACT_INFO.responseTime}</p>
        </div>
      </div>
    </section>
  );
}
