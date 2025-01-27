import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()], // React plugin for Vite

  server: {
    port: 5173, // Development server port
    host: 'localhost', // Development server host
    proxy: {
      // Uncomment and configure if you need a proxy for API requests during development
      // '/api': {
      //   target: 'http://localhost:5000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },

  resolve: {
    alias: {
      '@': '/src', // Alias for easier imports (e.g., '@/components/Header')
    },
  },

  build: {
    outDir: 'dist', // Output directory for the build
    base: './', // Ensures relative paths for assets (important for Netlify)
    assetsDir: 'assets', // Directory for static assets (CSS, JS, images, etc.)
    emptyOutDir: true, // Clears the output directory before building

    // Optional: Configure rollup options for better bundling
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]', // Organize assets in the build folder
        chunkFileNames: 'assets/[name].[hash].js', // Organize chunks in the build folder
        entryFileNames: 'assets/[name].[hash].js', // Organize entry points in the build folder
      },
    },
  },

  // Optional: Enable source maps for debugging
  sourcemap: true,
});
