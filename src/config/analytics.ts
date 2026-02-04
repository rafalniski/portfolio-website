// Google Analytics 4 Configuration
// GA4 is initialized directly in index.html via gtag.js
// This file provides helper functions for custom event tracking

export const GA_MEASUREMENT_ID = 'G-FRMQCJ4LLV';

// Initialize Google Analytics (gtag is already loaded from index.html)
export const initGA = () => {
  if (typeof window === 'undefined') return;
  
  // gtag is already initialized in index.html, so we just ensure it's available
  if (!(window as any).gtag) {
    console.warn('Google Analytics: gtag is not available. Make sure GA4 tag is in index.html');
    return;
  }
  
  console.log('Google Analytics: Ready for custom event tracking');
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !(window as any).gtag) return;
  
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
  if (typeof window === 'undefined' || !(window as any).gtag) return;

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
