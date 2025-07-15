'use client'

import Button from '@/components/ui/Button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-6'>
      <h2 className='text-lg font-medium'>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}
