import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/assets/images');
const portfolioImages = [
  'volvo-cars.png',
  'travelbank.png',
  'amber.png',
  'safetrek.png',
  'everytap.png',
  'inventrip.png'
];

async function cropImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${path.basename(inputPath)}: ${metadata.width}x${metadata.height}`);
    
    // Crop from top to remove text overlay (typically ~15-20% of height)
    // Keep bottom portion which contains the phone
    const cropTop = Math.floor(metadata.height * 0.15); // Remove top 15%
    const cropHeight = metadata.height - cropTop;
    
    const tempPath = outputPath + '.tmp';
    await sharp(inputPath)
      .extract({
        left: 0,
        top: cropTop,
        width: metadata.width,
        height: cropHeight
      })
      .toFile(tempPath);
    
    // Replace original with cropped version
    fs.renameSync(tempPath, outputPath);
    
    console.log(`✓ Cropped ${path.basename(inputPath)} - removed top ${cropTop}px`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function processAllImages() {
  console.log('Starting image cropping...\n');
  
  for (const imageName of portfolioImages) {
    const inputPath = path.join(imagesDir, imageName);
    const outputPath = path.join(imagesDir, imageName);
    
    if (fs.existsSync(inputPath)) {
      await cropImage(inputPath, outputPath);
    } else {
      console.log(`⚠ File not found: ${imageName}`);
    }
  }
  
  console.log('\n✓ All images processed!');
}

processAllImages();
