import { CheckoutFormSchema } from '@/lib/definitions/checkoutFormSchema'
import z from 'zod'

export type ViaCEPResponse = {
  cep: string
  logradouro: string
  complemento: string
  unidade: string
  bairro: string
  localidade: string
  uf: string
  estado: string
  regiao: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

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

export type ShippingState = ShippingSuccess | ShippingError | null

export type CheckoutFormValues = z.infer<typeof CheckoutFormSchema>
