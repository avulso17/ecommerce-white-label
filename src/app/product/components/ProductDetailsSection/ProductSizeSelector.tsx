'use client'

import { cn } from '@/lib/utils/cn'
import { useCallback, useState } from 'react'

type ProductSizeSelectorProps = {
  sizes: string[]
}

export default function ProductSizeSelector({
  sizes,
}: ProductSizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  const handleClick = useCallback((size: string) => {
    setSelectedSize(size)
  }, [])

  return (
    <>
      <span className='mt-6 block text-base font-normal'>
        Tamanho: <b className='font-semibold uppercase'>{selectedSize}</b>
      </span>
      <div className='mt-2 flex items-center gap-2'>
        {sizes.map((size) => (
          <button
            key={size}
            className={cn(
              'grid aspect-square w-10 place-items-center rounded-sm bg-gray-200 text-sm font-semibold',
              {
                'ring-2 ring-indigo-600 ring-offset-1': size === selectedSize,
              }
            )}
            onClick={() => handleClick(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  )
}
