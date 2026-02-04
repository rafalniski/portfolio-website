import { useTheme } from '../context/ThemeContext';
import { PROFESSIONAL_INFO } from '../config/constants';

export default function About() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-transparent via-white to-transparent'
        : 'bg-gradient-to-b from-transparent via-gray-800 to-transparent'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            About Me
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Building production-ready Android applications for over a decade
          </p>
        </div>

        <div className={`rounded-3xl p-8 md:p-12 border-2 transition-colors ${
          theme === 'light'
            ? 'bg-white border-orange-200'
            : 'bg-gray-800 border-orange-800'
        }`}>
          <div className="prose prose-lg max-w-none">
            <p className={`text-lg mb-6 leading-relaxed transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              With {PROFESSIONAL_INFO.yearsExperience}+ years of professional Android development experience, 
              I've had the privilege of working on applications that serve millions of users worldwide. 
              My journey has taken me from building consumer apps to leading architecture decisions 
              for enterprise-scale applications at companies like Volvo Cars and TravelBank.
            </p>

            <p className={`text-lg mb-6 leading-relaxed transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              I specialize in Kotlin, Clean Architecture, Jetpack Compose, and real-time systems. 
              What sets me apart is my ability to bridge the gap between technical excellence 
              and business objectives. I don't just write code - I architect solutions that scale, 
              perform, and deliver measurable business value.
            </p>

            <p className={`text-lg mb-6 leading-relaxed transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              As a freelance developer, I bring enterprise-level expertise with the flexibility 
              and focus that comes from working independently. I'm passionate about writing 
              maintainable, testable code and helping teams build better Android applications. 
              Whether you need a complete app built from scratch, architectural guidance, 
              or help scaling an existing application, I'm here to help.
            </p>

            <div className={`mt-8 pt-8 border-t-2 ${
              theme === 'light' ? 'border-orange-100' : 'border-orange-900'
            }`}>
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                theme === 'light' ? 'text-gray-900' : 'text-white'
              }`}>
                Why Work With Me?
              </h3>
              <ul className={`space-y-3 ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  <span><strong>Proven Track Record:</strong> {PROFESSIONAL_INFO.appsPublished}+ apps published, 
                  serving millions of users across various industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  <span><strong>Enterprise Experience:</strong> Led architecture on large-scale applications 
                  requiring high availability and performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  <span><strong>Full-Stack Mobile Expertise:</strong> From UI/UX implementation to backend 
                  integration, payment systems, and hardware integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-orange-500'
                  }`}></span>
                  <span><strong>Clear Communication:</strong> Regular updates, transparent processes, 
                  and documentation that helps your team succeed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
