import { Product } from '@/api/products/types'
import ProductDetails from './details/ProductDetails'
import ProductDescription from './ProductDescription'
import ProductImageCarousel from './ProductImageCarousel'

type ProductPanelProps = {
  product: Product
}

export default function ProductPanel({ product }: ProductPanelProps) {
  return (
    <div className='flex flex-col gap-44'>
      <div className='flex gap-28'>
        <ProductImageCarousel
          images={[product.image, product.image, product.image, product.image]}
        />
        <ProductDetails product={product} />
      </div>
      <ProductDescription />
    </div>
  )
}
