import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kalaimahal_School/',
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
