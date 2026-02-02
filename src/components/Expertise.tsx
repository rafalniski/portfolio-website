import { Code, Cpu, Lock, Zap, Smartphone, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Expertise {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export default function Expertise() {
  const { theme } = useTheme();

  const expertise: Expertise[] = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Architecture & Design",
      skills: ["Clean Architecture", "MVVM", "PARCH Pattern", "Dependency Injection", "Unidirectional Data Flow"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Android Technologies",
      skills: ["Jetpack Compose", "Coroutines", "Kotlin", "Java", "Android SDK", "Wear OS"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Systems",
      skills: ["WebSocket", "gRPC", "Bluetooth LE", "Location Services", "Background Services"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Payments & Security",
      skills: ["Visa Tokenization", "RFID Integration", "Secure Flows", "Session Management", "Encryption"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Hardware Integration",
      skills: ["AOSP", "Android Automotive", "Bluetooth", "Display Synchronization", "Hardware Drivers"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Quality",
      skills: ["Unit Testing", "CI/CD", "Code Reviews", "Accessibility", "Documentation"]
    }
  ];

  return (
    <section id="expertise" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-transparent to-orange-100/20'
        : 'bg-gradient-to-b from-transparent to-orange-950/20'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Core Expertise
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Specialized skills across platform architecture, real-time systems, and production-scale applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border-2 transition-all hover:-translate-y-1 ${
                theme === 'light'
                  ? 'bg-white border-orange-200 hover:border-orange-400 hover:shadow-lg'
                  : 'bg-gray-800 border-orange-800 hover:border-orange-700 hover:shadow-2xl hover:shadow-orange-500/10'
              }`}
            >
              <div className={`mb-4 inline-block p-3 rounded-lg ${
                theme === 'light'
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-orange-900/30 text-orange-400'
              }`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`flex items-center gap-2 transition-colors ${
                      theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                    }`}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
