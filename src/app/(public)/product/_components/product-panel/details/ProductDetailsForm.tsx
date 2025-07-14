'use client'

import { Product } from '@/api/products/types'
import HeartIcon from '@/components/icons/HeartOutline'
import Button from '@/components/ui/Button'
import { PRODUCT_SIZE } from '@/constants/sizes'
import { useCart } from '@/hooks/useCart'
import { useCallback, useMemo, useState } from 'react'
import ProductQuantity from '../ProductQuantity'
import ProductSelectSize from '../ProductSelectSize'

export default function ProductDetailsForm({ item }: { item: Product }) {
  const removeCartItem = useCart((state) => state.removeItem)
  const addCartItem = useCart((state) => state.addItem)
  const cartItems = useCart((state) => state.items)
  const [size, setSize] = useState(PRODUCT_SIZE[0].value)
  const [quantity, setQuantity] = useState(1)

  const inCart = useMemo(
    () => cartItems.some((p) => p.id === item.id),
    [cartItems, item.id]
  )

  const handleAddItem = useCallback(() => {
    if (inCart) {
      removeCartItem(String(item.id))
      return
    }

    addCartItem({
      ...item,
      quantity,
      size,
    })
  }, [addCartItem, inCart, item, quantity, removeCartItem, size])

  return (
    <>
      <ProductSelectSize
        data={PRODUCT_SIZE}
        value={size}
        onChange={(value) => setSize(value)}
      />
      <ProductQuantity
        value={quantity}
        onChange={(value) => setQuantity(value)}
      />

      <div className='mb-3 flex items-center gap-4'>
        <Button className='grow' onClick={handleAddItem}>
          {inCart ? 'Remove from cart' : 'Add to cart'}
        </Button>
        <Button variant='icon' className='shrink-0'>
          <HeartIcon />
        </Button>
      </div>
    </>
  )
}
