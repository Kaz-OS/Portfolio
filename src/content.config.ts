import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const veille = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/veille" }),
  schema: z.object({
    title: z.string().min(26).max(100),
    author: z.string().min(3).max(56),
    source: z.string().url(),
    boundaries: z.array(z.string().min(5).max(26)),
    date: z.coerce.date(),
  })
});

export const collections = { veille };