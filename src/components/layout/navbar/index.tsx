import Image from 'next/image'
import Link from 'next/link'
import NavbarCartButton from './NavbarCartButton'
import NavbarMenu from './NavbarMenu'
import NavbarProfileButton from './NavbarProfileButton'
import NavbarSearch from './NavbarSearch'

export default function Navbar() {
  return (
    <div className='flex h-20 items-center justify-between'>
      <Link href='/' className='flex items-center gap-3'>
        <Image
          src='/assets/images/logo.svg'
          alt='logo'
          height={40}
          width={40}
        />
        <h1 className='font-manrope text-xl font-extrabold'>Ecommerce</h1>
      </Link>
      <NavbarMenu />
      <div className='flex items-center gap-5'>
        <NavbarSearch />
        <NavbarCartButton />
        <NavbarProfileButton />
      </div>
    </div>
  )
}
