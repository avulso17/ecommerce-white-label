import Separator from '@/components/ui/Separator'
import CartList from './CartList'

export default function CartProducts() {
  return (
    <section className='grow pt-4'>
      <h3 className='text-neutral-black-900 mb-4 text-base font-semibold'>
        Your cart
      </h3>
      <Separator className='mb-12' />
      <CartList />
    </section>
  )
}
