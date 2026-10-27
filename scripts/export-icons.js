const sharp = require('sharp');

const full = 'assets/logo.svg';
const mark = 'assets/logo-mark.svg';
const background = '#0B0D10';

async function run() {
  await sharp(full, { density: 1024 }).resize(1024, 1024).flatten({ background }).png().toFile('assets/icon.png');

  const markForAndroid = await sharp(mark, { density: 1024 }).resize(640, 640).png().toBuffer();
  await sharp({ create: { width: 1024, height: 1024, channels: 4, background } })
    .composite([{ input: markForAndroid, gravity: 'center' }])
    .png()
    .toFile('assets/adaptive-icon.png');

  await sharp(mark, { density: 1024 }).resize(1024, 1024).png().toFile('assets/splash-icon.png');

  console.log('Exported icon.png, adaptive-icon.png, splash-icon.png');
}

run();
