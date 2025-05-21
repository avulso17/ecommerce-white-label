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
    <section className='mr-6 flex w-[35vw] max-w-[478px] min-w-[400px] grow flex-col gap-5'>
      <figure className='relative aspect-square w-full rounded-lg bg-gray-100'>
        <Image
          src={images[activeImgIndex]}
          alt='Product Image'
          className='aspect-square w-full rounded-lg object-contain mix-blend-multiply'
          width={530}
          height={530}
          priority
        />
      </figure>

      <div className='flex items-center justify-between gap-5'>
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
