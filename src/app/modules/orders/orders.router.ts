import express from 'express'
import { OrderController } from './orders.controller'

const router = express.Router()

router.post('/', OrderController.createOrder)
router.get('/')

export const OrderRouter = router
