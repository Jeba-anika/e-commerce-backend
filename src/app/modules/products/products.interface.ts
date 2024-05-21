export type IProductVariant = {
  type: string
  value: string
}

export type IProductInventory = {
  quantity: number
  inStock: boolean
}

export type IProduct = {
  name: string
  description: string
  price: number
  category: string
  tags: string[]
  variants: IProductVariant[]
  inventory: IProductInventory
}
