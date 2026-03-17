import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    cluster: z.string(),
    keywords: z.array(z.string()).default([]),
    cta: z.enum(['legalplace', 'legalstart', 'shine', 'qonto', 'indy', 'dougs', 'sedomicilier', 'captaincontrat']).optional(),
    noelScore: z.number().min(0).max(7).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
