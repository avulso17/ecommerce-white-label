import { cn } from '@/lib/utils/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: [
    'relative flex items-center gap-1',
    'font-medium transition-colors',
    'focus:ring-neutral-black-900 focus:ring-2 focus:ring-offset-2 focus:outline-none',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      primary:
        'bg-neutral-black-900 text-neutral-white-900 hover:bg-neutral-black-800',
      outline: [
        'border-neutral-black-900 text-neutral-black-900 border',
        'hover:bg-neutral-black-900 hover:text-neutral-white-900',
      ],
      ghost:
        'text-neutral-black-900 bg-neutral-white-100 hover:bg-neutral-white-200',
      text: 'bg-transparent focus:underline focus:ring-0',
      icon: 'text-neutral-black-500 hover:bg-neutral-white-100 bg-transparent',
    },
    size: {
      xs: 'rounded-sm px-2 py-2 text-sm',
      sm: 'rounded px-4 py-2.5 text-sm',
      md: 'rounded-md px-8 py-3 text-base',
      lg: 'rounded-lg px-8 py-4 text-lg',
    },
    block: {
      true: 'w-full',
    },
  },
  compoundVariants: [
    {
      variant: 'text',
      size: ['xs', 'sm', 'md', 'lg'],
      className: 'px-0',
    },
    {
      variant: 'icon',
      size: ['xs', 'sm', 'md', 'lg'],
      className: 'p-0',
    },
    {
      variant: 'icon',
      size: 'xs',
      className: 'h-8 w-8',
    },
    {
      variant: 'icon',
      size: 'sm',
      className: 'h-10 w-10',
    },
    {
      variant: 'icon',
      size: 'md',
      className: 'h-11 w-11',
    },
    {
      variant: 'icon',
      size: 'lg',
      className: 'h-12 w-12',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  className?: string
  block?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      isLoading = false,
      className,
      children,
      disabled,
      block,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className, block })}
        disabled={disabled || isLoading}
        {...props}
      >
        <div
          className={cn(
            [
              'flex items-center justify-center',
              'absolute left-1/2 -translate-x-1/2',
            ],
            {
              hidden: !isLoading,
            }
          )}
        >
          <svg
            className='h-4 w-4 animate-spin text-current'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        </div>
        <span
          className={cn('mx-auto flex items-center gap-1', {
            'text-2xl': variant === 'icon',
            'opacity-0': isLoading,
          })}
        >
          {children}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
