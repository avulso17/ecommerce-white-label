import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import 'server-only'

export async function createSession(token: string) {
  const oneDayInSeconds = 60 * 60 * 24

  const cookieStore = await cookies()
  cookieStore.set('session_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: oneDayInSeconds,
  })
  redirect('/')
}

export async function verifySession() {
  const cookieStore = await cookies()
  const token = cookieStore.get('session_token')?.value

  if (!token) {
    return null
  }

  return token
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session_token')
  redirect('/')
}
