'use client'

import { CheckoutFormValues } from '@/api/shipping/types'
import Input from '@/components/ui/Input'
import { CheckoutFormSchema } from '@/lib/definitions/checkoutFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function CheckoutShippingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(CheckoutFormSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: CheckoutFormValues) => {
    console.log(data)
    toast.success('Place order successfully')
  }

  return (
    <form
      id='shipping-form'
      className='flex flex-col gap-12'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex grow flex-col gap-4'>
        <Input
          id='street'
          label='Street Address'
          {...register('streetAddress')}
          error={errors.streetAddress?.message}
        />

        <div className='flex grow gap-4'>
          <Input
            id='city'
            label='City'
            containerClassName='w-1/2'
            {...register('city')}
            error={errors.city?.message}
          />
          <Input
            id='state'
            label='State'
            containerClassName='w-1/2'
            {...register('state')}
            error={errors.state?.message}
          />
        </div>

        <div className='flex grow gap-4'>
          <Input
            id='zip'
            label='Zip Code'
            containerClassName='w-1/2'
            {...register('zipCode')}
            error={errors.zipCode?.message}
          />
          <Input
            id='country'
            label='Country'
            containerClassName='w-1/2'
            {...register('country')}
            error={errors.country?.message}
          />
        </div>
      </div>

      <div className='flex grow gap-4'>
        <Input
          id='email'
          label='Email'
          containerClassName='w-1/2'
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          id='fullname'
          label='Full name'
          containerClassName='w-1/2'
          {...register('fullName')}
          error={errors.fullName?.message}
        />
      </div>
    </form>
  )
}
