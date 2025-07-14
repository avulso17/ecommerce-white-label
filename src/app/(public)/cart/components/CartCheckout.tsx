import Button from '@/components/ui/Button'
import Separator from '@/components/ui/Separator'

export default function CartCheckout() {
  return (
    <section className='border-neutral-black-100 max-w-[21.25rem] shrink-0 grow rounded border px-6 py-8'>
      <h3 className='text-neutral-black-900 mb-10 text-base font-semibold'>
        Checkout
      </h3>

      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Subtotal</span>
          <span className='text-neutral-black-900'>$ 90.0</span>
        </div>

        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Shipping:</span>
          <span className='text-neutral-black-900'>$ 90.0</span>
        </div>

        <div className='flex items-center justify-between text-sm font-medium'>
          <span className='text-neutral-black-500'>Tax:</span>
          <span className='text-neutral-black-900'>$ 90.0</span>
        </div>
      </div>

      <Separator className='my-6' />

      <div className='text-neutral-black-900 mb-8 flex items-center justify-between text-sm font-medium'>
        <span>Total</span>
        <span>$ 90.0</span>
      </div>

      <div className='flex flex-col gap-2'>
        <Button block>Checkout</Button>
        <Button variant='text' block>
          Continue Shopping
        </Button>
      </div>
    </section>
  )
}
