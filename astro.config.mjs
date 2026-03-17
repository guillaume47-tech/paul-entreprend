// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://paul-entreprend.fr',
  output: 'static',
  adapter: cloudflare(),
  integrations: [mdx(), react(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
