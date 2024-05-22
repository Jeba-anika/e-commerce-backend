import { Schema, model } from 'mongoose'
import { IProduct } from '../products/products.interface'
import { Product } from '../products/products.model'
import { IOrder } from './orders.interface'

const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: [true, 'Email is required!'] },
  productId: { type: String, required: [true, 'Product Id is required!'] },
  price: { type: Number, required: [true, 'Price is required!'] },
  quantity: { type: Number, required: [true, 'Quantity is required!'] },
})

OrderSchema.pre('save', async function (next) {
  const { productId, quantity } = this
  const isProductExists: IProduct | null = await Product.findOne({
    _id: productId,
  })
  if (isProductExists) {
    if (
      isProductExists.inventory.quantity === 0 &&
      !isProductExists.inventory.inStock
    ) {
      throw new Error('The product is not in stock!')
    }
    if (isProductExists.inventory.quantity < quantity) {
      throw new Error('Insufficient quantity available in inventory')
    }
  }
  if (!isProductExists) {
    throw new Error('Product does not exist!')
  }
  if (isProductExists?.price !== this.price) {
    throw new Error('There is a price mismatch')
  }
  next()
})

OrderSchema.post('save', async function (doc) {
  const { productId, quantity } = doc
  const product = await Product.findOneAndUpdate(
    { _id: productId },
    {
      $inc: { 'inventory.quantity': -quantity },
    },
    { new: true },
  )
  if (product?.inventory.quantity === 0) {
    product.inventory.inStock = false
    await product.save()
  }
})

export const Order = model<IOrder>('Order', OrderSchema)
