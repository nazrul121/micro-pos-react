import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // <--- Fix this name
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})