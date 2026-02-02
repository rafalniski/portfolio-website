import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`md:hidden p-2 rounded-lg transition ${
          theme === 'light'
            ? 'text-gray-700 hover:bg-orange-100'
            : 'text-gray-300 hover:bg-gray-700'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          />
          <div
            className={`fixed top-16 left-0 right-0 z-50 md:hidden transition-all ${
              theme === 'light'
                ? 'bg-white border-b border-orange-200'
                : 'bg-gray-900 border-b border-gray-700'
            }`}
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`block py-3 px-4 rounded-lg font-medium transition ${
                    theme === 'light'
                      ? 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-orange-400'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMenu();
                }}
                className={`w-full flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition ${
                  theme === 'light'
                    ? 'text-gray-700 hover:bg-orange-50'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="w-5 h-5" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-5 h-5" />
                    Light Mode
                  </>
                )}
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
