'use client'

import OrderSumarry from '@/components/shared/OrderSummary'
import Button from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function CheckoutOrderDetail() {
  const router = useRouter()
  const cartItems = useCart((state) => state.items)
  const hasCartItems = cartItems.length > 0

  return (
    <section className='w-full max-w-[23.25rem] shrink-0 py-4'>
      <h3 className='text-neutral-black-900 mb-16 text-base font-semibold'>
        Your Order
      </h3>

      {hasCartItems ? (
        <div className='mb-16 flex items-center justify-between gap-2.5'>
          <div className='flex items-center gap-3 overflow-hidden'>
            {cartItems.map((item) => (
              <picture
                key={item.id}
                className='bg-neutral-white-100 grid h-10 w-10 place-items-center rounded-full'
              >
                <Image
                  className='h-1/2 object-contain mix-blend-multiply'
                  src={item.image}
                  alt={item.title}
                  height={34}
                  width={24}
                />
              </picture>
            ))}
          </div>
          <Button size='sm' variant='outline' onClick={() => router.back()}>
            Edit Cart
          </Button>
        </div>
      ) : (
        <span className='mb-16 block text-center text-sm'>Cart is empty!</span>
      )}

      <OrderSumarry className='mb-6' />

      <Button size='sm' block disabled={!hasCartItems}>
        Place Order
      </Button>
    </section>
  )
}
