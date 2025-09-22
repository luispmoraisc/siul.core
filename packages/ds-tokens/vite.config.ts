import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => {
  const pkg = require('./package.json');
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/ds-tokens',
    plugins: [
      dts({
        entryRoot: 'src',
        tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      }),
    ],
    build: {
      outDir: './dist',
      emptyOutDir: false,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        entry: 'src/index.ts',
        name: '@luispmoraisc/ds-tokens',
        fileName: '[name]',
        formats: ['es' as const],
      },
      rollupOptions: {
        input: {
          // add each category as an entry point or we should create a script to do it for us
          colors: path.resolve(__dirname, 'src/generated/ts/colors.ts'),
          spacing: path.resolve(__dirname, 'src/generated/ts/spacing.ts'),
          typography: path.resolve(__dirname, 'src/generated/ts/typography.ts'),
        },
        output: {
          entryFileNames: '[name].js',
          format: ['es' as const] as any, // TODO - typescript issue
        },
        external: [
          ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []),
        ],
      },
    },
  };
});
