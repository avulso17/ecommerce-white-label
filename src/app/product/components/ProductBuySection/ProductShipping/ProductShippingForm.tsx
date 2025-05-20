'use client'

import { getShipping } from '@/app/product/actions/getShipping'
import Button from '@/components/ui/Button'
import InputFormat from '@/components/ui/InputFormat'
import { useActionState } from 'react'

export default function ProductShippingForm() {
  const [response, formAction, isPending] = useActionState(getShipping, null)

  return (
    <form action={formAction}>
      <label htmlFor='cep-input' className='text-sm font-bold'>
        Consultar frete e prazo de entrega:
      </label>
      <div className='flex items-start gap-2'>
        <InputFormat
          id='cep-input'
          name='cep-input'
          placeholder='Inserir CEP'
          format='#####-###'
          disabled={isPending}
          errorText={
            response?.status === 'error' ? response.message : undefined
          }
        />
        <Button type='submit' size='sm' className='grow' isLoading={isPending}>
          OK
        </Button>
      </div>
    </form>
  )
}
