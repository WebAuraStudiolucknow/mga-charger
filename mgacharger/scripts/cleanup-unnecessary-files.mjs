import fs from 'fs';
import path from 'path';

function cleanupUnnecessaryFiles() {
  const galleryNobgDir = path.resolve('public/gallery-nobg');

  if (fs.existsSync(galleryNobgDir)) {
    const files = fs.readdirSync(galleryNobgDir);
    let deletedCount = 0;

    for (const file of files) {
      if (/^image_\d+\.png$/i.test(file)) {
        const filePath = path.join(galleryNobgDir, file);
        fs.unlinkSync(filePath);
        deletedCount++;
        console.log(`🗑️ Removed unneeded file: public/gallery-nobg/${file}`);
      }
    }
    console.log(`\n🎉 Cleanup complete: Deleted ${deletedCount} obsolete image_X.png files.`);
  }
}

cleanupUnnecessaryFiles();
