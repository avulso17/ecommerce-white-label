'use client'

import CartIcon from '@/components/icons/Cart'
import { useCart } from '@/hooks/useCart'
import CartProductItem from './CartProductItem'

export default function CartList() {
  const items = useCart((state) => state.items)

  if (items.length < 1) {
    return (
      <section className='flex flex-col items-center gap-6 pt-4'>
        <CartIcon className='text-4xl' />
        <div className='flex flex-col items-center gap-2'>
          <h4 className='text-neutral-black-900 text-lg font-semibold'>
            Your cart is empty
          </h4>
          <span className='text-neutral-black-500 text-sm'>
            Explore our products and add items to your cart
          </span>
        </div>
      </section>
    )
  }

  console.log(items)

  return (
    <div className='flex flex-col gap-10'>
      {items.map((item) => (
        <CartProductItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          size={item.size}
          quantity={item.quantity}
        />
      ))}
    </div>
  )
}
