/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**'],
    setupFiles: './vitest.setup.ts',
  },
});
