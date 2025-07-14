'use client'

import MinusIcon from '@/components/icons/Minus'
import PlusIcon from '@/components/icons/Plus'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

type ProductQuantityProps = {
  className?: string
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
}

export default function ProductQuantity({
  className,
  value,
  onChange,
  min = 1,
  max = 99,
}: ProductQuantityProps) {
  const [internalValue, setInternalValue] = useState<number>(value ?? min)

  const currentValue = value !== undefined ? value : internalValue

  const handleChange = (newValue: number) => {
    if (onChange) {
      onChange(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  const handleDecrease = () => {
    if (currentValue > min) {
      handleChange(currentValue - 1)
    }
  }

  const handleIncrease = () => {
    if (currentValue < max) {
      handleChange(currentValue + 1)
    }
  }

  return (
    <div
      className={cn(
        [
          'border-neutral-black-100 rounded-md border',
          'flex w-full max-w-40 items-center',
        ],
        className
      )}
    >
      <Button
        variant='icon'
        onClick={handleDecrease}
        disabled={currentValue <= min}
      >
        <MinusIcon />
      </Button>
      <span className='grow text-center select-none'>{currentValue}</span>
      <Button
        variant='icon'
        onClick={handleIncrease}
        disabled={currentValue >= max}
      >
        <PlusIcon />
      </Button>
    </div>
  )
}
