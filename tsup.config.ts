import { defineConfig } from 'tsup'
import { globSync } from 'glob'
import path from 'path'

export default defineConfig({
  entry: [
    'src/index.ts',
    ...globSync('src/**/*.css')
  ],
  format: ['esm', 'cjs'],
  dts: {
    entry: Object.fromEntries(
      globSync('src/**/*.{ts,tsx}').map(file => [
        path.relative('src', file).replace(/\.(ts|tsx)$/, ''),
        path.resolve(file)
      ])
    )
  },
  minify: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  bundle: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy'
  }
})
