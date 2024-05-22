import { Request, Response } from 'express'
import { OrderService } from './orders.service'
import { OrderValidationSchema } from './orders.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const validatedOrder = OrderValidationSchema.parse(data)
    const result = await OrderService.createOrder(validatedOrder)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    })
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    const result = await OrderService.getAllOrders(email as string)
    res.status(200).json({
      status: 200,
      message: email
        ? 'Orders fetched successfully!'
        : 'Orders fetched successfully for user email!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
    })
  }
}

export const OrderController = {
  createOrder,
  getAllOrders,
}
