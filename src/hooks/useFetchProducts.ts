import { getAllProducts } from '@/api/products/getAllProducts'
import { useQuery } from '@tanstack/react-query'

export function useFetchProducts() {
  return useQuery({ queryKey: ['products'], queryFn: getAllProducts })
}
