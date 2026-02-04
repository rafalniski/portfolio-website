import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { CONTACT_INFO } from '../config/constants';
import { trackFormSubmission } from '../config/analytics';

export default function ContactForm() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Format email body
      const emailBody = `
New Project Inquiry from Portfolio Website

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Project Type: ${formData.projectType || 'Not specified'}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}

---
This email was sent from the contact form on rafalniski.dev
      `.trim();

      // Send email using Formspree or Cloudflare Pages Function
      // Replace YOUR_FORMSPREE_ID with your Formspree form ID after setup
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Project Inquiry: ${formData.projectType || 'Android Development'}`,
          _replyto: formData.email,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          _format: 'plain',
        }),
      });

      if (response.ok) {
        // Track form submission
        trackFormSubmission('Contact Form');
        
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`rounded-3xl p-8 border-2 transition-colors ${
      theme === 'light'
        ? 'bg-white border-orange-200'
        : 'bg-gray-800 border-orange-800'
    }`}>
      <h3 className={`text-2xl font-bold mb-2 transition-colors ${
        theme === 'light' ? 'text-gray-900' : 'text-white'
      }`}>
        Send a Message
      </h3>
      <p className={`mb-6 transition-colors ${
        theme === 'light' ? 'text-gray-600' : 'text-gray-400'
      }`}>
        Fill out the form below and I'll get back to you within {CONTACT_INFO.responseTime.toLowerCase()}.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                theme === 'light'
                  ? 'bg-white border-gray-300 focus:border-orange-500'
                  : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
              }`}
            />
          </div>
          <div>
            <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                theme === 'light'
                  ? 'bg-white border-gray-300 focus:border-orange-500'
                  : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
              }`}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={`block text-sm font-medium mb-2 transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              theme === 'light'
                ? 'bg-white border-gray-300 focus:border-orange-500'
                : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
            }`}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectType" className={`block text-sm font-medium mb-2 transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                theme === 'light'
                  ? 'bg-white border-gray-300 focus:border-orange-500'
                  : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
              }`}
            >
              <option value="">Select...</option>
              <option value="New App Development">New App Development</option>
              <option value="App Redesign">App Redesign</option>
              <option value="Feature Development">Feature Development</option>
              <option value="Architecture Consultation">Architecture Consultation</option>
              <option value="Code Review">Code Review</option>
              <option value="Performance Optimization">Performance Optimization</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={`block text-sm font-medium mb-2 transition-colors ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                theme === 'light'
                  ? 'bg-white border-gray-300 focus:border-orange-500'
                  : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
              }`}
            >
              <option value="">Select...</option>
              <option value="Under $10k">Under $10k</option>
              <option value="$10k - $25k">$10k - $25k</option>
              <option value="$25k - $50k">$25k - $50k</option>
              <option value="$50k - $100k">$50k - $100k</option>
              <option value="Over $100k">Over $100k</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="timeline" className={`block text-sm font-medium mb-2 transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              theme === 'light'
                ? 'bg-white border-gray-300 focus:border-orange-500'
                : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
            }`}
          >
            <option value="">Select...</option>
            <option value="ASAP">ASAP</option>
            <option value="1-2 months">1-2 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              theme === 'light'
                ? 'bg-white border-gray-300 focus:border-orange-500'
                : 'bg-gray-700 border-gray-600 focus:border-orange-500 text-white'
            }`}
            placeholder="Tell me about your project..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className={`p-4 rounded-lg ${
            theme === 'light' ? 'bg-green-50 text-green-700' : 'bg-green-900/30 text-green-400'
          }`}>
            ✓ Thank you! Your message has been sent successfully. I'll get back to you within {CONTACT_INFO.responseTime.toLowerCase()}.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={`p-4 rounded-lg ${
            theme === 'light' ? 'bg-red-50 text-red-700' : 'bg-red-900/30 text-red-400'
          }`}>
            ✗ Sorry, there was an error sending your message. Please try again or email me directly at {CONTACT_INFO.email}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-6 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
            theme === 'light'
              ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:shadow-lg'
              : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
