import { Schema, model } from 'mongoose'
import { Product } from '../products/products.model'
import { IOrder } from './orders.interface'

const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: [true, 'Email is required!'] },
  productId: { type: String, required: [true, 'Product Id is required!'] },
  price: { type: Number, required: [true, 'Price is required!'] },
  quantity: { type: Number, required: [true, 'Quantity is required!'] },
})

OrderSchema.pre('save', async function (next) {
  const { productId } = this
  const isProductExists: IOrder | null = await Product.findOne({
    _id: productId,
  })
  if (!isProductExists) {
    throw new Error('Product does not exist!')
  }
  if (isProductExists?.price !== this.price) {
    throw new Error('There is a price mismatch')
  }

  next()
})

export const Order = model<IOrder>('Order', OrderSchema)
