import { cn } from '@/lib/utils/cn'
import Image from 'next/image'

type ProductImageSelectorProps = {
  src: string
  isSelected?: boolean
  onSelectChange?: () => void
}

export default function ProductImageSelector({
  src,
  isSelected,
  onSelectChange,
}: ProductImageSelectorProps) {
  return (
    <button
      onClick={onSelectChange && onSelectChange}
      className={cn('relative h-16 w-full rounded-md bg-gray-100', {
        'ring-2 ring-indigo-600 ring-offset-2': isSelected === true,
      })}
    >
      <Image
        className='h-full w-full object-contain mix-blend-multiply'
        src={src}
        alt='Product Image'
        sizes='5vw'
        fill
      />
    </button>
  )
}
