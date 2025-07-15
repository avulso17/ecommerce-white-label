'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useActionState } from 'react'
import { loginAction } from '../_actions/login'

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined)

  return (
    <form action={action}>
      <div className='flex flex-col gap-4'>
        <Input
          id='username'
          name='username'
          label='Username'
          error={state?.errors.username?.[0]}
        />
        <Input
          id='password'
          name='password'
          label='Password'
          type='password'
          error={state?.errors.password?.[0]}
        />
      </div>

      <Button
        variant='text'
        size='xs'
        className='text-neutral-black-600 mt-3 mb-6 ml-auto'
      >
        Forgot Password?
      </Button>

      <Button block type='submit' isLoading={pending}>
        Login
      </Button>
    </form>
  )
}
