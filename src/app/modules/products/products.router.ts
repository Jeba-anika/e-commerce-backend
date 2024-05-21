import express from 'express'
import { ProductController } from './products.controller'

const router = express.Router()

router.post('/', ProductController.createNewProduct)
router.get('/:productId', ProductController.getSingleProduct)
router.put('/:productId', ProductController.updateSingleProduct)
router.delete('/:productId', ProductController.deleteProduct)
router.get('/', ProductController.getAllProducts)

export const ProductRoutes = router
