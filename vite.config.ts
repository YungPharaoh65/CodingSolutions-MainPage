import { defineConfig } from 'vite';
 
export default defineConfig({
  plugins: [angular()],
  optimizeDeps: {
    include: [
      '@fortawesome/angular-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ]
  }
   