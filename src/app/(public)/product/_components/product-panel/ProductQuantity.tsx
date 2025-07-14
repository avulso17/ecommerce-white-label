'use client'

import Counter from '@/components/ui/Counter'

type ProductQuantityProps = {
  value?: number
  onChange?: (value: number) => void
}

export default function ProductQuantity({
  value,
  onChange,
}: ProductQuantityProps) {
  const handleChange = (value: number) => {
    if (onChange) onChange(value)
  }

  return (
    <div className='mb-10'>
      <span className='text-neutral-black-500 mb-2.5 block text-xs font-medium'>
        QUANTITY
      </span>
      <Counter min={1} value={value} onChange={handleChange} />
    </div>
  )
}
