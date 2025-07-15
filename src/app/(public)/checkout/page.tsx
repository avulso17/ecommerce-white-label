import PageHeader from '@/components/shared/PageHeader'
import Separator from '@/components/ui/Separator'
import CheckoutOrderDetail from './_components/CheckoutOrderDetail'
import CheckoutShipping from './_components/CheckoutShipping'

export default function CheckoutPage() {
  return (
    <main className='pb-32'>
      <PageHeader title='Checkout' steps={['Checkout']} className='mb-14' />
      <div className='flex'>
        <CheckoutShipping />
        <Separator orientation='vertical' className='mr-16 ml-28' />
        <CheckoutOrderDetail />
      </div>
    </main>
  )
}
