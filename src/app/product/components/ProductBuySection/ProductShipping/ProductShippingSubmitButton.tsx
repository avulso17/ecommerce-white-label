'use client'

import Button from '@/components/ui/Button'
import { useFormStatus } from 'react-dom'

export default function ProductShippingSubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' size='sm' className='grow' isLoading={pending}>
      OK
    </Button>
  )
}
