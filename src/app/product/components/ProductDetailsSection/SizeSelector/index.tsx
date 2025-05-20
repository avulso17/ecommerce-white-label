import { loadCookie } from '@/lib/utils/cookies'
import SelectorButton from './ProductSizeSelectorButton'

type ProductSizeSelectorProps = {
  sizes: string[]
}

export default async function ProductSizeSelector({
  sizes,
}: ProductSizeSelectorProps) {
  const sizeCookie = await loadCookie('product-size')
  const sizeValue = sizeCookie?.value
  const selectedValue = sizes.some((s) => s === sizeValue)
    ? sizeValue
    : sizes[0]

  return (
    <>
      <span className='mt-6 block text-base font-normal'>
        Tamanho: <b className='font-semibold uppercase'>{selectedValue}</b>
      </span>
      <div className='mt-2 flex items-center gap-2'>
        {sizes.map((size) => (
          <SelectorButton
            key={size}
            value={size}
            isSelected={size === selectedValue}
          >
            {size}
          </SelectorButton>
        ))}
      </div>
    </>
  )
}
