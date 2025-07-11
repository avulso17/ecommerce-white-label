import ChevronDownIcon from '@/components/icons/ChevronDown'
import Link from 'next/link'
import NavbarMenuButton from './NavbarMenuButton'

export default function NavbarMenu() {
  return (
    <nav className='flex items-center gap-8'>
      <Link href='/'>
        <NavbarMenuButton>Home</NavbarMenuButton>
      </Link>
      <NavbarMenuButton>
        Categories <ChevronDownIcon className='text-2xl' />
      </NavbarMenuButton>
      <NavbarMenuButton>About</NavbarMenuButton>
      <NavbarMenuButton>Contact</NavbarMenuButton>
    </nav>
  )
}
