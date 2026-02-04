import sharp from 'sharp';

async function createOGImage() {
  try {
    const width = 1200;
    const height = 630;
    
    // Use the same gradient colors as the website (orange-50 to amber-50)
    // Converting Tailwind colors: orange-50 (#fff7ed), amber-50 (#fffbeb), orange-50
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#fff7ed;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#fffbeb;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#fff7ed;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ea580c;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#d97706;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
        
        <!-- Main title with gradient -->
        <text x="600" y="250" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="80" font-weight="700" fill="url(#textGrad)" text-anchor="middle" letter-spacing="-0.02em">Rafal Niski</text>
        
        <!-- Subtitle -->
        <text x="600" y="320" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="38" font-weight="600" fill="#1f2937" text-anchor="middle" letter-spacing="-0.01em">Lead Android Engineer</text>
        
        <!-- Divider line -->
        <line x1="450" y1="350" x2="750" y2="350" stroke="#ea580c" stroke-width="3" stroke-linecap="round"/>
        
        <!-- Tagline -->
        <text x="600" y="390" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="28" font-weight="500" fill="#374151" text-anchor="middle">Freelance Android Developer</text>
        
        <!-- Stats -->
        <text x="600" y="460" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="500" fill="#6b7280" text-anchor="middle">12+ Years • 50+ Apps • Enterprise Experience</text>
        
        <!-- Email -->
        <text x="600" y="520" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="24" font-weight="500" fill="#ea580c" text-anchor="middle">contact@rafalniski.dev</text>
        
        <!-- Accent decoration -->
        <circle cx="300" cy="200" r="100" fill="#f59e0b" opacity="0.1"/>
        <circle cx="900" cy="430" r="120" fill="#ea580c" opacity="0.1"/>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .resize(width, height)
      .jpeg({ quality: 95 })
      .toFile('public/og-image.jpg');

    console.log('✓ OG image created with website styling: public/og-image.jpg');
  } catch (error) {
    console.error('Error creating OG image:', error);
  }
}

createOGImage();
