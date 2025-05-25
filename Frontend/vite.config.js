import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // This exposes the server to your network
    port: 3000  // Optional: specify a port
  },
  plugins: [react()],
})
