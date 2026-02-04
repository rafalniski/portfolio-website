# Formspree Setup Guide

## Quick Setup Steps

1. **Create Formspree Account:**
   - Go to https://formspree.io/
   - Sign up for a free account (50 submissions/month)

2. **Create a New Form:**
   - After logging in, click "New Form"
   - Form will be assigned an ID like `YOUR_FORMSPREE_ID`

3. **Configure Form Settings:**
   - **Email:** Set to `contact@rafalniski.dev`
   - **Subject:** `Project Inquiry: {{projectType}}`
   - **Reply-To:** `{{email}}` (so replies go to the sender)

4. **Update Code:**
   - Open `src/components/ContactForm.tsx`
   - Find line with `YOUR_FORMSPREE_ID`
   - Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID
   - Example: `https://formspree.io/f/xjvqkzpn`

5. **Test:**
   - Submit the form on your website
   - Check your email at `contact@rafalniski.dev`

## Alternative: Cloudflare Email Workers (Advanced)

If you prefer to use Cloudflare Email Workers instead:

1. Set up Email Workers in Cloudflare Dashboard
2. Create a Worker function to handle form submissions
3. Update the form to POST to your Worker endpoint

Formspree is recommended for simplicity and reliability.
