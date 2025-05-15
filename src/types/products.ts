export type ProductVariantInstallments = {
  times: number
  value: number
}
export type ProductVariantSize = string
export type ProductVariantDetail = string
export type ProductVariantImage = string

export type ProductVariant = {
  id: string
  name: string
  price: number
  installments: ProductVariantInstallments
  sizes: ProductVariantSize[]
  details: ProductVariantDetail[]
  images: ProductVariantImage[]
}

export type Product = {
  id: string
  title: string
  variants: ProductVariant[]
}
