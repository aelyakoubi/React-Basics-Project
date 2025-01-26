import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // React plugin for Vite

  server: {
    port: 5173,
    host: 'localhost',
    proxy: {
      // No need for just development, for deploy 
      // '/api': {
      //   target: 'http://localhost:5000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },

  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports
    },
  },

  build: {
    outDir: 'dist', // Ensure the build outputs to the 'dist' folder (default)

    // Add this to fix asset paths for deployment:
    base: './', // Ensures relative paths for assets like images and CSS
  },
});
