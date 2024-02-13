import { combineReducers, configureStore } from "@reduxjs/toolkit"
import cartReducer from "./reducers/cart/cartSlice"
import ticketsReducer from "./reducers/tickets/ticketsSlice"
export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  cart: cartReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: rootReducer,
})
