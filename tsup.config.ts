import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  shims: false,
  bundle: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'css'
  }
});
