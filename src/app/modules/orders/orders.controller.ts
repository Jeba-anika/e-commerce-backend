import { Request, Response } from 'express'

const createOrder = async (req: Request, res: Response) => {}

const getAllOrders = async (req: Response, res: Response) => {}

export const OrderController = {
  createOrder,
  getAllOrders,
}
