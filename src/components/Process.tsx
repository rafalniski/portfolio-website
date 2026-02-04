import { MessageSquare, Code, CheckCircle, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO } from '../config/constants';
import { useClientLocation } from '../hooks/useClientLocation';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Process() {
  const { theme } = useTheme();
  const { isUS, loading: locationLoading } = useClientLocation();

  const getTimezoneMessage = () => {
    if (locationLoading) return CONTACT_INFO.timezone;
    if (isUS) return 'EST';
    return 'CET'; // Rest of the world
  };

  const steps: ProcessStep[] = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Initial Consultation",
      description: "We discuss your project requirements, goals, timeline, and budget. I'll provide initial technical recommendations and answer any questions you have."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Planning & Architecture",
      description: "I create a detailed project plan, technical architecture, and timeline. We align on technologies, development approach, and deliverables before starting."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Development & Updates",
      description: `I work in sprints with regular updates (typically daily summaries and weekly reviews). Code is delivered incrementally with reviews and testing. I'm available ${getTimezoneMessage()} and respond within ${CONTACT_INFO.responseTime.toLowerCase()}.`
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description: "I help you launch your app, handle any immediate issues, and provide documentation. Ongoing support packages are available for maintenance and new features."
    }
  ];

  return (
    <section id="process" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-transparent via-white to-transparent'
        : 'bg-gradient-to-b from-transparent via-gray-800 to-transparent'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            How I Work
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            A transparent, collaborative process designed for your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-orange-200 hover:border-orange-400 hover:shadow-lg'
                  : 'bg-gray-800 border-orange-800 hover:border-orange-700 hover:shadow-2xl hover:shadow-orange-500/10'
              }`}
            >
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 ${
                  theme === 'light' ? 'bg-orange-200' : 'bg-orange-800'
                }`}></div>
              )}
              <div className={`mb-4 inline-block p-3 rounded-lg ${
                theme === 'light'
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-orange-900/30 text-orange-400'
              }`}>
                {step.icon}
              </div>
              <div className={`text-sm font-semibold mb-2 ${
                theme === 'light' ? 'text-orange-600' : 'text-orange-400'
              }`}>
                Step {index + 1}
              </div>
              <h3 className={`text-xl font-bold mb-3 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {step.title}
              </h3>
              <p className={`leading-relaxed transition-colors ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`mt-12 rounded-2xl p-8 border-2 ${
          theme === 'light'
            ? 'bg-orange-50 border-orange-200'
            : 'bg-orange-950/20 border-orange-800'
        }`}>
          <h3 className={`text-xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Communication & Collaboration
          </h3>
          <div className={`space-y-3 transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            <p>
              <strong>Regular Updates:</strong> Daily progress summaries and weekly sprint reviews keep you informed.
            </p>
            <p>
              <strong>Transparent Process:</strong> All code is version-controlled, documented, and reviewed. You have full visibility into the development process.
            </p>
            <p>
              <strong>Flexible Collaboration:</strong> I adapt to your team's workflow - whether you use Jira, Trello, GitHub Issues, or prefer email updates.
            </p>
            <p>
              <strong>Quick Response:</strong> I'm available {CONTACT_INFO.timezone} and typically respond within {CONTACT_INFO.responseTime.toLowerCase()} to questions and requests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
