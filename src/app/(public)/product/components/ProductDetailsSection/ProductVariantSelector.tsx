import { cn } from '@/lib/utils/cn'
import { type ProductVariant } from '@/types/products'
import Image from 'next/image'
import Link from 'next/link'

type ProductVariantSelectorProps = {
  currentId: string
  brand: string
  variants: ProductVariant[]
}

export default function ProductVariantSelector({
  currentId,
  brand,
  variants,
}: ProductVariantSelectorProps) {
  const selectedVariantName =
    variants.find((v) => v.id === currentId)?.name ?? ''

  return (
    <>
      <span className='mt-6 block text-base font-normal'>
        Cor: <b className='font-semibold capitalize'>{selectedVariantName}</b>
      </span>
      <div className='mt-2 flex items-center gap-2'>
        {variants.map((variant) => (
          <Link
            key={variant.id}
            href={`/product/${brand}/${variant.id}`}
            className={cn(
              'relative aspect-square h-10 w-10 rounded-sm bg-gray-200',
              {
                'ring-2 ring-indigo-600 ring-offset-1':
                  variant.id === currentId,
              }
            )}
          >
            <Image
              className='object-contain object-center mix-blend-multiply'
              src={variant.thumb}
              alt={variant.name}
              sizes='40px'
              fill
            />
          </Link>
        ))}
      </div>
    </>
  )
}
