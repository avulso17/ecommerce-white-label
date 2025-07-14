import { tv, VariantProps } from 'tailwind-variants'

const separatorVariants = tv({
  base: ['bg-neutral-black-100'],
  variants: {
    orientation: {
      horizontal: ['h-px w-full'],
      vertical: ['h-full w-px'],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

type SeparatorProps = VariantProps<typeof separatorVariants> & {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  thickness?: string
  color?: string
}

export default function Separator({ className, orientation }: SeparatorProps) {
  return (
    <div
      className={separatorVariants({ orientation, className })}
      role='separator'
      aria-orientation={orientation}
    />
  )
}
