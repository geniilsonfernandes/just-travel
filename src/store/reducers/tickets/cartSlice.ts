import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Ticket {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: Ticket[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Ticket>) {
      const { id, name, price } = action.payload
      const existingItemIndex = state.items.findIndex((item) => item.id === id)

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1,
        })
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const idToRemove = action.payload
      state.items = state.items.filter((item) => item.id !== idToRemove)
    },
    updateCartItemQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) {
      const { id, quantity } = action.payload
      const existingItem = state.items.find((item) => item.id === id)

      if (existingItem) {
        existingItem.quantity = quantity
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
