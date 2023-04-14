const sharp = require('sharp');

// console.log(sharp);
sharp('node.png').resize(100).grayscale().toFile('resized.jpg');
