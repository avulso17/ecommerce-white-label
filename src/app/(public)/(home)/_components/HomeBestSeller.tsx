import { getAllProducts } from '@/api/products/getAllProducts'
import ProductsCarousel from '@/components/shared/ProductsCarousel'

export default async function HomeBestSeller() {
  const products = await getAllProducts()

  return (
    <section className='flex flex-col gap-20'>
      <div className='mx-auto'>
        <span className='text-neutral-black-300 text-xs font-medium'>
          SHOP NOW
        </span>
        <h2 className='text-neutral-black-900 text-2xl font-bold'>
          Best Selling
        </h2>
      </div>

      <ProductsCarousel data={products} />
    </section>
  )
}
