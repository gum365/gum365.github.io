import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({
    base: './knowledge/okf',
    pattern: '{fr-CA,en-CA}/**/*.md',
  }),
  schema: z.object({
    type: z.literal('page'),
    id: z.string(),
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    language: z.enum(['fr-CA', 'en-CA']),
    source_of_truth: z.boolean(),
    translation_key: z.string(),
    translation_of: z.string().optional(),
    translation_status: z.enum(['source', 'draft', 'reviewed', 'validated']),
    updated: z.string(),
    nav_label: z.string(),
    nav_order: z.number(),
    hero_eyebrow: z.string(),
    hero_title: z.string(),
    hero_lead: z.string(),
    primary_label: z.string().optional(),
    primary_url: z.string().optional(),
    secondary_label: z.string().optional(),
    secondary_url: z.string().optional(),
  }),
});

export const collections = { pages };
