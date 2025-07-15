'use client'

import { LoginCredentials } from '@/api/auth/types'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { LoginFormSchema } from '@/lib/definitions/loginFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { loginAction } from '../_actions/login'
import { loginActionRHF } from '../_actions/loginRHF'

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await loginActionRHF(data)
    } catch (error: any) {
      setError('root', {
        message: error.message,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-4'>
        <Input
          id='username'
          label='Username'
          {...register('username')}
          // error={state?.errors}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          {...register('password')}
          // error={state?.errors.password?.[0]}
        />
      </div>

      <Button
        variant='text'
        size='xs'
        className='text-neutral-black-600 mt-3 mb-6 ml-auto'
      >
        Forgot Password?
      </Button>

      <Button block type='submit' isLoading={isSubmitting}>
        Login
      </Button>
    </form>
  )
}
