import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,    // Allows access from outside the container
    port: 5173,
    watch: {
      usePolling: true, // Necessary for some Windows/Docker setups to detect file changes
    },
  },
})
