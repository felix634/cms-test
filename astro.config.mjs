// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind(), 
    react(), 
    keystatic() // 👈 The magic line
  ],
});