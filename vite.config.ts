import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Server ist im lokalen Netzwerk erreichbar – Network-URL im Terminal nutzen,
// um die Seite z. B. vom Smartphone aus zu testen (gleiches WLAN erforderlich).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // bindet an alle Interfaces (0.0.0.0), nicht nur localhost
    port: 5173,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 5173,
    strictPort: true,
  },
})
