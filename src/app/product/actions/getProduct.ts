'use server'

import { BASE_URL } from '@/constants/baseUrl'
import { type Product } from '@/types/products'
import { notFound } from 'next/navigation'

export async function getProduct({
  id,
  brand,
}: {
  id: string
  brand: string
}): Promise<Product> {
  const res = await fetch(`${BASE_URL}/api/product/${brand}/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}
