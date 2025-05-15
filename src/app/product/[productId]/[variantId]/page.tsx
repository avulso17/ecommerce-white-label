import { products } from '@/constants/products'
import ProductBuySection from '../../components/ProductBuySection'
import ProductDetailsSection from '../../components/ProductDetailsSection'
import ProductImageGallery from '../../components/ProductImageGallery'

type ProductPageProps = {
  params: Promise<{ productId: string; variantId: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId, variantId } = await params

  const product = products.find((p) => p.id === productId)
  const variant = product?.variants.find((v) => v.id === variantId)

  return (
    <main className='h-full px-8 py-16'>
      <p className='mb-7 text-xs'>
        product &gt; {productId} &gt; {variantId}
      </p>

      <div className='flex'>
        <ProductImageGallery
          variantId={variant?.id ?? ''}
          images={variant?.images ?? []}
        />
        <ProductDetailsSection
          details={variant?.details ?? []}
          installments={variant?.installments ?? { times: 12, value: 0 }}
          price={variant?.price ?? 0}
          sizes={variant?.sizes ?? []}
          title={product?.title ?? ''}
          variants={product?.variants ?? []}
        />
        <ProductBuySection />
      </div>
    </main>
  )
}
