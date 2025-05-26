// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    open: true
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(process.cwd(), './src') }
    ]
  }
});
