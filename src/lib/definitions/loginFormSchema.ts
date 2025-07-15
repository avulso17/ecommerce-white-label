import { z } from 'zod'

export const LoginFormSchema = z.object({
  username: z
    .string({
      invalid_type_error: 'Invalid Username',
    })
    .min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
})
