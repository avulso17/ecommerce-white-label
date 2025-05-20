import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-6'>
      <h1 className='text-lg font-medium'>Product not found :(</h1>
      <Link href='/'>
        <Button>Go to Home</Button>
      </Link>
    </div>
  )
}
