import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// If this repo is published at https://<user>.github.io/website/
// set base to '/website/'. If you publish at a custom domain or user root,
// change this to '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
