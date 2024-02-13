import axios, { AxiosResponse } from 'axios'
import { ITicketDTO } from './DTOS/Ticket.DTO'

const baseURL = 'https://65b98494b71048505a8aea91.mockapi.io/api/v1'

const axiosInstance = axios.create({
  baseURL,
})

export interface ITicketsAPI {
  getTickets(params: { page: number; limit: number }): Promise<ITicketDTO[]>
  searchTickets(params: {
    page: number
    limit: number
    search: string
  }): Promise<ITicketDTO[]>
  getTicket(id: string): Promise<ITicketDTO>
}

export const ticketsAPI: ITicketsAPI = {
  async getTickets(
    params: {
      page: number
      limit: number
    } = { page: 1, limit: 6 }
  ): Promise<ITicketDTO[]> {
    const response: AxiosResponse<ITicketDTO[]> = await axiosInstance.get(
      '/tickets',
      { params }
    )

    console.log(response.data)

    return response.data || []
  },

  async searchTickets(
    params: {
      page: number
      limit: number
      search: string
    } = { page: 1, limit: 6, search: '' }
  ): Promise<ITicketDTO[]> {
    const response: AxiosResponse<ITicketDTO[]> = await axiosInstance.get(
      '/tickets',
      {
        params: {
          ...params,
        },
      }
    )
    return response.data || []
  },

  async getTicket(id: string): Promise<ITicketDTO> {
    const response: AxiosResponse<ITicketDTO> = await axiosInstance.get(
      `/tickets/${id}`
    )

    return response.data || {}
  },
}
