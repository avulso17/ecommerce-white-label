import api from '@/lib/api'
import { Products } from './types'

export async function getAllProducts(): Promise<Products> {
  const response = await api.get('/products')
  return response.data
}
