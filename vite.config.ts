import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.join(currentDir, './src/styles/global.scss')}" as *;`,
      },
    },
  },
})
