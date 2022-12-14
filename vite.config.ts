import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '#rtkstore',
        replacement: path.resolve(__dirname, './src/app/store'),
      },
      {
        find: '#rtkhooks',
        replacement: path.resolve(__dirname, './src/app/hooks'),
      },
      {
        find: '#rtkfeatures',
        replacement: path.resolve(__dirname, './src/features'),
      },
    ],
  },
});
