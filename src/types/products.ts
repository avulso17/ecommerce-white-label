export type ProductInstallments = {
  times: number
  value: number
}
export type ProductSize = string
export type ProductDetail = string
export type ProductImage = string
export type ProductVariant = {
  id: string
  name: string
  thumb: string
}
export type Product = {
  id: string
  title: string
  brand: string
  name: string
  price: number
  installments: ProductInstallments
  sizes: ProductSize[]
  images: ProductImage[]
  details: ProductDetail[]
  variants: ProductVariant[]
}
