import { cn } from '@/lib/utils/cn'

type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('mx-auto h-full w-full max-w-6xl px-3', className)}>
      {children}
    </div>
  )
}
