import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './reducers/tickets/ticketsSlice'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: rootReducer,
})
