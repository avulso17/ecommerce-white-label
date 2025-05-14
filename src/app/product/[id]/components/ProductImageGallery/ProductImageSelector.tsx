import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

type ProductImageSelectorProps = {
  index: number
  isSelected?: boolean
  onSelectChange?: () => void
  id: string
}

export default function ProductImageSelector({
  index,
  isSelected,
  onSelectChange,
  id,
}: ProductImageSelectorProps) {
  return (
    <button
      onClick={onSelectChange && onSelectChange}
      className={cn('relative h-24 w-full rounded-md bg-gray-100', {
        'ring-2 ring-indigo-600 ring-offset-2': isSelected === true,
      })}
    >
      <Image
        className='h-full w-full object-contain'
        src={`/products/${id}/image0${index}.jpg`}
        alt={`Product Image 0${index}`}
        fill
        sizes='5vw'
      />
    </button>
  )
}
