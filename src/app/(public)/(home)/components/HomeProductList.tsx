import ProductCard from '@/components/ProductCard'
import Badge from '@/components/ui/Badge'
import { PRODUCTS } from '@/constants/products'

export default function HomeProductList() {
  return (
    <section className='flex flex-col gap-12'>
      <div className='mx-auto flex items-center gap-6'>
        <Badge label='Featured' />
        <button className='text-neutral-black-500 text-sm'>Latest</button>
      </div>

      <div className='grid grid-cols-4 gap-5'>
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            href={`/product/${product.brand}/${product.id}`}
            title={product.title}
            price={product.price}
            imgUrl={product.images[0]}
          />
        ))}
      </div>
    </section>
  )
}
