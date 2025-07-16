import { fetchProductById } from '@/api/products/fetchProductById'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { notFound } from 'next/navigation'
import ProductPanel from '../../_components/product-panel/ProductPanel'
import ProductSimilarItems from '../../_components/ProductSimilarItems'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await fetchProductById(id)

  if (product === undefined) {
    notFound()
  }

  return (
    <main className='px-3 pt-4 pb-36'>
      <Breadcrumb
        className='mb-7'
        prefix='Ecommerce'
        steps={[product.category, id]}
      />
      <div className='mb-44 flex flex-col'>
        <ProductPanel product={product} />
      </div>
      <ProductSimilarItems />
    </main>
  )
}
