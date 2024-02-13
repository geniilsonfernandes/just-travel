'use client'

import Filter from '@/components/Filter'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import TicketCard from '@/components/TicketCard'
import { ticketsMock } from '@/components/TicketCard/mock'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchTickets } from '@/store/reducers/tickets/ticketsSlice'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useAppDispatch()
  const { data, error, loading } = useAppSelector((state) => state.tickets)

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  const changePage = (newPage: number) => {
    console.log(newPage)

    dispatch(fetchTickets({ page: newPage, limit: 6 }))
  }

  return (
    <div>
      <div className='bg-white'>
        <Header />
        <Search />
      </div>

      <div className='container py-9 h-full grid grid-cols-12 gap-4 '>
        <div className='col-span-4 '>
          <Filter />
        </div>
        <div className='col-span-8 flex flex-col gap-4'>
          {data.map((ticket, i) => (
            <TicketCard key={i} {...ticketsMock[0]} title={ticket.name} />
          ))}
        </div>
      </div>
      <div className='container py-9 grid grid-cols-12 gap-4'>
        <div className='col-span-4 '></div>
        <div className='col-span-8 flex justify-end '>
          <Pagination
            total={ticketsMock.length}
            totalPages={10}
            onPageChange={(page) => changePage(page)}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
