import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO } from '../config/constants';
import { trackCTA } from '../config/analytics';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

const getFAQs = (): FAQItem[] => [
  {
    question: "What's included in your hourly rate?",
    answer: "My rate includes expert-level Android development, code reviews, technical documentation, regular progress updates, and ongoing support during the project. I deliver production-ready, maintainable code following best practices and industry standards."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Timelines vary based on project scope, but I typically work in 2-4 week sprints with regular deliverables. For a complete app, expect 2-6 months depending on complexity. I provide detailed timelines during our initial consultation based on your specific requirements."
  },
  {
    question: "Can you handle the entire app development process?",
    answer: "Yes, I provide end-to-end services from concept to Google Play Store release. This includes architecture design, development, testing, Google Play Console setup, app signing, store listing creation, and publishing. I can take your idea from a blank page to a live app on the Play Store."
  },
  {
    question: "Do you work with teams or solo?",
    answer: "I work effectively both independently and as part of a team. I'm experienced in Agile/Scrum methodologies, code reviews, pair programming, and collaborating with designers, product managers, and backend developers. I can integrate seamlessly into your existing team structure."
  },
  {
    question: "What timezone are you in?",
    answer: `I'm based in CET (Central European Time) but available also in EST. I'm flexible with working hours and can accommodate different timezones for meetings and collaboration. I typically respond to messages within ${CONTACT_INFO.responseTime.toLowerCase()}.`
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, I offer ongoing support and maintenance packages. I can help with bug fixes, feature additions, updates, and performance optimization. Support can be structured as hourly, retainer, or project-based depending on your needs."
  },
  {
    question: "Can you work on-site or is it remote only?",
    answer: "I primarily work remotely, which allows me to focus and deliver high-quality work efficiently. However, I'm open to on-site work for key meetings, kickoffs, or specific project phases if needed. Let's discuss what works best for your project."
  },
  {
    question: "What's your availability?",
    answer: `I'm ${CONTACT_INFO.availability.toLowerCase()}. I'm currently accepting new projects and can typically start within 1-2 weeks of project kickoff. For urgent projects, I can often accommodate faster timelines - let's discuss your specific needs.`
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "I work with companies of all sizes - from startups building their first app to established enterprises scaling existing applications. I adapt my approach based on your team size, budget, and requirements. Every project gets the same level of professional attention and quality."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "EXPERTISE_LINK_PLACEHOLDER" // Special marker to be replaced with JSX
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "I provide regular updates through your preferred communication channel (email, Slack, etc.). Typically, I share daily progress summaries, weekly sprint reviews, and immediate updates for any blockers or important decisions. I'm responsive and keep you informed throughout the development process."
  }
];

export default function FAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getTimezoneMessage = () => {
    return 'available CET and EST';
  };

  const faqs = getFAQs().map(faq => {
    // Replace placeholder with actual JSX link for expertise section
    if (faq.answer === "EXPERTISE_LINK_PLACEHOLDER") {
      return {
        ...faq,
        answer: (
          <>
            I specialize in Kotlin, Jetpack Compose, Clean Architecture, Coroutines, and modern Android development. I have extensive experience with payments (Visa Tokenization), real-time systems (WebSocket, gRPC), hardware integration (Bluetooth, Android Automotive), and Wear OS. See my{' '}
            <a
              href="#expertise"
              onClick={() => trackCTA('Expertise Link', 'FAQ')}
              className={`font-semibold underline hover:opacity-75 transition ${
                theme === 'light' ? 'text-orange-600 hover:text-orange-700' : 'text-orange-400 hover:text-orange-300'
              }`}
            >
              Expertise section
            </a>
            {' '}for a complete list.
          </>
        )
      };
    }
    return faq;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-orange-100/20 to-amber-100/20'
        : 'bg-gradient-to-b from-orange-950/20 to-amber-950/20'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 transition-all overflow-hidden ${
                theme === 'light'
                  ? 'bg-white border-orange-200 hover:border-orange-400'
                  : 'bg-gray-800 border-orange-800 hover:border-orange-700'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 flex items-center justify-between text-left transition-colors ${
                  theme === 'light' ? 'hover:bg-orange-50' : 'hover:bg-gray-700/50'
                }`}
              >
                <span className={`font-semibold text-lg pr-4 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  } ${theme === 'light' ? 'text-orange-600' : 'text-orange-400'}`}
                />
              </button>
              {openIndex === index && (
                <div className={`px-6 pb-5 border-t-2 ${
                  theme === 'light' ? 'border-orange-100' : 'border-orange-900'
                }`}>
                  <div className={`pt-4 leading-relaxed ${
                    theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                  }`}>
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className={`mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Still have questions?
          </p>
          <a
            href="#contact"
            onClick={() => trackCTA('Get in Touch', 'FAQ')}
            className={`inline-block px-6 py-3 rounded-full font-semibold transition ${
              theme === 'light'
                ? 'bg-orange-600 text-white hover:bg-orange-700'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
