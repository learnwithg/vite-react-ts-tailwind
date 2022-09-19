import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    cssInjectedByJsPlugin({ topExecutionPriority: false })
  ],
  resolve: {
    alias: [
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
      },
      {
        find: '#utils',
        replacement: path.resolve(__dirname, './src/utils')
      }
    ]
  }
})
