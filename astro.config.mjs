// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify'; // 👈 CHECK THIS IMPORT

export default defineConfig({
  output: 'server', // 👈 REQUIRED for the CMS
  adapter: netlify(), // 👈 THIS IS MISSING IN YOUR ERROR
  integrations: [
    tailwind(), 
    react(), 
    keystatic()
  ],
});