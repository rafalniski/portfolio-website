import sharp from 'sharp';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apps = [
  {
    name: 'volvo-cars',
    url: 'https://play-lh.googleusercontent.com/msayaIwwbQ1fUNm6sMUGTfeg0kHX-gK-7RNgYHd9ZBvN1uaEZKju1mSb4-NP6jJ10Veof4ne_IkCVTo6VrQo=w1920-h1080-rw'
  },
  {
    name: 'travelbank',
    url: 'https://play-lh.googleusercontent.com/vHd2_fU4qbTiMwF_FI3N-lCZifO2-4qYXhktGX7UY9GG-8uWuxgvoTAyR0xEsLZ0cWY=w1920-h1080'
  },
  {
    name: 'amber',
    url: 'https://play-lh.googleusercontent.com/fug6FANDee3xcYDRDAkgMZFT7WRe9GhhSfEXm_CzQC4PF8YQpi44PH6sL--lRw5uJQ=w1920-h1080'
  },
  {
    name: 'safetrek',
    url: 'https://play-lh.googleusercontent.com/MEzNGWkTE_jyh1duhwJ4zlDk-DR9jwO_ehYrtzG6V1aNaqsH-Ye30qb0vclP0zEDqig=w1920-h1080'
  },
  {
    name: 'everytap',
    url: 'https://play-lh.googleusercontent.com/Qzf_hc5bw9qeq1WyTSioXuvDqUpOFZa7ZTghKGHOOLCs52cXVp5dIuiH4cbqWzOdBE6G4nBwD9AG1FGk16o0gw=w1920-h1080'
  }
];

const outputDir = path.join(__dirname, '../public/assets/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(outputPath);
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirects
        downloadImage(response.headers.location, outputPath).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .resize(1920, 1080, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFile(outputPath);
    console.log(`✓ Converted to WebP: ${path.basename(outputPath)}`);
    // Remove temporary file
    fs.unlinkSync(inputPath);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
    throw error;
  }
}

async function main() {
  console.log('Downloading and converting screenshots...\n');

  for (const app of apps) {
    const tempPath = path.join(outputDir, `${app.name}-temp.jpg`);
    const outputPath = path.join(outputDir, `${app.name}.webp`);

    try {
      console.log(`Downloading ${app.name}...`);
      await downloadImage(app.url, tempPath);
      await processImage(tempPath, outputPath);
    } catch (error) {
      console.error(`Failed to process ${app.name}:`, error.message);
      // Try with original URL if high-res fails
      if (app.url.includes('w1920')) {
        console.log(`Trying original resolution for ${app.name}...`);
        const originalUrl = app.url.replace('w1920-h1080', 'w526-h296');
        try {
          await downloadImage(originalUrl, tempPath);
          await processImage(tempPath, outputPath);
        } catch (retryError) {
          console.error(`Failed retry for ${app.name}:`, retryError.message);
        }
      }
    }
  }

  console.log('\n✓ All screenshots processed!');
}

main().catch(console.error);
