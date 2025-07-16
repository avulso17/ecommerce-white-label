import { z } from 'zod'

export const CheckoutFormSchema = z.object({
  streetAddress: z.string().min(5, 'Must be at least 5 characters long.'),
  city: z.string().min(2, 'Must be at least 2 characters long.'),
  state: z.string().min(2, 'Must be at least 2 characters long.'),
  zipCode: z
    .string()
    .regex(/^\d{5}-?\d{3}$/, 'Invalid CEP format. Use XXXXX-XXX.'),
  country: z.string().min(2, 'Country is required.'),
  email: z.string().email('Invalid email format.'),
  fullName: z
    .string()
    .min(3, 'Name is required.')
    .refine((name) => name.trim().includes(' '), {
      message: 'Please, enter your full name.',
    }),
})
