import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for development and production
export default defineConfig({
  plugins: [react()], // Vite React plugin to support JSX and other React-specific features
  
  server: {
    // Server configuration for local development
    proxy: {
      // For local development, proxy API requests to a local backend (if needed)
      // Uncomment and configure the proxy when using a backend during development
      // '/api': {
      //   target: 'http://localhost:5000', // Replace with your backend API URL if necessary
      //   changeOrigin: true, // Ensures the host header is set to the target URL
      //   rewrite: (path) => path.replace(/^\/api/, ''), // Removes the /api prefix from the URL
      // },
    },
    
    // Local development settings (unchanged for now)
    port: 5173, // Default port for Vite (kept active for dev mode)
    host: 'localhost', // Localhost for local development (do not expose this during testing)
  },
  
  define: {
    // Pass environment variables to the frontend (if needed)
    // Uncomment and configure if you're using environment variables in your app
    // 'process.env': process.env, // Access environment variables in your frontend code
  },
  
  resolve: {
    alias: {
      // Define an alias for easier imports (e.g., import components from '@/components')
      '@': '/src', // This is now an alias for '/src' directory
    },
  },
  
  build: {
    // Production build configuration (unchanged for now)
    outDir: 'dist', // Build directory for production (default is 'dist')
    
    // Uncomment and adjust for deployment settings when ready to deploy
    // base: '/your-deployed-url/', // Add your production URL base path here if needed for deployment
  },
});
