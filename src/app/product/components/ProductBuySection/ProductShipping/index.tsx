'use client'

import { getShipping, ShippingSuccess } from '@/app/product/actions/getShipping'
import InputFormat from '@/components/ui/InputFormat'
import { useActionState } from 'react'
import ProductShippingAddress from './ProductShippingAddress'
import SubmitButton from './ProductShippingSubmitButton'

type ProductShippingProps = {
  savedState?: ShippingSuccess
}

export default function ProductShipping({ savedState }: ProductShippingProps) {
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
          <SubmitButton />
        </div>
      </div>

      {savedState && (
        <ProductShippingAddress
          cep_details={savedState.cep_details}
          estimated_date={savedState.estimated_date}
          price={savedState.price}
        />
      )}

      {response?.status === 'error' && (
        <p className='mt-1 text-sm'>{response.message}</p>
      )}
    </form>
  )
}
