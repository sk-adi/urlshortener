import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":{
        target:"https://urlshortener-1-uxie.onrender.com",
        changeOrigin:true,
        secure:false,
      },
      "/a":{
        target:"https://urlshortener-1-uxie.onrender.com",
        changeOrigin:true,
        secure:false,
      },
    }

  },
  plugins: [
    tailwindcss(),
    react()],
})
