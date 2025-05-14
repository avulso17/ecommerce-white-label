import ProductBuySection from './components/ProductBuySection'
import ProductDetailsSection from './components/ProductDetailsSection'
import ProductImageGallery from './components/ProductImageGallery'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return (
    <main className='h-full px-8 py-16'>
      <p className='mb-7 text-xs'>product &gt; product0{id}</p>

      <div className='flex'>
        <ProductImageGallery id={id} />
        <ProductDetailsSection />
        <ProductBuySection />
      </div>
    </main>
  )
}
