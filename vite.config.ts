import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar React y React-DOM
          'react-vendor': ['react', 'react-dom'],
          // Separar React Router
          'router': ['react-router-dom'],
          // Separar librerías de UI
          'ui-vendor': ['lucide-react', 'framer-motion'],
          // Separar librerías de iconos
          'icons': ['react-icons'],
          // Separar librerías de utilidades
          'utils': ['clsx', 'tailwind-merge'],
        },
        // Optimizar nombres de chunks
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/[name]-[hash].js`;
        },
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Aumentar límite de warning para chunks más grandes
    chunkSizeWarningLimit: 1000,
    // Optimizaciones adicionales
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
}));
