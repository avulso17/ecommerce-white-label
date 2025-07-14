import ProfileIcon from '@/components/icons/Profile'
import Button from '@/components/ui/Button'

export default function NavbarProfileButton() {
  return (
    <Button variant='icon' className='text-neutral-black-900'>
      <ProfileIcon />
    </Button>
  )
}
