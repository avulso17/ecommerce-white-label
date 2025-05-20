'use client'

import { getShipping } from '@/app/product/actions/getShipping'
import Button from '@/components/ui/Button'
import InputFormat from '@/components/ui/InputFormat'
import { useActionState } from 'react'

export default function ProductShippingForm() {
  const [response, formAction, isPending] = useActionState(getShipping, null)

  return (
    <form action={formAction}>
      <div className='flex flex-col gap-1'>
        <label htmlFor='cep-input' className='text-sm font-bold'>
          Consultar frete e prazo de entrega:
        </label>
        <div className='flex items-center gap-2'>
          <InputFormat
            id='cep-input'
            name='cep-input'
            placeholder='Inserir CEP'
            format='#####-###'
            disabled={isPending}
          />
          <Button
            type='submit'
            size='sm'
            className='grow'
            isLoading={isPending}
          >
            OK
          </Button>
        </div>
      </div>

      {response?.status === 'error' && (
        <p className='mt-1 text-sm'>{response.message}</p>
      )}
    </form>
  )
}
