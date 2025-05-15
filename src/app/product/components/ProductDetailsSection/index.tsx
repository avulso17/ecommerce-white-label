import {
  ProductVariantDetail,
  ProductVariantInstallments,
  ProductVariantSize,
  type ProductVariant,
} from '@/types/products'
import ProductSizeSelector from './ProductSizeSelector'
import ProductVariantSelector from './ProductVariantSelector'

type ProductDetailsSectionProps = {
  title: string
  price: number
  installments: ProductVariantInstallments
  sizes: ProductVariantSize[]
  variants: ProductVariant[]
  details: ProductVariantDetail[]
}

export default function ProductDetailsSection({
  title,
  price,
  installments,
  sizes,
  variants,
  details,
}: ProductDetailsSectionProps) {
  return (
    <section className='mr-6 grow'>
      <h1 className='text-2xl font-bold'>{title}</h1>
      {/* <div>estrelinhas</div> */}
      <span className='mt-3 block text-4xl'>R$ {price}</span>
      <span className='block text-base'>
        em {installments.times}x R$ {installments.value} com cartões de crédito
      </span>

      <ProductVariantSelector variants={variants} />
      <ProductSizeSelector sizes={sizes} />

      <h2 className='mt-6 text-sm font-semibold'>
        O que você precisa saber sobre este produto
      </h2>
      <ul className='mt-4 flex list-inside list-disc flex-col gap-1.5 text-sm'>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </section>
  )
}
