'use server'

import { cookies } from 'next/headers'

export async function createCookie(
  key: string,
  value: string,
  maxAge?: number
) {
  const cookieStore = await cookies()

  cookieStore.set(key, value, {
    maxAge: maxAge ?? 900,
  })
}

export async function loadCookie(key: string) {
  const cookieStore = await cookies()
  const hasCookie = cookieStore.has(key)

  if (hasCookie) {
    const value = cookieStore.get(key)
    return value
  } else {
    return null
  }
}

export async function deleteCookie(key: string) {
  ;(await cookies()).delete(key)
}

export async function clearCookieValue(key: string) {
  ;(await cookies()).set(key, '')
}
