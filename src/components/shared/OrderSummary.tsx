'use client'

import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils/cn'
import { useMemo } from 'react'
import Separator from '../ui/Separator'

type OrderSummaryProps = {
  className?: string
}

export default function OrderSumarry({ className }: OrderSummaryProps) {
  const cartItems = useCart((state) => state.items)

  const taxPrice = 10
  const subtotalPrice = useMemo(
    () =>
      cartItems.reduce((acc, { price, quantity }) => acc + price * quantity, 0),
    [cartItems]
  )
  const shippingPrice = useMemo(
    () => (subtotalPrice >= 100 ? 0 : 32),
    [subtotalPrice]
  )
  const totalPrice = useMemo(
    () => subtotalPrice + taxPrice + shippingPrice,
    [shippingPrice, subtotalPrice]
  )

  return (
    <section className={cn('flex flex-col gap-6', className)}>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Subtotal</span>
          <span className='text-neutral-black-900'>
            $ {subtotalPrice.toFixed(1)}
          </span>
        </div>

        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Shipping:</span>
          <span className='text-neutral-black-900'>
            {shippingPrice <= 0 ? 'Free' : `$ ${shippingPrice.toFixed(1)}`}
          </span>
        </div>

        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Tax:</span>
          <span className='text-neutral-black-900'>
            $ {taxPrice.toFixed(1)}
          </span>
        </div>
      </div>

      <Separator />

      <div className='text-neutral-black-900 flex items-center justify-between text-sm font-medium'>
        <span>Total</span>
        <span>$ {totalPrice.toFixed(1)}</span>
      </div>
    </section>
  )
}
