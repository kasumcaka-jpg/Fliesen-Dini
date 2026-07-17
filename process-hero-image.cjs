const Jimp = require('jimp').Jimp;
const fs = require('fs');
const path = require('path');

const imagePath = path.join(__dirname, 'public', 'images', 'hero-bg.jpg');

async function processImage() {
  try {
    const image = await Jimp.read(imagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log('Original dimensions:', width, 'x', height);
    console.log('Original file size:', (fs.statSync(imagePath).size / 1024).toFixed(2), 'KB');

    const maxWidth = 1920;
    if (width > maxWidth) {
      const scale = maxWidth / width;
      const newHeight = Math.round(height * scale);
      image.resize(maxWidth, newHeight);
      console.log('Resized to:', maxWidth, 'x', newHeight);
    }

    image.quality(85);
    await image.write(imagePath);
    console.log('Processed image saved to', imagePath);
    console.log('New file size:', (fs.statSync(imagePath).size / 1024).toFixed(2), 'KB');
  } catch (error) {
    console.error('Error processing image:', error.message);
  }
}

processImage();