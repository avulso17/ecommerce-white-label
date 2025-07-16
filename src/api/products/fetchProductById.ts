import { API_BASE_URL } from '@/constants/baseUrl'
import { Product } from './types'

export async function fetchProductById(id: string): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/products/${id}`)
  if (!response.ok) {
    throw new Error('Erro ao buscar o produto')
  }
  const data: Product = await response.json()
  return data
}
