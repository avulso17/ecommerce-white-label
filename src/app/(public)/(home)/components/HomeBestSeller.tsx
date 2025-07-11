import ProductCard from '@/components/ProductCard'
import { PRODUCTS } from '@/constants/products'

export default function HomeBestSeller() {
  return (
    <section className='flex flex-col gap-20'>
      <div className='mx-auto'>
        <span className='text-neutral-black-300 text-xs font-medium'>
          SHOP NOW
        </span>
        <h3 className='text-neutral-black-900 text-2xl font-bold'>
          Best Selling
        </h3>
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
