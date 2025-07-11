import Button from '@/components/ui/Button'

type NavbarMenuButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export default function NavbarMenuButton({
  children,
  onClick,
}: NavbarMenuButtonProps) {
  return (
    <Button variant='text' size='sm' className='' onClick={onClick}>
      {children}
    </Button>
  )
}
