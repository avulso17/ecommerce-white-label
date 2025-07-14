import { cn } from '@/lib/utils/cn'

type BleedProps = {
  background?: string
  className?: string
  children?: React.ReactNode
}

export default function Bleed({ background, className, children }: BleedProps) {
  return (
    <div className={cn('relative flex flex-col', className)}>
      <div
        className={cn('absolute inset-0 -z-10 -mx-[100%]', background)}
      ></div>
      {children}
    </div>
  )
}
