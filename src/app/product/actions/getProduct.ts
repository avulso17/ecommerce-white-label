'use server'

import { PRODUCTS } from '@/constants/products'
import { type Product } from '@/types/products'
import { notFound } from 'next/navigation'

export async function getProduct({
  id,
  brand,
}: {
  id: string
  brand: string
}): Promise<Product> {
  const product = PRODUCTS.find((p) => p.brand === brand && p.id === id)

  if (product === undefined) {
    notFound()
  }

  return product
}
