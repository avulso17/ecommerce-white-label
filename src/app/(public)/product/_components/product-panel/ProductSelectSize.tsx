'use client'

import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

type Size = {
  label: string
  value: string
}

type ProductSelectSizeProps = {
  value?: string
  onChange?: (value: string) => void
  data: Size[]
}

export default function ProductSelectSize({
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
    <div className='mb-8'>
      <span className='text-neutral-black-500 mb-2.5 block text-xs font-medium'>
        SELECT SIZE
      </span>

      <div className='flex items-center gap-2'>
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
    </div>
  )
}
