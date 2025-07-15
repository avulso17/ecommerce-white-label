'use server'

import { login } from '@/api/auth/login'
import { LoginFormSchema } from '@/lib/definitions/loginFormSchema'
import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function loginAction(state: unknown, formData: FormData) {
  const rawFormData = Object.fromEntries(formData)

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
    // 3. Create session
    await createSession(response.token)
    return redirect('/')
  } catch (error) {
    console.log(error)
  }
}
