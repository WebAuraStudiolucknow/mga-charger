import fs from 'fs';
import path from 'path';

// 1. Read API Key from .env.local
const envPath = path.resolve('.env.local');
if (!fs.existsSync(envPath)) {
  console.error("❌ Error: .env.local file not found!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf-8');
const keyMatch = envContent.match(/GEMINI_API_KEY=(.+)/);
if (!keyMatch) {
  console.error("❌ Error: GEMINI_API_KEY not found in .env.local!");
  process.exit(1);
}

const apiKey = keyMatch[1].trim();
console.log(`🔑 Using Gemini API Key: ${apiKey.substring(0, 8)}...`);

// Output folder for background-removed PNG images
const outputDir = path.resolve('public/gallery-nobg');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to process a single image using Gemini 2.5 Flash Image Model
async function removeBackground(inputFileName) {
  const inputPath = path.resolve('public/gallery', inputFileName);
  const outputFileName = inputFileName.replace(/\.(jpg|jpeg|webp)$/i, '.png');
  const outputPath = path.join(outputDir, outputFileName);

  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Input file not found: ${inputPath}`);
    return false;
  }

  // Skip if already processed and non-empty
  if (fs.existsSync(outputPath) && fs.statSync(outputPath).size > 100000) {
    console.log(`⏩ Skipping ${inputFileName} (Already processed: ${outputFileName})`);
    return true;
  }

  console.log(`\n⚙️ Enhancing & Removing Background: ${inputFileName} -> public/gallery-nobg/${outputFileName}`);

  const imageBuffer = fs.readFileSync(inputPath);
  const base64Image = imageBuffer.toString('base64');
  const mimeType = inputFileName.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg';

  const prompt = `You are a high-precision product photography AI.
Given this image of an MGA Electronics product (battery charger / load tester):
1. Remove the entire background completely and replace it with a 100% transparent PNG background.
2. Enhance the product image lighting, contrast, and clarity. Keep the main product, metal/plastic chassis, switches, LED meters, wires, connectors, and 'MGA' brand logo 100% intact, crisp, sharp, and pixel-perfect.
3. Do not add any new elements or alter the product brand name MGA.
4. Output ONLY the resulting transparent PNG image.`;

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${apiKey}`;

  const requestBody = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Image
            }
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error(`❌ API Error (${response.status}):`, errText);
      return false;
    }

    const json = await response.json();
    const parts = json.candidates?.[0]?.content?.parts || [];

    for (const part of parts) {
      const inlineData = part.inline_data || part.inlineData;
      if (inlineData && inlineData.data) {
        const pngBuffer = Buffer.from(inlineData.data, 'base64');
        fs.writeFileSync(outputPath, pngBuffer);
        console.log(`✅ SUCCESS: Saved enhanced transparent PNG -> ${outputPath} (${(pngBuffer.length / 1024).toFixed(1)} KB)`);
        return true;
      }
    }

    console.error("⚠️ No image data found in response:", JSON.stringify(json, null, 2));
    return false;

  } catch (error) {
    console.error(`❌ Fetch error processing ${inputFileName}:`, error);
    return false;
  }
}

async function removeBackgroundWithRetry(inputFileName, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    const success = await removeBackground(inputFileName);
    if (success) return true;
    if (attempt < maxRetries) {
      console.log(`⏳ Retry attempt ${attempt}/${maxRetries} for ${inputFileName} in 3 seconds...`);
      await new Promise(r => setTimeout(r, 3000));
    }
  }
  return false;
}

// Main execution for ALL images in /public/gallery/
async function runAll() {
  const allFiles = fs.readdirSync(path.resolve('public/gallery'));
  const galleryFiles = allFiles
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
      const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
      return numA - numB;
    });

  console.log(`🚀 Processing ALL ${galleryFiles.length} gallery images in numerical order...`);

  for (const imgName of galleryFiles) {
    await removeBackgroundWithRetry(imgName);
  }

  console.log(`\n🎉 ALL gallery images processed & saved in public/gallery-nobg/!`);
}

runAll();
