'use server'

import { BASE_URL } from '@/constants/baseUrl'
import { clearCookieValue, createCookie } from '@/lib/utils/cookies'
import { ViaCEPResponse } from '@/types/viacep'

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

  if (rawCep.length === 0) {
    return { status: 'error', message: 'Type a valid CEP' }
  }

  const res = await fetch(`${BASE_URL}/api/cep/${rawCep}`)

  if (!res.ok) {
    return { status: 'error', message: 'Something went wrong!' }
  }

  const cep_details = (await res.json()) as ViaCEPResponse

  const floorPrice = 20.93
  const price = floorPrice * 1.2
  const raw_estimated_date = new Date()
  raw_estimated_date.setDate(new Date().getDate() + 2)
  const estimated_date = raw_estimated_date.toLocaleDateString('pt-BR')

  const data = {
    status: 'success',
    price,
    estimated_date,
    cep_details,
  } as ShippingSuccess

  await createCookie('shipping', JSON.stringify(data))

  return data
}
