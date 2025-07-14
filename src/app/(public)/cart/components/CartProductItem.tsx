import CloseIcon from '@/components/icons/Close'
import Button from '@/components/ui/Button'
import Counter from '@/components/ui/Counter'
import { PRODUCT_SIZE } from '@/constants/sizes'
import { CartItem, useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { useCallback, useState } from 'react'

type CartProductItemProps = Omit<CartItem, 'category' | 'description'>

export default function CartProductItem({
  id,
  title,
  image,
  price,
  size,
  quantity: initialQuantity,
}: CartProductItemProps) {
  const updateCartItem = useCart((state) => state.updateItem)
  const removeCartItem = useCart((state) => state.removeItem)
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleQuantity = useCallback(
    (value: number) => {
      setQuantity(value)
      updateCartItem(String(id), {
        quantity: value,
      })
    },
    [id, updateCartItem]
  )

  const handleRemove = useCallback(
    () => removeCartItem(String(id)),
    [id, removeCartItem]
  )

  return (
    <div className='flex items-center justify-between rounded'>
      <div className='flex items-center gap-8'>
        <picture className='bg-neutral-black-100 flex h-20 w-20 items-center justify-center rounded'>
          <Image
            className='h-1/2 object-contain mix-blend-multiply'
            src={image}
            alt='Product Image'
            height={62}
            width={44}
          />
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
        <Counter className='mr-4' value={quantity} onChange={handleQuantity} />
        <Button
          className='bg-neutral-white-100 hover:bg-neutral-white-200 shrink-0'
          variant='icon'
          onClick={handleRemove}
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  )
}
