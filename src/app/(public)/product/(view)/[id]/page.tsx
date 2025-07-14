import { getProductById } from '@/api/products/getProductById'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { notFound } from 'next/navigation'
import ProductPanel from '../../components/product-panel/ProductPanel'
import ProductSimilarItems from '../../components/ProductSimilarItems'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(id)

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
