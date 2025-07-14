'use client'

import { useCart } from '@/hooks/useCart'
import CartProductItem from './CartProductItem'

export default function CartList() {
  const items = useCart((state) => state.items)

  if (items.length < 1) {
    return <span>sem items no carrinho</span>
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
