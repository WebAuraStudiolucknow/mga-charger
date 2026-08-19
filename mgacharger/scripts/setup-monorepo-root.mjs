import fs from 'fs';
import path from 'path';

const rootDir = path.resolve('..'); // c:\Users\upadh\Desktop\development\mgacharger
const frontendDir = path.resolve('.'); // c:\Users\upadh\Desktop\development\mgacharger\mgacharger
const subCmsDir = path.join(frontendDir, 'mgacharger-cms');

// 1. Remove duplicate subfolder mgacharger/mgacharger-cms if exists
if (fs.existsSync(subCmsDir)) {
  console.log(`🗑️ Removing duplicate subfolder: ${subCmsDir}...`);
  fs.rmSync(subCmsDir, { recursive: true, force: true });
}

// 2. Move .git folder to root directory c:\Users\upadh\Desktop\development\mgacharger\.git
const srcGit = path.join(frontendDir, '.git');
const destGit = path.join(rootDir, '.git');

if (fs.existsSync(srcGit)) {
  console.log(`🚚 Moving .git folder from ${srcGit} to ${destGit}...`);
  if (fs.existsSync(destGit)) {
    fs.rmSync(destGit, { recursive: true, force: true });
  }
  fs.renameSync(srcGit, destGit);
}

// 3. Create root .gitignore at c:\Users\upadh\Desktop\development\mgacharger\.gitignore
const rootGitIgnorePath = path.join(rootDir, '.gitignore');
const rootGitIgnoreContent = `# Dependencies
**/node_modules
**/.pnp
.pnp.*

# Next.js & Payload build outputs
**/.next
**/out
**/build
**/.payload
**/*.tsbuildinfo
**/next-env.d.ts

# Logs
**/npm-debug.log*
**/yarn-debug.log*

# Environment & local state
**/.env*
!**/.env.example
**/payload.db
**/public/media

# System files
.DS_Store
*.pem
`;

fs.writeFileSync(rootGitIgnorePath, rootGitIgnoreContent);
console.log(`✅ Created clean root .gitignore at ${rootGitIgnorePath}`);

// 4. Create root README.md
const rootReadmePath = path.join(rootDir, 'README.md');
const rootReadmeContent = `# MGA Charger Monorepo

This repository contains both the Next.js Frontend and Payload CMS Backend applications for MGA Charger.

## Directory Structure
- \`mgacharger/\`: Next.js Frontend Application
- \`mgacharger-cms/\`: Payload CMS & MongoDB Backend Application

## Getting Started

### 1. Frontend (\`mgacharger/\`)
\`\`\`bash
cd mgacharger
npm install
npm run dev
\`\`\`

### 2. CMS Backend (\`mgacharger-cms/\`)
\`\`\`bash
cd mgacharger-cms
npm install
npm run dev
\`\`\`
`;

fs.writeFileSync(rootReadmePath, rootReadmeContent);
console.log(`✅ Created root README.md at ${rootReadmePath}`);

console.log("\n🎉 Monorepo structure setup complete! Now running git status from root...");
