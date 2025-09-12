/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as path from 'path';

export default defineConfig(() => {
  const pkg = require('./package.json');
  return {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/packages/ds',
    plugins: [
      react(),
      dts({
        entryRoot: 'src',
        tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
      }),
    ],
    // Configuration for building your library.
    // See: https://vitejs.dev/guide/build.html#library-mode
    build: {
      outDir: './dist',
      emptyOutDir: true,
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      lib: {
        // Could also be a dictionary or array of multiple entry points.
        entry: 'src/index.ts',
        name: '@siul/ds',
        fileName: 'index',
        formats: ['es' as const],
      },
      rollupOptions: {
        // External packages that should not be bundled into your library.
        external: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []),
        ],
      },
    },
    test: {
      name: '@siul/ds',
      watch: false,
      globals: true,
      environment: 'jsdom',
      include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
      coverage: {
        reportsDirectory: './test-output/vitest/coverage',
        provider: 'v8' as const,
      },
    },
  };
});
