import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  root: ".",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          firebase: ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          charts: ['chart.js', 'react-chartjs-2'],
          icons: ['react-icons/fa', 'lucide-react']
        },
        // Ensure proper file extensions and naming
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
    },
    // Ensure proper MIME types
    assetsInlineLimit: 0,
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    open: true,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'cross-origin'
    },
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      'chart.js',
      'react-chartjs-2',
      'firebase/app',
      'firebase/firestore',
      'firebase/auth'
    ],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Ensure proper module resolution
  esbuild: {
    target: 'esnext',
    format: 'esm',
    // Add options to prevent temporal dead zone issues
    keepNames: true,
    minifyIdentifiers: false,
  },
});
