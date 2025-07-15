import Input from '@/components/ui/Input'

export default function CheckoutShippingForm() {
  return (
    <form className='flex flex-col gap-12'>
      <div className='flex grow flex-col gap-4'>
        <Input id='street' name='street' label='Street Address' />

        <div className='flex grow gap-4'>
          <Input id='city' name='city' containerClassName='grow' label='City' />
          <Input
            id='state'
            name='state'
            containerClassName='grow'
            label='State'
          />
        </div>

        <div className='flex grow gap-4'>
          <Input
            id='zip'
            name='zip'
            containerClassName='grow'
            label='Zip Code'
          />
          <Input
            id='country'
            name='country'
            containerClassName='grow'
            label='Country'
          />
        </div>
      </div>

      <div className='flex grow gap-4'>
        <Input
          id='email'
          name='email'
          containerClassName='grow'
          label='Email'
        />
        <Input
          id='name'
          name='name'
          containerClassName='grow'
          label='Full name'
        />
      </div>
    </form>
  )
}
