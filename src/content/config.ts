import { defineCollection, z } from 'astro:content';

const lessonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
  }),
});

export const collections = {
  lessons: lessonsCollection,
};
