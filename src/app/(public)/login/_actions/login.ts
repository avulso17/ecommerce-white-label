'use server'

import { login } from '@/api/auth/login'
import { LoginFormSchema } from '@/lib/definitions/loginFormSchema'
import { createSession } from '@/lib/session'

export async function loginAction(state: unknown, formData: FormData) {
  const rawFormData = Object.fromEntries(formData)
  let token: string

  // 1. Validate
  const validationResult = LoginFormSchema.safeParse({
    username: rawFormData['username'],
    password: rawFormData['password'],
  })

  if (!validationResult.success) {
    return {
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  const credentials = validationResult.data

  // 2. Login
  try {
    const response = await login(credentials)
    token = response.data.token
  } catch (error: any) {
    if (error.status === 401) {
      return {
        message: 'Invalid username or password',
      }
    }

    return {
      message: 'Something went wrong, please try again later.',
    }
  }

  // 3. Create session
  await createSession(token)
}
