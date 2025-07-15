import { cn } from '@/lib/utils/cn'
import { forwardRef } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  className?: string
  containerClassName?: string
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      id,
      error,
      className,
      containerClassName,
      leftAddon,
      rightAddon,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col', containerClassName)}>
        {label && (
          <label
            htmlFor={id}
            className={cn(['text-neutral-black-600 text-sm font-medium'], {
              'text-red-900': error,
            })}
          >
            {label}
          </label>
        )}
        <div className='relative mb-1 flex items-center'>
          {leftAddon && (
            <span className='text-neutral-black-300 absolute left-3 text-2xl'>
              {leftAddon}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            className={cn(
              [
                'border-neutral-black-100 transition-colors outline-none',
                'h-10 w-full rounded-md border px-3 py-2 text-sm',
                'focus:border-neutral-black-900 focus:ring-neutral-black-900 focus:ring-1',
              ],
              {
                'border-red-900 bg-red-900/5 focus:border-red-900 focus:ring-red-900':
                  error,
                'pl-11': leftAddon,
                'pr-11': rightAddon,
              },
              className
            )}
            {...props}
          />
          {rightAddon && (
            <span className='text-neutral-black-300 absolute right-3 text-2xl'>
              {rightAddon}
            </span>
          )}
        </div>

        {error && <span className='text-sm text-red-900'>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
