import express from 'express'
import { ProductController } from './products.controller'

const router = express.Router()

router.post('/', ProductController.createNewProduct)
router.get('/:productId')
router.put('/:productId')
router.delete('/:productId')
router.get('/')

export const ProductRoutes = router
