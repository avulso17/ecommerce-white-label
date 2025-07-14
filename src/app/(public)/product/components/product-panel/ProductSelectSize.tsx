'use client'

import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

type Size = {
  label: string
  value: string
}

type ProductSelectSizeProps = {
  className?: string
  value?: string
  onChange?: (value: string) => void
  data: Size[]
}

export default function ProductSelectSize({
  className,
  value,
  onChange,
  data,
}: ProductSelectSizeProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    value ?? data[0].value
  )

  const currentValue = value !== undefined ? value : selectedValue

  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue)
    } else {
      setSelectedValue(newValue)
    }
  }

  return (
    <div className={cn(['flex items-center gap-2'], className)}>
      {data.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleChange(item.value)}
          className={cn('border-neutral-black-100 border focus:ring-0', {
            'border-neutral-black-900 text-neutral-black-900':
              currentValue === item.value,
          })}
          variant='icon'
        >
          <span className='text-xs'>{item.label}</span>
        </Button>
      ))}
    </div>
  )
}
