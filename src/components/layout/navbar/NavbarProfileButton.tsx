'use client'

import ProfileIcon from '@/components/icons/Profile'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

export default function NavbarProfileButton() {
  const router = useRouter()

  return (
    <Button
      variant='icon'
      className='text-neutral-black-900'
      onClick={() => router.push('/login')}
    >
      <ProfileIcon />
    </Button>
  )
}
