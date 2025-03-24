import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      ['components']: path.resolve(__dirname, '/src/components'),
      ['sections']: path.resolve(__dirname, '/src/sections'),
      ['sections-term']: path.resolve(__dirname, '/src/sections-term'),
      ['assets']: path.resolve(__dirname, '/src/assets'),
      ['types']: path.resolve(__dirname, '/src/types'),
      ['utils']: path.resolve(__dirname, '/src/utils'),
      ['store']: path.resolve(__dirname, '/src/store'),
      ['data']: path.resolve(__dirname, '/src/data'),
      ['locales']: path.resolve(__dirname, '/src/locales'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup',
  },
});
