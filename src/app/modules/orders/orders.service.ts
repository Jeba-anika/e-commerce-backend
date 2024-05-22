import { IOrder } from './orders.interface'
import { Order } from './orders.model'

const createOrder = async (order: IOrder) => {
  const result = await Order.create(order)
  return result
}

const getAllOrders = async (email: string) => {
  let result
  if (email) {
    result = await Order.find({ email })
  } else {
    result = await Order.find({})
  }
  if (result.length === 0) {
    throw new Error('Order not found')
  }
  return result
}

export const OrderService = {
  createOrder,
  getAllOrders,
}
