import fs from 'fs';
import path from 'path';

const sourceCmsDir = path.resolve('../mgacharger-cms');
const destCmsDir = path.resolve('mgacharger-cms');

const ignoreList = ['node_modules', '.next', '.payload', '.git', 'out', 'build', '.cache'];

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    const baseName = path.basename(src);
    if (ignoreList.includes(baseName)) return;

    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const items = fs.readdirSync(src);
    for (const item of items) {
      if (!ignoreList.includes(item)) {
        copyRecursive(path.join(src, item), path.join(dest, item));
      }
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log(`🚀 Copying Payload CMS code from ${sourceCmsDir} to ${destCmsDir}...`);
copyRecursive(sourceCmsDir, destCmsDir);
console.log(`✅ Payload CMS code successfully integrated into ${destCmsDir}!`);
