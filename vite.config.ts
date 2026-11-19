import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' membuat semua asset memakai path relatif, aman untuk GitHub Pages
// di sub-path repository (https://user.github.io/nama-repo/).
export default defineConfig({
  base: './',
  plugins: [react()],
});
