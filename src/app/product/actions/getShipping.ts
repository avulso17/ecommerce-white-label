'use server'

import { BASE_URL } from '@/constants/baseUrl'
import { ViaCEPResponse } from '@/types/viacep'

type ShippingSuccess = {
  status: 'success'
  price: number
  estimated_date: string
  cep_details: ViaCEPResponse
}

type ShippingError = {
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

  return { status: 'success', price, estimated_date, cep_details }
}
