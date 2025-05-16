'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import ProductImageSelector from './ProductImageSelector'

type ProductImageGalleryProps = {
  images: string[]
}

export default function ProductImageGallery({
  images,
}: ProductImageGalleryProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0)

  const handleClick = useCallback((index: number) => {
    setActiveImgIndex(index)
  }, [])

  return (
    <section className='mr-6 flex flex-col gap-6'>
      <Image
        src={images[activeImgIndex]}
        alt='Product Image'
        className='aspect-square w-[35vw] rounded-lg bg-gray-100 object-contain'
        width={530}
        height={530}
        priority
      />

      <div className='flex items-center justify-between gap-6'>
        {images.map((src, index) => (
          <ProductImageSelector
            key={index}
            src={src}
            isSelected={index === activeImgIndex}
            onSelectChange={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  )
}
