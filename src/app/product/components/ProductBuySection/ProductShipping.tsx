'use client'

import Button from '@/components/ui/Button'
import InputFormat from '@/components/ui/InputFormat'
import { useActionState, useEffect } from 'react'
import { getShipping } from '../../actions/getShipping'

export default function ProductShipping() {
  const [state, formAction, isPending] = useActionState(getShipping, null)

  useEffect(() => {
    console.log(state)
  }, [state])

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
      {state?.status === 'success' && (
        <>
          <p className='mt-1 text-sm'>
            Chegará {state.estimated_date} por R$ {state.price.toFixed(2)}
          </p>
          <p className='mt-2 text-sm'>
            <b>Endereço:</b> {state.cep_details.logradouro},{' '}
            {state.cep_details.bairro} - {state.cep_details.localidade}{' '}
            {state.cep_details.uf} - {state.cep_details.cep}
          </p>
        </>
      )}
      {state?.status === 'error' && (
        <p className='mt-1 text-sm'>{state.message}</p>
      )}
    </form>
  )
}
