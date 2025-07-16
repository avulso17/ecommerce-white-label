'use client'

import ProductsCarousel from '@/components/shared/ProductsCarousel'
import Badge from '@/components/ui/Badge'
import { useFetchProducts } from '@/hooks/useFetchProducts'

export default function HomeProductList() {
  const { data: products } = useFetchProducts()

  return (
    <section className='flex flex-col gap-12'>
      <div className='mx-auto flex items-center gap-6'>
        <Badge label='Featured' />
        <button className='text-neutral-black-500 text-sm'>Latest</button>
      </div>

      <ProductsCarousel data={products} />
    </section>
  )
}
