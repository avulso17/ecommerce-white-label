import CartCheckout from './components/CartCheckout'
import CartHeader from './components/CartHeader'
import CartProducts from './components/CartProducts'

export default function CartPage() {
  return (
    <main className='pb-52'>
      <CartHeader />

      <div className='flex gap-28'>
        <CartProducts />
        <CartCheckout />
      </div>
    </main>
  )
}
