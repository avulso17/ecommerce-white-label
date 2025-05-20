export type StorageTTLPayload<T> = {
  value: T
  expiresAt: number
}

export function saveWithTTL<T>(key: string, value: T, ttlMinutes: number) {
  const payload: StorageTTLPayload<T> = {
    value,
    expiresAt: Date.now() + ttlMinutes * 60 * 1000,
  }

  localStorage.setItem(key, JSON.stringify(payload))
}

export function loadWithTTL<T>(key: string): T | null {
  const raw = localStorage.getItem(key)
  if (!raw) return null

  try {
    const data: StorageTTLPayload<T> = JSON.parse(raw)
    if (Date.now() > data.expiresAt) {
      clearTTL(key)
      return null
    }

    return data.value
  } catch {
    return null
  }
}

export function clearTTL(key: string) {
  localStorage.removeItem(key)
}
