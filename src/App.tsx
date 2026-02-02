import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { trackPageView, trackCTA } from './config/analytics';
import Hero from './components/Hero';
import About from './components/About';
import AppsPortfolio from './components/AppsPortfolio';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import TrustIndicators from './components/TrustIndicators';

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname + window.location.search);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track navigation clicks
  const handleNavClick = (section: string) => {
    trackCTA(`Navigate to ${section}`, 'Navigation');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50'
        : 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950'
    }`}>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'light'
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-700'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className={`text-xl font-bold ${theme === 'light' ? 'text-orange-700' : 'text-orange-500'}`}>
            Rafal Niski
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#portfolio" onClick={() => handleNavClick('Portfolio')} className={`transition font-medium ${
              theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-gray-300 hover:text-orange-400'
            }`}>Portfolio</a>
            <a href="#expertise" onClick={() => handleNavClick('Expertise')} className={`transition font-medium ${
              theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-gray-300 hover:text-orange-400'
            }`}>Expertise</a>
            <a href="#process" onClick={() => handleNavClick('Process')} className={`transition font-medium ${
              theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-gray-300 hover:text-orange-400'
            }`}>Process</a>
            <a href="#pricing" onClick={() => handleNavClick('Pricing')} className={`transition font-medium ${
              theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-gray-300 hover:text-orange-400'
            }`}>Pricing</a>
            <a href="#contact" onClick={() => handleNavClick('Contact')} className={`transition font-medium ${
              theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-gray-300 hover:text-orange-400'
            }`}>Contact</a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                theme === 'light'
                  ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  : 'bg-gray-800 text-orange-400 hover:bg-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
          </div>
          <MobileMenu />
        </div>
      </nav>

      <Hero />
      <TrustIndicators />
      <About />
      <AppsPortfolio />
      <Expertise />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
