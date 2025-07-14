import { getAllProducts } from '@/api/products/getAllProducts'
import ProductsCarousel from '@/components/shared/ProductsCarousel'
import Badge from '@/components/ui/Badge'

export default async function HomeProductList() {
  const products = await getAllProducts()

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
