'use server'

import { BASE_URL } from '@/constants/baseUrl'
import { ViaCEPResponse } from '@/types/viacep'
import { NextResponse } from 'next/server'

const SHIPPING_CONFIG = {
  regions: {
    sudeste: ['SP', 'RJ', 'MG', 'ES'],
    sul: ['PR', 'SC', 'RS'],
    nordeste: ['BA', 'CE', 'PE', 'MA', 'PB', 'PI', 'RN', 'AL', 'SE'],
    norte: ['AM', 'PA', 'TO', 'AC', 'AP', 'RO', 'RR'],
    centroOeste: ['MT', 'MS', 'GO', 'DF'],
  },
  floorPrice: {
    sudeste: 15.9,
    sul: 18.9,
    nordeste: 25.9,
    norte: 29.9,
    centrooeste: 22.9,
  },
  capitalCitiesdiscount: 0.1, // 10% de desconto para capitais
  rateDistantLocations: 0.2, // 20% de taxa para localidades distantes
  hardAccessAreas: [
    { start: '69000000', end: '69299999' }, // Parte do Amazonas
    { start: '69400000', end: '69899999' }, // Parte de Roraima
    // Adicione outros intervalos conforme necessário
  ],
  capitals: [
    { name: 'São Paulo', start: '01000000', end: '05999999' },
    { name: 'Rio de Janeiro', start: '20000000', end: '23799999' },
    { name: 'Belo Horizonte', start: '30000000', end: '31999999' },
    // Adicione outras capitais conforme necessário
  ],
  unservedCeps: [
    // Ilhas oceânicas, áreas muito remotas, etc.
    '96990000',
    '96995000', // Fernando de Noronha
    // Adicione outros CEPs não atendidos
  ],
}

export async function getShipping(
  cep: string
): Promise<{ cep_details: ViaCEPResponse; price: number }> {
  const rawCep = cep.replace(/\D/g, '')

  if (SHIPPING_CONFIG.unservedCeps.includes(rawCep)) {
    return NextResponse.json({
      cep: rawCep,
      frete: {
        disponivel: false,
        valor: 0,
        prazoEstimado: 0,
        regiao: '',
      },
      mensagem: 'CEP não atendido pela transportadora.',
    })
  }

  const res = await fetch(`${BASE_URL}/api/shipping/${rawCep}`)

  if (!res.ok) {
    console.log('Something went wrong!')
  }

  const cep_details = (await res.json()) as ViaCEPResponse

  return { cep_details, price: 0 }
}
