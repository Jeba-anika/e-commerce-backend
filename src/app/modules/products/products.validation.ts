import { z } from 'zod'

const ProductVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
})
const ProductInventorySchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
})
export const ProductValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(ProductVariantSchema),
  inventory: ProductInventorySchema,
})
