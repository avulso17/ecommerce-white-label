'use server'

import { clearCookieValue, createCookie } from '@/lib/utils/cookies'
import { ViaCEPResponse } from '@/types/viacep'

const BASE_URL = 'https://viacep.com.br/ws/'

export type ShippingSuccess = {
  status: 'success'
  price: number
  estimated_date: string
  cep_details: ViaCEPResponse
}

export type ShippingError = {
  status: 'error'
  message: string
}

type ShippingState = ShippingSuccess | ShippingError | null

export async function getShipping(
  prevState: ShippingState,
  formData: FormData
): Promise<ShippingState> {
  const rawFormData = {
    cep: formData.get('cep-input'),
  }
  const cep = rawFormData.cep as string
  const rawCep = cep.replace(/\D/g, '')

  await clearCookieValue('shipping')

  if (rawCep.length !== 8) {
    return {
      status: 'error',
      message: 'CEP inválido. O CEP deve conter 8 dígitos.',
    }
  }

  const res = await fetch(`${BASE_URL}/${rawCep}/json`)

  if (!res.ok) {
    return {
      status: 'error',
      message: `Erro na API ViaCEP: ${res.status} ${res.statusText}`,
    }
  }

  const cep_details_data = await res.json()

  if (cep_details_data.erro) {
    return { status: 'error', message: 'CEP não encontrado' }
  }

  const floorPrice = 20.93
  const price = floorPrice * 1.2
  const raw_estimated_date = new Date()
  raw_estimated_date.setDate(new Date().getDate() + 2)
  const estimated_date = raw_estimated_date.toLocaleDateString('pt-BR')

  const data = {
    status: 'success',
    price,
    estimated_date,
    cep_details: cep_details_data,
  } as ShippingSuccess

  await createCookie('shipping', JSON.stringify(data))

  return data
}
