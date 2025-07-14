import { Product } from '@/api/products/types'

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className='relative flex max-w-[33.375rem] grow flex-col'>
      <div>
        <span>title</span>
        <button>share</button>
      </div>

      <div>rating</div>

      <span>price</span>

      <div>colors</div>

      <div>size</div>

      <div>quantity</div>

      <div>
        <div className='flex items-center'>
          <button>Add to cart</button>
          <button>favorite</button>
        </div>

        <span>— Free shipping on orders $100+</span>
      </div>
    </div>
  )
}
