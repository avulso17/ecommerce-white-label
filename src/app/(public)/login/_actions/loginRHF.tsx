'use server'

import { login } from '@/api/auth/login'
import { LoginCredentials } from '@/api/auth/types'
import { createSession } from '@/lib/session'

export async function loginActionRHF(data: LoginCredentials) {
  let token: string

  try {
    const response = await login(data)
    token = response.data.token
  } catch {
    throw new Error('Algo deu errado. Tente novamente.')
  }

  await createSession(token)
}
