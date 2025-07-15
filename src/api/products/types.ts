export type ProductRating = {
  rate: string
  count: string
}

export type Product = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: ProductRating
}

export type Products = Array<Product>
