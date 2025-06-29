// merge-schema.js
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'prisma/schema');
const outputFile = path.join(__dirname, 'prisma/schema.prisma');

// Read all .prisma files from input directory
const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.prisma'));

// Concatenate all file contents
const mergedSchema = files.map(file => {
  const filePath = path.join(inputDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  return `// ${file}\n${content}\n`;
}).join('\n');

// Write to schema.prisma
fs.writeFileSync(outputFile, mergedSchema);

console.log('✅ Merged Prisma schema saved to prisma/schema.prisma');
