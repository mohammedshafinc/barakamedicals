import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Required by shadcn/ui component imports.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
