'use client'

import { Product } from '@/api/products/types'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from './ProductCard'

type ProductsCarouselProps = {
  data: Product[] | undefined
}

export default function ProductsCarousel({ data }: ProductsCarouselProps) {
  const [emblaRef] = useEmblaCarousel()

  if (!data) return

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex'>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            href={`/product/${product.id}`}
            title={product.title}
            price={product.price}
            imgUrl={product.image}
            className='mr-5 min-w-0 flex-[0_0_25%]'
          />
        ))}
      </div>
    </div>
  )
}
