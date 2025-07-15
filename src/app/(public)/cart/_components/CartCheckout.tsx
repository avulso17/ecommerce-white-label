'use client'

import OrderSumarry from '@/components/shared/OrderSummary'
import Button from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CartCheckout() {
  const router = useRouter()
  const cartItems = useCart((state) => state.items)

  const handleCheckoutClick = () => {
    if (cartItems.length === 0) return
    router.push('/checkout')
  }

  return (
    <section className='border-neutral-black-100 h-fit w-full max-w-[21.25rem] shrink-0 rounded border px-6 pt-8 pb-5'>
      <h3 className='text-neutral-black-900 mb-10 text-base font-semibold'>
        Order Summary
      </h3>

      <OrderSumarry className='mb-8' />

      <div className='flex flex-col gap-2'>
        <Button
          block
          size='sm'
          onClick={handleCheckoutClick}
          disabled={cartItems.length === 0}
        >
          Checkout
        </Button>
        <Link href='/'>
          <Button block className='underline' size='xs' variant='text'>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </section>
  )
}
