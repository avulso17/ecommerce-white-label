import Button from '@/components/ui/Button'
import { loadCookie } from '@/lib/utils/cookies'
import { ShippingSuccess } from '../../actions/getShipping'
import ProductShipping from './ProductShipping'

export default async function ProductBuySection() {
  const cookie = await loadCookie('shipping')
  const cookieValue = cookie?.value
  const shippingInitialState = (
    cookieValue ? JSON.parse(cookieValue) : undefined
  ) as ShippingSuccess | undefined

  return (
    <section className='max-w-72 grow'>
      <div className='h-full rounded-lg border-[1px] border-black/10 px-4 py-6'>
        <ProductShipping savedState={shippingInitialState} />

        <div className='mt-6 flex flex-col gap-2'>
          <Button type='submit' variant='primary' block>
            Comprar agora
          </Button>
          <Button variant='secondary' block>
            Adicionar
          </Button>
        </div>
      </div>
    </section>
  )
}
