const fs = require('fs');
const path = require('path');

module.exports = function() {

  const galleryDir = path.join(__dirname, '../gallery');
  
  if (!fs.existsSync(galleryDir)) {
    return [];
  }
  
  const files = fs.readdirSync(galleryDir);
  
  return files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
};