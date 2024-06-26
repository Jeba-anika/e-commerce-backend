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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query
    const result = await ProductService.getAllProducts(
      searchTerm as string | undefined,
    )
    res.status(200).json({
      success: true,
      message: 'Product fetched  successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Product fetch failed!',
      error: err,
    })
  }
}

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const result = await ProductService.getSingleProduct(productId)
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Product fetch failed!',
      error: err,
    })
  }
}

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    const data = req.body
    const validatedData = ProductValidationSchema.parse(data)
    const result = await ProductService.updateSingleProduct(
      productId,
      validatedData,
    )
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Product update failed!',
      error: err,
    })
  }
}

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params

    const result = await ProductService.deleteProduct(productId)
    res.status(200).json({
      success: true,
      message: 'Product deleted  successfully!',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Product deletion failed!',
      error: err,
    })
  }
}

export const ProductController = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
}
