import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    entries: ['./src/main.jsx']
  },
  server: {
    fs: {
      allow: [path.resolve()]
    }
  }
})
