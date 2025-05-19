import Link from 'next/link'

function Navbar() {
  return (
    <nav className='h-16 w-full px-8'>
      <div className='flex h-full items-center border-b-[1px] border-black/10'>
        <div className='flex grow gap-8'>
          <button>Women</button>
          <button>Men</button>
          <button>Company</button>
        </div>
        <Link href='/'>logo</Link>
        <div className='flex grow justify-end gap-8'>
          <button>BRL</button>
          <button>Login</button>
          <button>Kart</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
