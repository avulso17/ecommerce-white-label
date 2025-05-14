'use client'

import Image from 'next/image'
import { useState } from 'react'
import ProductImageSelector from './ProductImageSelector'

const images = [1, 2, 3, 4, 5]

export default function ProductImageGallery({ id }: { id: string }) {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className='mr-6 flex flex-col gap-6'>
      <Image
        src={`/products/${id}/image0${activeIndex}.jpg`}
        alt='Product Image'
        className='aspect-square w-[35vw] rounded-lg bg-gray-100 object-contain'
        width={530}
        height={530}
        priority
      />

      <div className='flex items-center justify-between gap-6'>
        {images.map((img) => (
          <ProductImageSelector
            key={img}
            index={img}
            id={id}
            isSelected={img === activeIndex}
            onSelectChange={() => handleClick(img)}
          />
        ))}
      </div>
    </section>
  )
}
