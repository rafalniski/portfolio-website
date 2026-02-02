# Portfolio Website Setup Instructions

## Quick Setup Checklist

### 1. Update Social Media Links ✅
Edit `src/config/constants.ts` and replace the placeholder URLs:
- `SOCIAL_LINKS.github` - Your GitHub profile URL
- `SOCIAL_LINKS.linkedin` - Your LinkedIn profile URL

### 2. Add Your Professional Photo ✅
Place your professional photo at:
```
public/assets/images/profile-photo.jpg
```

The image should be:
- Square format (recommended: 800x800px or larger)
- Professional headshot
- Good quality (JPG or PNG)

If the image doesn't exist, the site will fall back to a placeholder automatically.

### 3. Set Up Google Analytics (Optional but Recommended)
1. Create a Google Analytics 4 property at https://analytics.google.com/
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create a `.env` file in the project root:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Restart your dev server (`npm run dev`)

**Note:** Analytics will work without the ID, but no data will be tracked. The site won't break if analytics isn't configured.

### 4. Update SEO Meta Tags (Optional)
If you have a custom domain, update `index.html`:
- Replace `https://rafalniski.com/` with your actual domain
- Add your actual OG image at `/og-image.jpg` (1200x630px recommended)

### 4. Customize Content (Optional)
- **About Section**: Edit `src/components/About.tsx` to personalize your story
- **FAQ**: Edit `src/components/FAQ.tsx` to add/remove questions
- **Process**: Edit `src/components/Process.tsx` to match your workflow

## What's Been Implemented

✅ Mobile-responsive navigation with hamburger menu
✅ Business-focused Hero section with value proposition
✅ About section with professional story
✅ Process/How I Work section
✅ FAQ section with common questions
✅ Contact form with project details
✅ SEO optimization (meta tags, structured data)
✅ Social links configuration
✅ Updated CTAs throughout the site
✅ Google Analytics 4 integration with event tracking

## Analytics Tracking

The site tracks the following events automatically:

- **Page Views**: Every page load
- **CTA Clicks**: "Start Your Project", "View My Work", "Schedule a Call", etc.
- **Form Submissions**: Contact form submissions
- **Contact Method Clicks**: Email, WhatsApp, Toptal links
- **External Links**: GitHub, LinkedIn, and other external links
- **Navigation**: Menu clicks

View your analytics data at: https://analytics.google.com/

## Next Steps (Optional Enhancements)

1. **Add Testimonials**: Create `src/components/Testimonials.tsx` when you have client reviews
2. **Add Trust Indicators**: Add badges, certifications, or "As seen in" section (already added basic trust indicators)
3. **Enhance Portfolio**: Add metrics, case studies, and role descriptions to portfolio items
4. **Add Blog Section**: If you write technical articles or blog posts

## Running the Site

```bash
npm run dev
```

Visit `http://localhost:5173/` to see your portfolio.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Need Help?

All configuration is centralized in `src/config/constants.ts` for easy updates.
