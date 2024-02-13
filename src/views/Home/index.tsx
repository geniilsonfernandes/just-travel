'use client'

import Filter from '@/components/Filter'
import Header from '@/components/Header'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import TicketCard from '@/components/TicketCard'
import { ticketsMock } from '@/components/TicketCard/mock'

const Home = () => {
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
          {ticketsMock.map((ticket, i) => (
            <TicketCard key={i} {...ticket} />
          ))}
        </div>
      </div>
      <div className='container py-9 grid grid-cols-12 gap-4'>
        <div className='col-span-4 '></div>
        <div className='col-span-8 flex justify-end '>
          <Pagination total={ticketsMock.length} totalPages={10} />
        </div>
      </div>
    </div>
  )
}

export default Home
