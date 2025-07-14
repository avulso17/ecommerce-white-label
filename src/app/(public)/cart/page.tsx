import CartCheckout from './_components/CartCheckout'
import CartHeader from './_components/CartHeader'
import CartProducts from './_components/CartProducts'

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
