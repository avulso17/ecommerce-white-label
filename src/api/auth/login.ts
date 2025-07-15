import api from '@/lib/api'
import { LoginAxiosResponse, LoginCredentials } from './types'

export async function login(
  credentials: LoginCredentials
): Promise<LoginAxiosResponse> {
  return await api.post('/auth/login', credentials)
}
