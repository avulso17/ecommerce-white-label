import {
  ProductDetail,
  ProductInstallments,
  ProductSize,
  type ProductVariant,
} from '@/types/products'
import ProductSizeSelector from './ProductSizeSelector'
import ProductVariantSelector from './ProductVariantSelector'

type ProductDetailsSectionProps = {
  id: string
  brand: string
  title: string | undefined
  price: number | undefined
  installments?: ProductInstallments
  sizes?: ProductSize[]
  variants?: ProductVariant[]
  details?: ProductDetail[]
}

export default function ProductDetailsSection({
  id,
  brand,
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
      {installments ? (
        <span className='block text-base'>
          em {installments.times}x R$ {installments.value} com cartões de
          crédito
        </span>
      ) : null}
      {variants ? (
        <ProductVariantSelector
          currentId={id}
          brand={brand}
          variants={variants}
        />
      ) : null}
      {sizes ? <ProductSizeSelector sizes={sizes} /> : null}
      {details ? (
        <>
          <h2 className='mt-6 text-sm font-semibold'>
            O que você precisa saber sobre este produto
          </h2>
          <ul className='mt-4 flex list-inside list-disc flex-col gap-1.5 text-sm'>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </>
      ) : null}
    </section>
  )
}
