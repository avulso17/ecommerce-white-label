import ProfileIcon from '@/components/icons/Profile'
import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function NavbarProfileButton() {
  return (
    <Link href='/profile'>
      <Button variant='icon' className='text-neutral-black-900'>
        <ProfileIcon />
      </Button>
    </Link>
  )
}
