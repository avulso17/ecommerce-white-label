import { Product } from '@/api/products/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = Product & {
  size: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateItem: (id: string, updates: Partial<CartItem>) => void
  removeItem: (id: string, size: string) => void
  removeAllItems: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === item.id && i.size === item.size
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }
          return { items: [...state.items, item] }
        }),
      updateItem: (id, updates) =>
        set((state) => ({
          items: state.items.map((item) =>
            String(item.id) === id ? { ...item, ...updates } : item
          ),
        })),
      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter(
            (item) => !(String(item.id) === id && item.size === size)
          ),
        })),
      removeAllItems: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage', // nome da chave no localStorage
      partialize: (state) => ({ items: state.items }), // só persiste items
    }
  )
)
