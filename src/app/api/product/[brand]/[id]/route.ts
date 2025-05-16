import { PRODUCTS } from '@/constants/products'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ brand: string; id: string }> }
) {
  const { brand, id } = await params

  const product = PRODUCTS.find((p) => p.brand === brand && p.id === id)

  if (product === undefined) {
    return NextResponse.json(
      { message: 'Error to find product' },
      { status: 404 }
    )
  }

  return NextResponse.json(product, { status: 200 })
}
