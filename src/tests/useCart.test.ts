// import { useCart } from '@/hooks/useCart'
// import { act, renderHook } from '@testing-library/react-hooks'

// // Mock do localStorage para o zustand persist
// beforeEach(() => {
//   localStorage.clear()
// })

// describe('useCart', () => {
//   it('deve iniciar com items vazio', () => {
//     const { result } = renderHook(() => useCart())
//     expect(result.current.items).toEqual([])
//   })

//   it('deve adicionar um item novo ao carrinho', () => {
//     const { result } = renderHook(() => useCart())
//     const item = { id: '1', name: 'Produto Teste', size: 'M', quantity: 2 }
//     act(() => {
//       result.current.addItem(item as any)
//     })
//     expect(result.current.items).toHaveLength(1)
//     expect(result.current.items[0]).toMatchObject(item)
//   })

//   // Adicione mais testes aqui conforme necessário
// })
