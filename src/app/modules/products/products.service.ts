import { Request, Response } from 'express'
import { IProduct } from './products.interface'
import { Product } from './products.model'

const createNewProduct = async (product: IProduct) => {
  const data = await Product.create(product)
  return data
}

const getAllProducts = async () => {
  const result = await Product.find({})
  return result
}

const getSingleProduct = async (productId: string) => {
  const result = await Product.findOne({ _id: productId })
  return result
}

const updateSingleProduct = async (
  productId: string,
  data: Partial<IProduct>,
) => {
  const result = await Product.updateOne({ _id: productId }, { $set: data })
  return result
}

const deleteProduct = (req: Request, res: Response) => {}

export const ProductService = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
}
