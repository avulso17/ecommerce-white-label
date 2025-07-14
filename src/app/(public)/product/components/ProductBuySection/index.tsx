import Button from '@/components/ui/Button'
import ProductShipping from './ProductShipping'

export default function ProductBuySection() {
  return (
    <section className='max-w-72 grow'>
      <div className='h-full rounded-lg border-[1px] border-black/10 px-4 py-6'>
        <ProductShipping />

        <div className='mt-6 flex flex-col gap-2'>
          <Button type='submit' variant='primary' block>
            Comprar agora
          </Button>
          <Button block>Adicionar</Button>
        </div>
      </div>
    </section>
  )
}
