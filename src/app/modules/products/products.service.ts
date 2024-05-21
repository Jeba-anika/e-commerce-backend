import { Request, Response } from 'express'
import { IProduct } from './products.interface'
import { Product } from './products.model'

const createNewProduct = async (product: IProduct) => {
  const data = await Product.create(product)
  return data
}

const getAllProducts = (req: Request, res: Response) => {}

const getSingleProduct = (req: Request, res: Response) => {}

const updateSingleProduct = (req: Request, res: Response) => {}

const deleteProduct = (req: Request, res: Response) => {}

export const ProductService = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
}
