'use server'

import { login } from '@/api/auth/login'
import { LoginFormState } from '@/api/auth/types'
import { LoginFormSchema } from '@/lib/definitions/loginFormSchema'
import { createSession } from '@/lib/session'

export async function loginAction(
  prevState: LoginFormState,
  formData: FormData
) {
  const rawFormData = Object.fromEntries(formData)
  let token: string

  // 1. Validate
  const validationResult = LoginFormSchema.safeParse({
    username: rawFormData['username'],
    password: rawFormData['password'],
  })

  if (!validationResult.success) {
    return {
      errors: {
        username: validationResult.error.flatten().fieldErrors.username,
        password: validationResult.error.flatten().fieldErrors.password,
      },
    }
  }

  const credentials = validationResult.data

  // 2. Login
  try {
    const response = await login(credentials)
    token = response.data.token
  } catch (error: any) {
    const status = error?.response?.status || error?.status || 500

    return {
      errors: {
        credentials: status === 401 ? ['Invalid username or password'] : [],
        general:
          status !== 401
            ? ['Something went wrong, please try again later.']
            : [],
      },
    }
  }

  // 3. Create session
  await createSession(token)
}
