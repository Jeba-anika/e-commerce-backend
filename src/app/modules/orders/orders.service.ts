import { IOrder } from './orders.interface'
import { Order } from './orders.model'

const createOrder = async (order: IOrder) => {
  const result = await Order.create(order)
  return result
}

const getAllOrders = async () => {}

export const OrderService = {
  createOrder,
  getAllOrders,
}
