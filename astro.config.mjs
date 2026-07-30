import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // 'static' ya soporta páginas on-demand vía `export const prerender = false`
  // (el modo 'hybrid' se eliminó en Astro 5+, se fusionó con 'static').
  output: 'static',
  adapter: vercel(),
})
