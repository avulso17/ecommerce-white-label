'use client'

import CartIcon from '@/components/icons/Cart'
import Button from '@/components/ui/Button'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils/cn'
import Link from 'next/link'

export default function NavbarCartButton() {
  const cartItems = useCart((state) => state.items)
  const hasCartItems = cartItems.length > 0

  return (
    <Link href='/cart'>
      <Button variant='icon' className='text-neutral-black-900'>
        <CartIcon />
        {hasCartItems && (
          <span
            className={cn([
              'flex items-center justify-center',
              'h-4 w-4 rounded-full bg-red-900',
              'text-neutral-white-100 text-[0.625rem]',
              'absolute -top-1 -right-1',
            ])}
          >
            {cartItems.length}
          </span>
        )}
      </Button>
    </Link>
  )
}
