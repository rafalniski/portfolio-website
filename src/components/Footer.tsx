import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config/constants';

export default function Footer() {
  const { theme } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t-2 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-orange-50 to-amber-50 border-orange-200'
        : 'bg-gradient-to-b from-gray-900 to-gray-950 border-orange-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className={`text-lg font-bold mb-4 transition-colors ${
              theme === 'light' ? 'text-orange-700' : 'text-orange-500'
            }`}>Rafal Niski</h3>
            <p className={`text-sm transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>Senior Android Developer with 12+ years of experience</p>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 transition-colors ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#portfolio" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Portfolio</a></li>
              <li><a href="#expertise" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Expertise</a></li>
              <li><a href="#process" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Process</a></li>
              <li><a href="#pricing" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Pricing</a></li>
              <li><a href="#faq" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>FAQ</a></li>
              <li><a href="#contact" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 transition-colors ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.toptal.com/resume/rafal-niski" target="_blank" rel="noopener noreferrer" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>Toptal Profile</a></li>
              <li><a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>GitHub</a></li>
              <li><a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={`transition text-sm font-medium ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600'
                  : 'text-gray-400 hover:text-orange-400'
              }`}>LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 transition-colors ${
              theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>Contact Info</h4>
            <ul className={`space-y-2 text-sm transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-400'
            }`}>
              <li><span className={`font-semibold transition-colors ${
                theme === 'light' ? 'text-orange-700' : 'text-orange-500'
              }`}>Email:</span> {CONTACT_INFO.email}</li>
              <li><span className={`font-semibold transition-colors ${
                theme === 'light' ? 'text-orange-700' : 'text-orange-500'
              }`}>WhatsApp:</span> {CONTACT_INFO.phone}</li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 flex flex-col sm:flex-row justify-between items-center transition-colors ${
          theme === 'light' ? 'border-t-2 border-orange-200' : 'border-t-2 border-orange-900'
        }`}>
          <p className={`text-sm mb-4 sm:mb-0 font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            © {currentYear} Rafal Niski. All rights reserved. | Senior Android Developer
          </p>
          <button
            onClick={scrollToTop}
            className={`p-2 rounded-full transition transform hover:scale-110 ${
              theme === 'light'
                ? 'bg-orange-100 hover:bg-orange-200 text-orange-600 hover:text-orange-700'
                : 'bg-orange-900/50 hover:bg-orange-900 text-orange-400 hover:text-orange-300'
            }`}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
