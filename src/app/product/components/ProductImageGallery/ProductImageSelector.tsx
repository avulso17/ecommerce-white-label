import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

type ProductImageSelectorProps = {
  src: string
  name: string
  isSelected?: boolean
  onSelectChange?: () => void
}

export default function ProductImageSelector({
  src,
  name,
  isSelected,
  onSelectChange,
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
        src={src}
        alt={name}
        sizes='5vw'
        fill
      />
    </button>
  )
}
