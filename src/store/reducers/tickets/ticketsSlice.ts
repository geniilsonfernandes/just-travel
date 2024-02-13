import { ticketsAPI } from '@/api'
import { ITicketDTO } from '@/api/DTOS/Ticket.DTO'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { z } from 'zod'

interface TicketsState {
  data: ITicketDTO[]
  loading: boolean
  error: string | null

  //   meta
  currentPage: number
  totalPages: number
  ItemsPerPage: number
}

const initialState: TicketsState = {
  data: [],
  loading: false,
  error: null,

  //   meta
  currentPage: 1,
  totalPages: 1,
  ItemsPerPage: 6,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getTicketsStart(state) {
      state.loading = true
      state.error = null
    },
    getTicketsSuccess(state, action: PayloadAction<ITicketDTO[]>) {
      state.loading = false
      state.data = action.payload
    },
    getTicketsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },

    changeMeta(state, action: PayloadAction<{ page: number; limit: number }>) {
      state.currentPage = action.payload.page
      state.ItemsPerPage = action.payload.limit
    },
  },
})

export const {
  getTicketsStart,
  getTicketsSuccess,
  getTicketsFailure,
  changeMeta,
} = ticketsSlice.actions

const TicketSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  image: z.string(),
  description: z.string(),
  price: z.object({
    full: z.number(),
    discount: z.number(),
  }),
  rating: z.object({
    reviewsCount: z.number(),
    value: z.number(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
})

const CACHE_KEY = 'ticketsCache'

const getCache = (): {
  [key: string]: { data: ITicketDTO[]; timestamp: number }
} => {
  const cacheData = localStorage.getItem(CACHE_KEY)
  return cacheData ? JSON.parse(cacheData) : {}
}

const setCache = (cache: {
  [key: string]: { data: ITicketDTO[]; timestamp: number }
}) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
}

export const fetchTickets =
  (params: { page: number; limit: number } = { page: 1, limit: 6 }) =>
  async (dispatch: Dispatch) => {
    try {
      const cache = getCache()
      const cacheKey = JSON.stringify(params)
      const cachedData = cache[cacheKey]

      if (cachedData && Date.now() - cachedData.timestamp < 5 * 60 * 1000) {
        const validatedData = cachedData.data.filter((ticket) => {
          try {
            TicketSchema.parse(ticket)
            return true
          } catch {
            return false
          }
        })
        dispatch(getTicketsSuccess(validatedData))
        return
      }

      dispatch(getTicketsStart())
      changeMeta({ page: params.page, limit: params.limit })
      const response = await ticketsAPI.getTickets(params)

      const validatedData = response.filter((ticket) => {
        try {
          TicketSchema.parse(ticket)
          return true
        } catch {
          return false
        }
      })

      cache[cacheKey] = { data: validatedData, timestamp: Date.now() }
      setCache(cache)
      dispatch(getTicketsSuccess(validatedData))
    } catch (error) {
      changeMeta({ page: 1, limit: 6 })
      if (error instanceof AxiosError) {
        dispatch(getTicketsFailure(error.response?.data.message))
      }
      dispatch(getTicketsFailure('Error ao buscar dados do servidor'))
    }
  }

export default ticketsSlice.reducer
