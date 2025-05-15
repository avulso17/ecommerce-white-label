import { products } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-full px-8 py-16'>
      <div className='flex gap-4'>
        {products.map((product) =>
          product.variants.map((variant) => (
            <Link
              key={variant.id}
              href={`/product/${product.id}/${variant.id}`}
              className='flex cursor-pointer flex-col items-center rounded-lg border border-black/10 p-4'
            >
              <Image
                className='h-40 w-40 object-contain'
                src={variant.images[0]}
                alt={product.title}
                height={174}
                width={174}
              />
              <span>{product.title}</span>
              <span>R${variant.price}</span>
            </Link>
          ))
        )}
      </div>
    </main>
  )
}
