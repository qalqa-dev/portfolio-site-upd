import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      components: path.resolve(__dirname, '/src/components'),
      sections: path.resolve(__dirname, '/src/sections'),
      types: path.resolve(__dirname, '/src/types'),
    },
  },
});
