import CloseIcon from '@/components/icons/Close'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import { PRODUCT_SIZE } from '@/constants/sizes'
import { CartItem } from '@/hooks/useCart'
import Image from 'next/image'

type CartProductItemProps = Omit<CartItem, 'category' | 'description'>

export default function CartProductItem({
  title,
  image,
  price,
  size,
  quantity,
}: CartProductItemProps) {
  console.log(size, 'size')
  console.log(quantity, 'quantity')

  return (
    <div className='hover:bg-neutral-white-100 flex items-center justify-between rounded transition-colors'>
      <div className='flex items-center gap-8'>
        <picture className='bg-neutral-black-100 flex h-20 w-20 items-center justify-center rounded'>
          <Image src={image} alt='Product Image' height={62} width={44} />
        </picture>

        <div className='flex flex-col gap-1.5'>
          <span className='text-neutral-black-900 max-w-72 text-sm font-medium'>
            {title}
          </span>
          <span className='text-neutral-black-500 text-xs font-medium'>
            Size: {PRODUCT_SIZE.find((p) => p.value === size)?.label}
          </span>
        </div>
      </div>

      <div className='flex items-center'>
        <span className='text-neutral-black-900 mr-8 text-sm font-medium'>
          ${price}
        </span>
        <Counter className='mr-4' value={quantity} />
        <Button className='bg-neutral-white-100 shrink-0' variant='icon'>
          <CloseIcon />
        </Button>
      </div>
    </div>
  )
}
