import { useState, useEffect } from 'react';
import { Check, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { trackCTA } from '../config/analytics';

interface PricingState {
  currency: string;
  rate: number;
  country: string | null;
  loading: boolean;
}

export default function Pricing() {
  const { theme } = useTheme();
  const [pricing, setPricing] = useState<PricingState>({
    currency: 'USD',
    rate: 1,
    country: null,
    loading: true,
  });

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        // Use ip-api.com which supports CORS (free tier: 45 requests/minute)
        const geoResponse = await fetch('https://ip-api.com/json/?fields=countryCode,country', {
          method: 'GET'
        });
        
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          const country = geoData.countryCode;
          const isEU = isEUCountry(country);

          let currency = 'USD';
          let conversionRate = 1;

          if (isEU) {
            currency = 'EUR';
            try {
              const rateResponse = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
              const rateData = await rateResponse.json();
              conversionRate = rateData.rates.EUR || 0.92;
            } catch {
              conversionRate = 0.92;
            }
          }

          setPricing({
            currency,
            rate: conversionRate,
            country: geoData.country || geoData.countryCode || null,
            loading: false,
          });
          return;
        }
      } catch (error) {
        // Silently fail - use default values
        console.debug('Pricing geolocation not available, using defaults');
      }

      // Default: USD
      setPricing({
        currency: 'USD',
        rate: 1,
        country: null,
        loading: false,
      });
    };

    fetchPricingData();
  }, []);

  const isEUCountry = (countryCode: string): boolean => {
    const euCountries = [
      'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
      'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
      'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'
    ];
    return euCountries.includes(countryCode);
  };

  const hourlyRate = 130;
  const displayRate = Math.round(hourlyRate * pricing.rate);

  return (
    <section id="pricing" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-orange-100/20 to-amber-100/20'
        : 'bg-gradient-to-b from-orange-950/20 to-amber-950/20'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Transparent Pricing
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Fixed hourly rate, no surprises
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`rounded-3xl p-8 shadow-lg border-2 transition-colors ${
            theme === 'light'
              ? 'bg-white border-orange-200'
              : 'bg-gray-800 border-orange-800'
          }`}>
            <div className="mb-6">
              <p className={`text-sm mb-2 font-medium transition-colors ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>My Rate</p>
              <div className="flex items-baseline gap-2">
                <span className={`text-5xl font-bold transition-colors ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>{displayRate}</span>
                <span className={`text-2xl font-semibold transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`}>{pricing.currency}</span>
              </div>
              <p className={`text-sm mt-2 transition-colors ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>per hour</p>
            </div>


            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`} />
                <span className={`transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Expert-level Android development</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`} />
                <span className={`transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>12+ years of professional experience</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`} />
                <span className={`transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Full-stack mobile solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`} />
                <span className={`transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Production-ready code quality</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-500'
                }`} />
                <span className={`transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>Architecture and design consultation</span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => trackCTA('Schedule a Call', 'Pricing')}
              className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-orange-400/50 transition-all text-center block"
            >
              Schedule a Call
            </a>
          </div>

          <div className="space-y-6">
            <div className={`rounded-2xl p-6 border-2 transition-colors ${
              theme === 'light'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-orange-950/20 border-orange-800'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>What You Get</h3>
              <ul className="space-y-2">
                <li className={`flex items-center gap-2 transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  Clean, production-ready code
                </li>
                <li className={`flex items-center gap-2 transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  Regular progress updates
                </li>
                <li className={`flex items-center gap-2 transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  Technical guidance
                </li>
                <li className={`flex items-center gap-2 transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  Code reviews and documentation
                </li>
                <li className={`flex items-center gap-2 transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  <span className={`w-2 h-2 rounded-full transition-colors ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  Flexible engagement model
                </li>
              </ul>
            </div>

            <div className={`rounded-2xl p-6 border-2 transition-colors ${
              theme === 'light'
                ? 'bg-orange-50 border-orange-200'
                : 'bg-orange-950/20 border-orange-800'
            }`}>
              <h3 className={`text-lg font-semibold mb-3 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>Experience</h3>
              <div className="space-y-3">
                <div>
                  <p className={`font-semibold transition-colors ${
                    theme === 'light' ? 'text-orange-700' : 'text-orange-400'
                  }`}>12+ Years</p>
                  <p className={`text-sm transition-colors ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                  }`}>Professional Android Development</p>
                </div>
                <div>
                  <p className={`font-semibold transition-colors ${
                    theme === 'light' ? 'text-orange-700' : 'text-orange-400'
                  }`}>50+ Apps</p>
                  <p className={`text-sm transition-colors ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                  }`}>Published on Google Play Store</p>
                </div>
                <div>
                  <p className={`font-semibold transition-colors ${
                    theme === 'light' ? 'text-orange-700' : 'text-orange-400'
                  }`}>Millions of Users</p>
                  <p className={`text-sm transition-colors ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-400'
                  }`}>Across all projects combined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
