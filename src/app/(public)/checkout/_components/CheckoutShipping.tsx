import CheckoutShippingForm from './shipping-form/CheckoutShippingForm'

export default function CheckoutShipping() {
  return (
    <section className='flex grow flex-col gap-16 pt-4'>
      <h3 className='text-neutral-black-900 text-base font-semibold'>
        Shipping Address
      </h3>

      <CheckoutShippingForm />
    </section>
  )
}
