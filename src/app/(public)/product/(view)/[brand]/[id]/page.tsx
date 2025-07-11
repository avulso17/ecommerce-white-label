import { getProduct } from '../../../actions/getProduct'
import ProductBuySection from '../../../components/ProductBuySection'
import ProductDetailsSection from '../../../components/ProductDetailsSection'
import ProductImageGallery from '../../../components/ProductImageGallery'

type ProductPageProps = {
  params: Promise<{ brand: string; id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { brand, id } = await params
  const product = await getProduct({ id, brand })

  return (
    <main className='h-full px-8 py-16'>
      <p className='mb-7 text-xs'>
        product &gt; {brand} &gt; {id}
      </p>

      <div className='flex'>
        <ProductImageGallery images={product.images} />
        <ProductDetailsSection
          id={product.id}
          brand={product.brand}
          title={product.title}
          price={product.price}
          installments={product.installments}
          variants={product.variants}
          sizes={product.sizes}
          details={product.details}
        />
        <ProductBuySection />
      </div>
    </main>
  )
}
