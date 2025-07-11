import { cn } from '@/lib/utils/cn'

// TODO: add severity variants
export default function Badge({
  label,
  className,
}: {
  label: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        [
          'flex h-7 items-center justify-center rounded-full px-4',
          'border-neutral-black-100 border',
        ],
        className
      )}
    >
      <span className='text-neutral-black-900 text-xs font-medium'>
        {label}
      </span>
    </div>
  )
}
