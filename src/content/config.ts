import { defineCollection, z } from "astro:content";

const newsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        heroImage: z.string().optional()
    })
})

export const collections = {
    news: newsCollection,
}