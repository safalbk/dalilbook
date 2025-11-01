import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
    server: {
    host: true, // same as --host
    allowedHosts: ['1b517a48c97a.ngrok-free.app'], // your ngrok or external host
  },
  plugins: [react(), tailwindcss(),
  ],
})
