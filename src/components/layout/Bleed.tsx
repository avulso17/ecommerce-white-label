import { cn } from '@/lib/utils/cn'

type BleedProps = {
  className?: string
  children?: React.ReactNode
}

export default function Bleed({ className, children }: BleedProps) {
  return (
    <div className={cn('-mx-[100%] flex flex-col', className)}>{children}</div>
  )
}
