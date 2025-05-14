import { cn } from '@/lib/utils/cn'
import { forwardRef, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  className?: string
  containerClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, containerClassName, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1', containerClassName)}>
        <input
          ref={ref}
          className={cn(
            [
              'border-gray-300 transition-colors outline-none',
              'w-ful h-10 rounded-md border px-3 py-2 text-sm',
              'focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600',
            ],
            {
              'border-red-500 focus:border-red-500 focus:ring-red-500': error,
            },
            className
          )}
          {...props}
        />
        {error && <span className='text-xs text-red-500'>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
