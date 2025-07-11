import { cn } from '@/lib/utils/cn'
import Image from 'next/image'
import Link from 'next/link'
import Badge from './ui/Badge'

type ProductCardProps = {
  href: string
  title: string
  price: number
  imgUrl: string
}

export default function ProductCard({
  href,
  title,
  price,
  imgUrl,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn([
        'flex cursor-pointer flex-col gap-6 rounded-lg px-2 py-4 transition-colors',
        'hover:bg-neutral-white-200',
      ])}
    >
      <picture className='bg-neutral-white-100 h-[19.5rem] w-full overflow-hidden rounded'>
        <Image
          className='h-full w-full object-contain mix-blend-multiply'
          src={imgUrl}
          alt={title}
          height={174}
          width={174}
          priority
        />
      </picture>

      <div className='flex flex-col gap-3'>
        <span className='w-full overflow-hidden text-sm text-ellipsis whitespace-nowrap text-neutral-900'>
          {title}
        </span>

        <div className='flex items-center gap-4'>
          <Badge label='IN STOCK' />
          <span className='text-neutral-black-600 text-sm'>R$ {price}</span>
        </div>
      </div>
    </Link>
  )
}
