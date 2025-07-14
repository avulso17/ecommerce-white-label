'use client'

import { useDotButton } from '@/hooks/useDotButton'
import { cn } from '@/lib/utils/cn'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

export default function ProductImageCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <div className='relative flex max-w-[33.375rem] grow flex-col'>
      <div className='grow overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {images.map((src, index) => (
            <picture
              key={index}
              className='bg-neutral-white-100 relative h-[35.875rem] min-w-0 flex-[0_0_100%] rounded-md pt-8'
            >
              <Image
                className='mx-auto object-contain mix-blend-multiply'
                src={src}
                alt='Image Alt'
                height={404}
                width={288}
              />
            </picture>
          ))}
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 z-10 flex -translate-1/2 items-center gap-2'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn('bg-neutral-black-200 h-2 w-2 rounded-full', {
              'bg-neutral-black-900': index === selectedIndex,
            })}
          />
        ))}
      </div>
    </div>
  )
}
