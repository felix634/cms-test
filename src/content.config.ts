// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: "./src/content/pages" }),
  schema: z.object({
    heroHeadline: z.string(),
    heroSubhead: z.string(),
    heroButton: z.string(),
    aboutTitle: z.string(),
    aboutText: z.string(),
    aboutImage: z.string().optional(),
    menuTitle: z.string(),
    menuItems: z.array(z.object({
      name: z.string(),
      desc: z.string(),
      price: z.string(),
    })),
    reservationTitle: z.string(),
    reservationNote: z.string(),
    contactAddress: z.string(),
    contactEmail: z.string(),
    contactPhone: z.string(),
  }),
});

export const collections = { pages };