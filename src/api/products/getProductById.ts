import api from '@/lib/api'
import { Product } from './types'

export async function getProductById(id: string): Promise<Product> {
  const response = await api.get(`/products/${id}`)
  return response.data
}
