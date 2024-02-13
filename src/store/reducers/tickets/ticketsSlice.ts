import { ITicketDTO } from '@/api/DTOS/Ticket.DTO'
import { ticketsAPI } from './../../../api/index'

import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

interface TicketsState {
  data: ITicketDTO[]
  loading: boolean
  error: string | null
}

const initialState: TicketsState = {
  data: [],
  loading: false,
  error: null,
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
  },
})

export const { getTicketsStart, getTicketsSuccess, getTicketsFailure } =
  ticketsSlice.actions

export default ticketsSlice.reducer

export const fetchTickets =
  (params: { page: number; limit: number } = { page: 1, limit: 6 }) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(getTicketsStart())
      const response = await ticketsAPI.getTickets({
        limit: params.limit,
        page: params.page,
      })
      dispatch(getTicketsSuccess(response))
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(getTicketsFailure(error.response?.data.message))
      }
      dispatch(getTicketsFailure('Error ao buscar dados do servidor'))
    }
  }
