import { cn } from '@/lib/utils/cn'
import ChevronRightIcon from '../icons/ChevronRight'

type BreadcrumbProps = {
  className?: string
  prefix?: string
  steps: string[]
}

export default function Breadcrumb({
  className,
  prefix,
  steps,
}: BreadcrumbProps) {
  return (
    <div className={cn(['flex items-center gap-1'], className)}>
      {prefix && (
        <>
          <span className='text-neutral-black-500 text-sm font-medium'>
            {prefix}
          </span>
          <ChevronRightIcon className='text-neutral-black-400 text-2xl' />
        </>
      )}
      {steps?.map((step, index) => {
        return (
          <span
            key={index}
            className='text-neutral-black-900 group flex items-center gap-1 text-sm font-medium capitalize'
          >
            {step}
            <ChevronRightIcon className='text-neutral-black-400 text-2xl group-last:hidden' />
          </span>
        )
      })}
    </div>
  )
}
