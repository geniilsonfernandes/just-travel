import { ticketsAPI } from '@/api'
import { ITicketDTO } from '@/api/DTOS/Ticket.DTO'
import { TicketSchema } from '@/shared/validate'
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

interface TicketsState {
  data: ITicketDTO[]
  error: string | null
  isLoading: boolean
  isError: boolean
  isEmpty: boolean

  //   meta
  currentPage: number
  totalPages: number
  ItemsPerPage: number

  //   search
  search: string
}

const initialState: TicketsState = {
  data: [],
  isLoading: false,
  error: null,
  isError: false,
  isEmpty: false,
  //   meta
  currentPage: 1,
  totalPages: 1,
  ItemsPerPage: 6,
  //
  search: '',
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getTicketsStart(state) {
      state.isLoading = true
      state.error = null
      state.isError = false
      state.isEmpty = false
    },
    getTicketsSuccess(state, action: PayloadAction<ITicketDTO[]>) {
      state.isLoading = false
      state.data = action.payload
      state.isError = false
      state.isEmpty = action.payload.length === 0
    },
    getTicketsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
      state.isError = true
      state.isEmpty = false
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

      if (cachedData && Date.now() - cachedData.timestamp < 60 * 1000) {
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

      if (response.length === 0) {
        dispatch(getTicketsSuccess([]))
        return
      }

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

export const searchTickets = (search: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(getTicketsStart())
    const response = await ticketsAPI.searchTickets({
      page: 1,
      limit: 6,
      search,
    })

    if (response.length === 0) {
      dispatch(getTicketsSuccess([]))
    }

    dispatch(getTicketsSuccess(response))
  } catch (error) {
    dispatch(getTicketsSuccess([]))
  }
}

export default ticketsSlice.reducer
