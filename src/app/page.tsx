import { PRODUCTS } from '@/constants/products'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='h-full px-8 py-16'>
      <div className='flex gap-4'>
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.brand}/${product.id}`}
            className='flex cursor-pointer flex-col items-center rounded-lg border border-black/10 p-4'
          >
            <Image
              className='h-40 w-40 object-contain'
              src={product.images[0]}
              alt={product.title}
              height={174}
              width={174}
              priority
            />
            <span>{product.title}</span>
            <span>R${product.price}</span>
          </Link>
        ))}
      </div>
    </main>
  )
}
