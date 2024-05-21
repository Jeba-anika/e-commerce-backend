import { IProduct } from './products.interface'
import { Product } from './products.model'

const createNewProduct = async (product: IProduct) => {
  const data = await Product.create(product)
  return data
}

const getAllProducts = async (searchTerm: string | undefined) => {
  let result
  if (searchTerm) {
    result = await Product.find({
      name: { $regex: new RegExp(searchTerm, 'i') },
    })
  } else {
    result = await Product.find({})
  }

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
  const result = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: data },
    { new: true },
  )
  return result
}

const deleteProduct = async (productId: string) => {
  const result = await Product.findOneAndDelete(
    { _id: productId },
    { new: true },
  )
  return result
}

export const ProductService = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
}
