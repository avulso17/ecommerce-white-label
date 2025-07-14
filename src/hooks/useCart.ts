import { Product } from '@/api/products/types'
import { create } from 'zustand'

export type CartItem = Product & {
  size: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateItem: (id: string, updates: Partial<CartItem>) => void
  removeItem: (id: string) => void
  removeAllItems: () => void
}

export const useCart = create<CartState>((set) => ({
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
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => String(item.id) !== id),
    })),
  removeAllItems: () => set({ items: [] }),
}))
