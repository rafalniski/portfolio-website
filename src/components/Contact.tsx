import { Mail, MessageCircle, Github, Linkedin, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config/constants';
import { trackContactMethod, trackExternalLink } from '../config/analytics';
import ContactForm from './ContactForm';

export default function Contact() {
  const { theme } = useTheme();
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, '')}?text=Hi%20Rafal,%20I%20am%20interested%20in%20discussing%20an%20Android%20development%20project`;

  return (
    <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-800'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Ready to Get Started?
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Let's discuss your Android development project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
            href={`mailto:${CONTACT_INFO.email}`}
            onClick={() => trackContactMethod('Email')}
            className={`group rounded-3xl p-8 border-2 hover:shadow-2xl hover:shadow-orange-400/20 transition-all transform hover:-translate-y-2 cursor-pointer ${
              theme === 'light'
                ? 'bg-white border-orange-200 hover:border-orange-400'
                : 'bg-gray-700 border-orange-800 hover:border-orange-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full group-hover:opacity-75 transition ${
                theme === 'light'
                  ? 'bg-orange-100 group-hover:bg-orange-200'
                  : 'bg-orange-900/50'
              }`}>
                <Mail className={`w-6 h-6 transition-colors ${
                  theme === 'light' ? 'text-orange-600' : 'text-orange-400'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>Email</h3>
                <p className={`mb-3 text-sm transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Send me an email for project inquiries and consultations
                </p>
                <p className={`font-semibold hover:opacity-75 transition-all ${
                  theme === 'light' ? 'text-orange-600 hover:text-orange-700' : 'text-orange-400 hover:text-orange-300'
                }`}>{CONTACT_INFO.email}</p>
              </div>
            </div>
          </a>

          <a
            href={whatsappUrl}
            onClick={() => trackContactMethod('WhatsApp')}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-3xl p-8 border-2 hover:shadow-2xl hover:shadow-green-400/20 transition-all transform hover:-translate-y-2 cursor-pointer ${
              theme === 'light'
                ? 'bg-white border-green-200 hover:border-green-400'
                : 'bg-gray-700 border-green-800 hover:border-green-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full group-hover:opacity-75 transition ${
                theme === 'light'
                  ? 'bg-green-100 group-hover:bg-green-200'
                  : 'bg-green-900/50'
              }`}>
                <MessageCircle className={`w-6 h-6 transition-colors ${
                  theme === 'light' ? 'text-green-600' : 'text-green-400'
                }`} />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>WhatsApp</h3>
                <p className={`mb-3 text-sm transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Quick chat for immediate inquiries and follow-ups
                </p>
                <p className={`font-semibold hover:opacity-75 transition-all ${
                  theme === 'light' ? 'text-green-600 hover:text-green-700' : 'text-green-400 hover:text-green-300'
                }`}>+48 605 271 242</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.toptal.com/developers/resume/rafal-niski#NW1Erq"
            onClick={() => trackExternalLink('Toptal', 'https://www.toptal.com/developers/resume/rafal-niski')}
            target="_blank"
            rel="noopener noreferrer"
            className={`group rounded-3xl p-8 border-2 hover:shadow-2xl hover:shadow-blue-400/20 transition-all transform hover:-translate-y-2 cursor-pointer ${
              theme === 'light'
                ? 'bg-white border-blue-200 hover:border-blue-400'
                : 'bg-gray-700 border-blue-800 hover:border-blue-700'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-full group-hover:opacity-75 transition flex-shrink-0 ${
                theme === 'light'
                  ? 'bg-blue-100 group-hover:bg-blue-200'
                  : 'bg-blue-900/50'
              }`}>
                <Briefcase className={`w-6 h-6 transition-colors ${
                  theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>Toptal</h3>
                <p className={`mb-3 text-sm transition-colors ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                }`}>
                  Hire through our network of vetted professionals
                </p>
                <p className={`font-semibold hover:opacity-75 transition-all break-words ${
                  theme === 'light' ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
                }`}>www.toptal.com/resume/rafal-niski</p>
              </div>
            </div>
          </a>
        </div>


        <div className="mt-12">
          <ContactForm />
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href={SOCIAL_LINKS.github}
            onClick={() => trackExternalLink('GitHub', SOCIAL_LINKS.github)}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition transform hover:scale-110 ${
              theme === 'light'
                ? 'bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-orange-700'
                : 'bg-orange-900/50 text-orange-400 hover:bg-orange-900 hover:text-orange-300'
            }`}
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            onClick={() => trackExternalLink('LinkedIn', SOCIAL_LINKS.linkedin)}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full transition transform hover:scale-110 ${
              theme === 'light'
                ? 'bg-orange-100 text-orange-600 hover:bg-orange-200 hover:text-orange-700'
                : 'bg-orange-900/50 text-orange-400 hover:bg-orange-900 hover:text-orange-300'
            }`}
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
