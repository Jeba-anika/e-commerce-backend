import { Request, Response } from 'express'
import { ProductService } from './products.service'
import { ProductValidationSchema } from './products.validation'

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const validatedData = ProductValidationSchema.parse(data)
    const result = await ProductService.createNewProduct(validatedData)
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Product creation failed!',
      error: err,
    })
  }
}

const getAllProducts = (req: Request, res: Response) => {}

const getSingleProduct = (req: Request, res: Response) => {}

const updateSingleProduct = (req: Request, res: Response) => {}

const deleteProduct = (req: Request, res: Response) => {}

export const ProductController = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
}
