import { Schema, model } from 'mongoose'
import {
  IProduct,
  IProductInventory,
  IProductVariant,
} from './products.interface'

const VariantSchema = new Schema<IProductVariant>({
  type: { type: String, required: [true, 'Product variant type is required!'] },
  value: {
    type: String,
    required: [true, 'Product variant value is required!'],
  },
})

const InventorySchema = new Schema<IProductInventory>({
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required!'],
    min: [0, 'Quantity can not be less than 0!'],
  },
  inStock: { type: Boolean, required: [true, 'Product inStock is required!'] },
})

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: [true, 'Product name is required!'] },
  description: {
    type: String,
    required: [true, 'Product description is required!'],
  },
  category: { type: String, required: [true, 'Product category is required!'] },
  price: { type: Number, required: [true, 'Product price is required!'] },
  variants: {
    type: [VariantSchema],
    required: [true, 'Product variant is required!'],
  },
  tags: {
    type: [String],
    required: [true, 'Product variant is required!'],
  },
  inventory: {
    type: InventorySchema,
    required: [true, 'Product inventory is required!'],
  },
})

export const Product = model<IProduct>('Product', ProductSchema)
