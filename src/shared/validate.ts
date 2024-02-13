import { z } from 'zod'

export const TicketSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  image: z.string(),
  description: z.string(),
  price: z.object({
    full: z.number(),
    discount: z.number(),
  }),
  rating: z.object({
    reviewsCount: z.number(),
    value: z.number(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
})
