import { Product } from '@/api/products/types'
import ShareIcon from '@/components/icons/Share'
import StarIcon from '@/components/icons/Star'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import ProductDetailsForm from './ProductDetailsForm'

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className='relative flex max-w-[33.375rem] grow flex-col'>
      <div className='mb-3 flex justify-between gap-3'>
        <span className='text-neutral-black-900 text-2xl font-bold'>
          {product.title}
        </span>
        <Button className='shrink-0' size='sm' variant='icon'>
          <ShareIcon />
        </Button>
      </div>
      <div className='mb-6 flex items-center gap-2'>
        <Badge
          variant='filled'
          label={
            <span className='flex items-center gap-1'>
              <StarIcon className='text-neutral-black-500 text-2xl' />
              <span>4.2 — 54 Reviews</span>
            </span>
          }
        />
        <Badge label='IN STOCK' />
      </div>
      <span className='text-neutral-black-900 mb-8 text-xl font-semibold'>
        ${product.price}
      </span>
      <ProductDetailsForm item={product} />
      <span className='text-neutral-black-500 text-xs font-medium'>
        — Free shipping on orders $100+
      </span>
    </div>
  )
}
