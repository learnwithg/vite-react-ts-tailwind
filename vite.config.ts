import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: '#core',
        replacement: path.resolve(__dirname, './src/components/core')
      },
      {
        find: '#rtkstore',
        replacement: path.resolve(__dirname, './src/app/store')
      },
      {
        find: '#rtkhooks',
        replacement: path.resolve(__dirname, './src/app/hooks')
      },
      {
        find: '#rtkfeatures',
        replacement: path.resolve(__dirname, './src/app/features')
      }
    ]
  }
})
