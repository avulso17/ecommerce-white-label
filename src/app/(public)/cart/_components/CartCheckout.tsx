'use client'

import Button from '@/components/ui/Button'
import Separator from '@/components/ui/Separator'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export default function CartCheckout() {
  const cartItems = useCart((state) => state.items)

  const subtotalPrice = cartItems.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  )
  const shippingPrice = subtotalPrice >= 100 ? 0 : 32
  const taxPrice = 10
  const totalPrice = subtotalPrice + taxPrice + shippingPrice

  return (
    <section className='border-neutral-black-100 h-fit max-w-[21.25rem] shrink-0 grow rounded border px-6 pt-8 pb-5'>
      <h3 className='text-neutral-black-900 mb-10 text-base font-semibold'>
        Order Summary
      </h3>

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

      <Separator className='my-6' />

      <div className='text-neutral-black-900 mb-8 flex items-center justify-between text-sm font-medium'>
        <span>Total</span>
        <span>$ {totalPrice.toFixed(1)}</span>
      </div>

      <div className='flex flex-col gap-2'>
        <Button size='sm' block disabled={cartItems.length === 0}>
          Checkout
        </Button>
        <Link href='/'>
          <Button className='underline' variant='text' size='xs' block>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </section>
  )
}
