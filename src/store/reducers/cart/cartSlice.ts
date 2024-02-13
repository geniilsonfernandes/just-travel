import { ITicketDTO } from "@/api/DTOS/Ticket.DTO"
import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"

export interface Icart {
  id: string
  name: string
  price: number
  quantity: number
  ticket: ITicketDTO
}

interface CartState {
  items: Icart[]

  isOpen: boolean
}

const initialState: CartState = {
  items: [],

  isOpen: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Icart>) {
      const { id, name, price, ticket } = action.payload

      if (!state.items) {
        state.items = []
      }

      const existingItemIndex = state.items
        ? state.items.findIndex((item) => item?.id === id)
        : -1

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity++
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1,
          ticket,
        })
      }

      saveToLocalStorage(state)
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const idToRemove = action.payload
      state.items = state.items.filter((item) => item.id !== idToRemove)

      saveToLocalStorage(state)
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

      saveToLocalStorage(state)
    },
    clearCart(state) {
      state.items = []
    },
    getCart(state) {
      return state
    },
    setCart(state, action: PayloadAction<CartState>) {
      state.items = action.payload.items
    },
  },
})

const key = "@just-travel/gh4/cart/"

const saveToLocalStorage = (state: CartState) => {
  try {
    localStorage.setItem(key, JSON.stringify(state))
  } catch (error) {
    console.error("Error saving cart to localStorage:", error)
  }
}

export const getFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem(key)
    return cart ? JSON.parse(cart) : []
  } catch (error) {
    console.error("Error getting cart from localStorage:", error)
  }
}

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  setCart,
} = cartSlice.actions

export const getLocalCart = () => async (dispatch: Dispatch) => {
  try {
    const cart = getFromLocalStorage()

    dispatch(setCart(cart))
  } catch (error) {
    console.error("Error getting cart from localStorage:", error)
  }
}

export default cartSlice.reducer
