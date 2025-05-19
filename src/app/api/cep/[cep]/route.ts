import { NextResponse } from 'next/server'

const BASE_URL = 'https://viacep.com.br/ws/'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ cep: string }> }
) {
  const { cep } = await params

  if (cep.length !== 8) {
    return NextResponse.json(
      { error: 'CEP inválido. O CEP deve conter 8 dígitos.' },
      { status: 400 }
    )
  }

  const res = await fetch(`${BASE_URL}/${cep}/json`)

  if (!res.ok) {
    return NextResponse.json(
      { error: `Erro na API ViaCEP: ${res.status} ${res.statusText}` },
      { status: res.status }
    )
  }

  const data = await res.json()

  if (data.erro) {
    return NextResponse.json({ error: 'CEP não encontrado' }, { status: 404 })
  }

  return NextResponse.json(data)
}
