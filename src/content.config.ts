import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const proyectos = defineCollection({
  loader: glob({ base: './src/content/proyectos', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    ubicacion: z.string(),
    categoria: z.string(),
    coverImage: z.string(),
    gallery: z.array(z.string()).optional(),
    description: z.string(),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { blog, proyectos };
