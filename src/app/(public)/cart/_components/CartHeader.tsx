import Bleed from '@/components/layout/Bleed'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function CartHeader() {
  return (
    <Bleed
      background='bg-neutral-white-100'
      className='mb-14 h-40 justify-center'
    >
      <div className='flex flex-col gap-2'>
        <h2 className='text-neutral-black-900 text-2xl font-bold'>Cart</h2>
        <Breadcrumb prefix='Ecommerce' steps={['Cart']} />
      </div>
    </Bleed>
  )
}
