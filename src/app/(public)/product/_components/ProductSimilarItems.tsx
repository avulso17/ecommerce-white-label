import { getAllProducts } from '@/api/products/getAllProducts'
import ProductsCarousel from '@/components/shared/ProductsCarousel'

export default async function ProductSimilarItems() {
  const products = await getAllProducts()

  if (!products) return

  return (
    <div className='flex flex-col gap-14'>
      <div>
        <h3 className='text-neutral-black-900 text-2xl font-bold'>
          You might also like
        </h3>
        <p className='text-neutral-black-300 text-xs font-medium'>
          SIMILAR PRODUCTS
        </p>
      </div>

      <ProductsCarousel data={products} />
    </div>
  )
}
