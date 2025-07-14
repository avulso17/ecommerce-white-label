import { tv, VariantProps } from 'tailwind-variants'

const badgeVariants = tv({
  base: ['flex h-7 items-center justify-center rounded-full px-4'],
  variants: {
    variant: {
      outline: ['border-neutral-black-100 border'],
      filled: ['bg-neutral-white-100'],
    },
  },
  defaultVariants: {
    variant: 'outline',
  },
})

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label: React.ReactNode
  className?: string
}

export default function Badge({ label, className, variant }: BadgeProps) {
  return (
    <div className={badgeVariants({ variant, className })}>
      <span className='text-neutral-black-900 text-xs font-medium'>
        {label}
      </span>
    </div>
  )
}
