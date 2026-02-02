import { useState } from 'react';
import { ExternalLink, Star, ChevronDown, TrendingUp, Users, Clock, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Metric {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface App {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  rating: number;
  downloads: string;
  playStoreUrl?: string;
  features: string[];
  screenshot: string;
  color: string;
  role: string;
  metrics: Metric[];
  challenges: string[];
  timeline?: string;
  teamSize?: string;
}

const apps: App[] = [
  {
    id: 1,
    name: "Volvo Cars",
    description: "Large-scale consumer app for managing and interacting with Volvo vehicles globally. Multi-module Clean Architecture with real-time features serving millions of users.",
    technologies: ["Kotlin", "Jetpack Compose", "Clean Architecture", "Coroutines", "gRPC"],
    rating: 4.8,
    downloads: "1M+",
    features: ["Real-time chat", "Roadside assistance", "EV charging", "Smart home integration"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=se.volvo.vcc&hl=en",
    screenshot: "/assets/images/volvo-cars.webp",
    color: "orange",
    role: "Lead Android Architect",
    teamSize: "8 developers",
    timeline: "18 months",
    metrics: [
      { label: "Crash Rate Reduction", value: "65%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Performance Improvement", value: "40%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "User Satisfaction", value: "4.8/5", icon: <Award className="w-4 h-4" /> }
    ],
    challenges: [
      "Architected multi-module Clean Architecture supporting 10+ feature modules",
      "Implemented real-time gRPC communication for vehicle status updates",
      "Optimized Jetpack Compose UI for smooth 60fps performance",
      "Led migration from legacy codebase to modern Android stack"
    ]
  },
  {
    id: 2,
    name: "TravelBank",
    description: "Expense app powered by budgets for tracking business expenses and flight booking. Handles receipt capture and reimbursement workflows.",
    technologies: ["Kotlin", "MVVM", "REST API", "Room Database"],
    rating: 4.7,
    downloads: "500K+",
    features: ["Receipt scanning", "Flight booking", "Budget tracking", "Reimbursement"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.travelbank.app",
    screenshot: "/assets/images/travelbank.webp",
    color: "amber",
    role: "Senior Android Developer",
    teamSize: "4 developers",
    timeline: "12 months",
    metrics: [
      { label: "Receipt Processing", value: "95% accuracy", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "App Performance", value: "35% faster", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "User Retention", value: "+28%", icon: <TrendingUp className="w-4 h-4" /> }
    ],
    challenges: [
      "Built ML-powered receipt scanning with 95% accuracy",
      "Designed offline-first architecture with Room database sync",
      "Integrated complex flight booking API with real-time pricing",
      "Implemented secure payment flows with PCI compliance"
    ]
  },
  {
    id: 3,
    name: "Amber",
    description: "Loyalty app enabling users to earn and redeem points with world-class brands. RTL language support with seamless REST API integration.",
    technologies: ["Kotlin", "Material Design", "REST API", "RTL Support"],
    rating: 4.9,
    downloads: "300K+",
    features: ["Point tracking", "Brand integration", "RTL support", "Payment processing"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.amber.amber",
    screenshot: "/assets/images/amber.webp",
    color: "red",
    role: "Lead Android Developer",
    teamSize: "3 developers",
    timeline: "10 months",
    metrics: [
      { label: "RTL Support", value: "12 languages", icon: <Users className="w-4 h-4" /> },
      { label: "API Response Time", value: "<200ms", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Payment Success Rate", value: "99.2%", icon: <Award className="w-4 h-4" /> }
    ],
    challenges: [
      "Implemented comprehensive RTL (Right-to-Left) support for Arabic and Hebrew",
      "Architected scalable REST API integration handling 50+ brand partners",
      "Built secure payment processing with tokenization and encryption",
      "Created seamless point redemption flow with real-time balance updates"
    ]
  },
  {
    id: 4,
    name: "SafeTrek",
    description: "Wear OS application for personal safety with timed check-ins and automated escalation. Battery-efficient location tracking on wearables.",
    technologies: ["Kotlin", "Wear OS", "Location Services", "Background Services"],
    rating: 4.7,
    downloads: "100K+",
    features: ["Timed check-ins", "Location tracking", "Emergency alerts", "Wearable optimization"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.safetrekapp.safetrek",
    screenshot: "/assets/images/safetrek.webp",
    color: "orange",
    role: "Senior Android Developer",
    teamSize: "2 developers",
    timeline: "8 months",
    metrics: [
      { label: "Battery Optimization", value: "60% improvement", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Location Accuracy", value: "±5 meters", icon: <Award className="w-4 h-4" /> },
      { label: "Emergency Response", value: "<30 seconds", icon: <Clock className="w-4 h-4" /> }
    ],
    challenges: [
      "Optimized battery consumption for 24/7 location tracking on Wear OS",
      "Implemented reliable background services with Android 12+ restrictions",
      "Built emergency escalation system with automatic 911 dispatch",
      "Created intuitive wearable UI optimized for small screens"
    ]
  },
  {
    id: 5,
    name: "Everytap",
    description: "Beacon-based loyalty platform enabling users to earn and redeem points when visiting venues. Optimized beacon scanning and Material Design UI.",
    technologies: ["Kotlin", "Bluetooth LE", "Beacons", "Material Design"],
    rating: 4.8,
    downloads: "250K+",
    features: ["iBeacon/Eddystone", "Rewards tracking", "Venue detection", "Custom animations"],
    playStoreUrl: "#",
    screenshot: "/assets/images/everytap.webp",
    color: "red",
    role: "Lead Android Developer",
    teamSize: "3 developers",
    timeline: "14 months",
    metrics: [
      { label: "Beacon Detection", value: "99% accuracy", icon: <Award className="w-4 h-4" /> },
      { label: "Battery Impact", value: "<2% per day", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Venue Coverage", value: "500+ locations", icon: <Users className="w-4 h-4" /> }
    ],
    challenges: [
      "Developed efficient Bluetooth LE scanning algorithm reducing battery drain by 80%",
      "Implemented iBeacon and Eddystone protocol support for cross-platform compatibility",
      "Built real-time venue detection with geofencing fallback",
      "Created smooth Material Design animations for reward notifications"
    ]
  }
];

const getColorClasses = (color: string, theme: 'light' | 'dark') => {
  const colors: Record<string, Record<'light' | 'dark', { bg: string; text: string; border: string; pill: string; pilltxt: string; descText: string; featureText: string }>> = {
    orange: {
      light: {
        bg: 'bg-orange-50',
        text: 'text-orange-700',
        border: 'border-orange-200 hover:border-orange-400',
        pill: 'bg-orange-100',
        pilltxt: 'text-orange-700',
        descText: 'text-gray-700',
        featureText: 'text-gray-700'
      },
      dark: {
        bg: 'bg-orange-950/30',
        text: 'text-orange-400',
        border: 'border-orange-800 hover:border-orange-700',
        pill: 'bg-orange-900/50',
        pilltxt: 'text-orange-300',
        descText: 'text-gray-300',
        featureText: 'text-gray-400'
      }
    },
    amber: {
      light: {
        bg: 'bg-amber-50',
        text: 'text-amber-700',
        border: 'border-amber-200 hover:border-amber-400',
        pill: 'bg-amber-100',
        pilltxt: 'text-amber-700',
        descText: 'text-gray-700',
        featureText: 'text-gray-700'
      },
      dark: {
        bg: 'bg-amber-950/30',
        text: 'text-amber-400',
        border: 'border-amber-800 hover:border-amber-700',
        pill: 'bg-amber-900/50',
        pilltxt: 'text-amber-300',
        descText: 'text-gray-300',
        featureText: 'text-gray-400'
      }
    },
    red: {
      light: {
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200 hover:border-red-400',
        pill: 'bg-red-100',
        pilltxt: 'text-red-700',
        descText: 'text-gray-700',
        featureText: 'text-gray-700'
      },
      dark: {
        bg: 'bg-red-950/30',
        text: 'text-red-400',
        border: 'border-red-800 hover:border-red-700',
        pill: 'bg-red-900/50',
        pilltxt: 'text-red-300',
        descText: 'text-gray-300',
        featureText: 'text-gray-400'
      }
    }
  };
  return colors[color]?.[theme] || colors.orange[theme];
};

export default function AppsPortfolio() {
  const { theme } = useTheme();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (id: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <section id="portfolio" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      theme === 'light'
        ? 'bg-gradient-to-b from-transparent via-orange-100/30 to-transparent'
        : 'bg-gradient-to-b from-transparent via-orange-950/20 to-transparent'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 transition-colors ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-lg font-medium transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-400'
          }`}>
            Production-ready Android applications with measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => {
            const colors = getColorClasses(app.color, theme);
            const isExpanded = expandedCards.has(app.id);
            return (
              <div
                key={app.id}
                className={`group ${colors.bg} rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 ${colors.border}`}
              >
                <img
                  src={app.screenshot}
                  alt={`${app.name} screenshot`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <div className={`h-12 w-12 ${colors.pill} rounded-full flex items-center justify-center ${colors.text} font-bold text-lg mb-3`}>
                      {app.name.charAt(0)}
                    </div>
                    <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{app.name}</h3>
                    <p className={`text-sm mb-3 ${colors.descText}`}>{app.description}</p>
                    
                    {/* Role and Project Info */}
                    <div className={`mb-3 pt-3 border-t ${theme === 'light' ? 'border-orange-100' : 'border-orange-900'}`}>
                      <div className={`text-xs font-semibold mb-1 ${colors.text}`}>My Role</div>
                      <div className={`text-xs ${colors.descText} mb-2`}>{app.role}</div>
                      {(app.teamSize || app.timeline) && (
                        <div className="flex gap-3 text-xs">
                          {app.teamSize && (
                            <div className={`flex items-center gap-1 ${colors.featureText}`}>
                              <Users className="w-3 h-3" />
                              <span>{app.teamSize}</span>
                            </div>
                          )}
                          {app.timeline && (
                            <div className={`flex items-center gap-1 ${colors.featureText}`}>
                              <Clock className="w-3 h-3" />
                              <span>{app.timeline}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  {app.metrics && app.metrics.length > 0 && (
                    <div className="mb-4">
                      <p className={`text-xs font-semibold mb-2 ${colors.text}`}>Key Achievements:</p>
                      <div className="space-y-2">
                        {app.metrics.map((metric, idx) => (
                          <div key={idx} className={`flex items-center gap-2 text-xs ${colors.featureText}`}>
                            {metric.icon && <div className={colors.text}>{metric.icon}</div>}
                            <span className="font-medium">{metric.label}:</span>
                            <span className={`font-bold ${colors.text}`}>{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(app.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : theme === 'light' ? 'text-gray-300' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`font-semibold text-sm ${theme === 'light' ? 'text-amber-600' : 'text-amber-500'}`}>{app.rating}</span>
                      <span className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'}`}>({app.downloads})</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {app.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 ${colors.pill} ${colors.text} rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className={`text-xs font-semibold mb-2 ${colors.text}`}>Key Features:</p>
                    <ul className="space-y-1">
                      {app.features.map((feature) => (
                        <li key={feature} className={`text-xs flex items-center ${colors.featureText}`}>
                          <span className={`w-1.5 h-1.5 ${colors.text} rounded-full mr-2`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges - Expandable */}
                  {app.challenges && app.challenges.length > 0 && (
                    <div className="mb-4">
                      <button
                        onClick={() => toggleCard(app.id)}
                        className={`w-full flex items-center justify-between text-xs font-semibold ${colors.text} hover:opacity-75 transition`}
                      >
                        <span>Technical Challenges</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className={`mt-2 pt-2 border-t ${theme === 'light' ? 'border-orange-100' : 'border-orange-900'}`}>
                          <ul className="space-y-2">
                            {app.challenges.map((challenge, idx) => (
                              <li key={idx} className={`text-xs flex items-start gap-2 ${colors.featureText}`}>
                                <span className={`w-1.5 h-1.5 ${colors.text} rounded-full mt-1.5 flex-shrink-0`}></span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {app.playStoreUrl && app.playStoreUrl !== '#' && (
                    <a
                      href={app.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 ${colors.text} hover:opacity-75 transition font-semibold text-sm group-hover:gap-3`}
                    >
                      View on Play Store
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
