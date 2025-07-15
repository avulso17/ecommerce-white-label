import PageHeader from '@/components/shared/PageHeader'
import CartCheckout from './_components/CartCheckout'
import CartProducts from './_components/CartProducts'

export default function CartPage() {
  return (
    <main className='pb-52'>
      <PageHeader title='Cart' steps={['Cart']} />
      <div className='flex gap-28'>
        <CartProducts />
        <CartCheckout />
      </div>
    </main>
  )
}
