'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import ProductImageSelector from './ProductImageSelector'

type ProductImageGalleryProps = {
  variantId: string
  images: string[]
}

export default function ProductImageGallery({
  variantId,
  images,
}: ProductImageGalleryProps) {
  const [activeImg, setActiveImg] = useState(images[0])

  const handleClick = useCallback((src: string) => {
    setActiveImg(src)
  }, [])

  return (
    <section className='mr-6 flex flex-col gap-6'>
      <Image
        src={activeImg}
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
            name={variantId}
            isSelected={src === activeImg}
            onSelectChange={() => handleClick(src)}
          />
        ))}
      </div>
    </section>
  )
}
