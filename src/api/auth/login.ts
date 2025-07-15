import api from '@/lib/api'
import { LoginCredentials, LoginResponse } from './types'

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await api.post('/auth/login', credentials)
  return response.data
}
