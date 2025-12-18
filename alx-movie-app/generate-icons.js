const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const sizes = [
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'apple-icon-152x152.png', size: 152 },
  { name: 'ms-icon-310x310.png', size: 310 }
];

const iconsDir = path.join(__dirname, 'public', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

sizes.forEach(({ name, size }) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = '#0070f3'; // Blue background
  ctx.fillRect(0, 0, size, size);
  
  // Draw film reel icon (white)
  ctx.fillStyle = '#FFFFFF';
  
  // Draw a simple film icon
  const center = size / 2;
  const radius = size * 0.3;
  
  // Circle
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, Math.PI * 2);
  ctx.fill();
  
  // Draw play triangle
  ctx.fillStyle = '#0070f3';
  const triangleSize = radius * 0.6;
  ctx.beginPath();
  ctx.moveTo(center - triangleSize/2, center - triangleSize/2);
  ctx.lineTo(center - triangleSize/2, center + triangleSize/2);
  ctx.lineTo(center + triangleSize/2, center);
  ctx.closePath();
  ctx.fill();
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(iconsDir, name), buffer);
  
  console.log(`Created: ${name}`);
});

console.log('All icons generated successfully!');