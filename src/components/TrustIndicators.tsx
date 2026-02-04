import { Award, Users, CheckCircle, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PROFESSIONAL_INFO, CONTACT_INFO } from '../config/constants';

export default function TrustIndicators() {
  const { theme } = useTheme();

  const indicators = [
    {
      icon: <Award className="w-6 h-6" />,
      value: `${PROFESSIONAL_INFO.yearsExperience}+ Years`,
      label: 'Professional Experience'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: `${PROFESSIONAL_INFO.appsPublished}+ Apps`,
      label: 'Published on Play Store'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      value: 'Top 3%',
      label: 'Vetted by Toptal'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: CONTACT_INFO.responseTime,
      label: 'Response Time'
    }
  ];

  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-orange-50 to-amber-50'
        : 'bg-gradient-to-b from-gray-900 to-gray-950'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-2xl border-2 transition-all ${
                theme === 'light'
                  ? 'bg-white border-orange-200 hover:border-orange-400 hover:shadow-lg'
                  : 'bg-gray-800 border-orange-800 hover:border-orange-700 hover:shadow-xl'
              }`}
            >
              <div className={`inline-block p-3 rounded-full mb-4 ${
                theme === 'light'
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-orange-900/30 text-orange-400'
              }`}>
                {indicator.icon}
              </div>
              <div className={`text-2xl font-bold mb-2 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {indicator.value}
              </div>
              <div className={`text-sm font-medium transition-colors ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {indicator.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
