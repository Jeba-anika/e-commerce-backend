import { Schema, model } from 'mongoose'
import { IOrder } from './orders.interface'

const OrderSchema = new Schema<IOrder>({
  email: { type: String, required: [true, 'Email is required!'] },
  productId: { type: String, required: [true, 'Product Id is required!'] },
  price: { type: Number, required: [true, 'Price is required!'] },
  quantity: { type: Number, required: [true, 'Quantity is required!'] },
})

export const Order = model<IOrder>('Order', OrderSchema)
