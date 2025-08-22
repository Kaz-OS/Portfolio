import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const collections = {
  veille: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/veille" }),
    schema: z.object({
      title: z.string(),
      author: z.string(),
      source: z.string().url(),
      boundaries: z.array(z.string().min(5).max(26)),
      date: z.coerce.date(),
    })
  }),

  rp: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/rp" }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      skills: z.array(z.string().min(5).max(26)),
    })
  })
}

export {collections};
