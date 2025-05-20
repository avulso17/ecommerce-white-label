'use client'

import { cn } from '@/lib/utils/cn'
import { createCookie } from '@/lib/utils/cookies'

type ProductSizeSelectorButtonProps = {
  children: React.ReactNode
  value: string
  isSelected?: boolean
}

export default function ProductSizeSelectorButton({
  children,
  isSelected,
  value,
}: ProductSizeSelectorButtonProps) {
  const handleClick = () => {
    createCookie('product-size', value)
  }

  return (
    <button
      className={cn(
        'grid aspect-square w-10 place-items-center rounded-sm bg-gray-200 text-sm font-semibold',
        {
          'ring-2 ring-indigo-600 ring-offset-1': isSelected === true,
        }
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
