import { resolve } from 'node:path';
import { readdirSync, writeFileSync } from 'node:fs';

try {
  const generatedTsPath = resolve('src/generated/ts');
  const indexPath = resolve('src/index.ts');

  const files = readdirSync(generatedTsPath);
  console.log('Found files:', files);

  const exports = [];

  files.forEach((file) => {
    if (file.endsWith('.ts')) {
      const fileName = file.replace('.ts', '');
      exports.push(`export * from './generated/ts/${fileName}.js';`);
    }
  });

  const indexContent = [
    '/**',
    ' * Auto-generated index file for design tokens',
    ' * Do not edit directly, this file was auto-generated.',
    ' */',
    '',
    ...exports,
    '',
  ].join('\n');

  writeFileSync(indexPath, indexContent, 'utf8');
  console.log(`Generated ${indexPath} with ${exports.length} exports`);
} catch (err) {
  console.error('Error generating index file:', err);
}
