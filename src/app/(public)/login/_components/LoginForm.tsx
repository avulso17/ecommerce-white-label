'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useActionState, useState } from 'react'
import { loginAction } from '../_actions/login'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [state, action, pending] = useActionState(loginAction, undefined)
  const errors = state?.errors

  return (
    <form action={action}>
      <div className='mb-1 flex flex-col gap-4'>
        <Input
          id='username'
          name='username'
          label='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id='password'
          name='password'
          label='Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors?.credentials?.[0] && (
        <span className='block text-center text-xs text-red-900'>
          {errors.credentials}
        </span>
      )}

      {errors?.general?.[0] && (
        <span className='block text-center text-xs text-red-900'>
          {errors.general}
        </span>
      )}

      <Button
        variant='text'
        size='xs'
        className='text-neutral-black-600 mt-3 mb-6 ml-auto'
      >
        Forgot Password?
      </Button>

      <Button
        block
        type='submit'
        isLoading={pending}
        disabled={!username || !password}
      >
        Login
      </Button>
    </form>
  )
}
