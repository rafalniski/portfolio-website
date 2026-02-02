// Google Analytics 4 Configuration
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) return;
  
  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventCategory: string,
  eventLabel?: string,
  value?: number
) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) return;

  (window as any).gtag('event', eventName, {
    event_category: eventCategory,
    event_label: eventLabel,
    value: value,
  });
};

// Track CTA clicks
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('cta_click', 'engagement', `${ctaName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'conversion', formName);
};

// Track external link clicks
export const trackExternalLink = (linkName: string, url: string) => {
  trackEvent('external_link', 'engagement', `${linkName} - ${url}`);
};

// Track section views (scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'engagement', sectionName);
};

// Track contact method clicks
export const trackContactMethod = (method: string) => {
  trackEvent('contact_method', 'conversion', method);
};

// Declare gtag types for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
