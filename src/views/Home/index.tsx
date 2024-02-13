'use client'

import Empty from '@/components/Empty'
import ErrorMessage from '@/components/ErrorMessage'
import Filter from '@/components/Filter'
import Pagination from '@/components/Pagination'
import RenderIf from '@/components/RenderIf'
import Search from '@/components/Search'
import TicketCard from '@/components/TicketCard'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchTickets } from '@/store/reducers/tickets/ticketsSlice'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, isError, isEmpty } = useAppSelector(
    (state) => state.tickets
  )

  useEffect(() => {
    dispatch(fetchTickets())
  }, [])

  const changePage = (newPage: number) => {
    dispatch(fetchTickets({ page: newPage, limit: 6 }))
  }

  const changeItemsPerPage = (newItemsPerPage: number) => {
    dispatch(fetchTickets({ page: 1, limit: newItemsPerPage }))
  }

  return (
    <div>
      <div className='bg-white px-6 sm:px-0'>
        <Search />
      </div>

      <div className='container py-9 h-full grid grid-cols-12 gap-8 px-6 sm:px-0'>
        <div className='col-span-12 sm:col-span-12 md:col-span-4 '>
          <Filter />
        </div>

        <RenderIf condition={isError}>
          <div className='flex flex-col col-span-8 gap-6'>
            <ErrorMessage
              error={error || 'Erro ao buscar ingressos'}
              onClick={() => dispatch(fetchTickets())}
            />
          </div>
        </RenderIf>

        <RenderIf condition={!isError && isLoading}>
          <div className='flex flex-col col-span-8 gap-6' aria-label='loading'>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className='h-[256px] bg-gray-10 animate-pulse' />
            ))}
          </div>
        </RenderIf>

        <RenderIf condition={!isError && !isLoading && isEmpty}>
          <div className='flex flex-col col-span-8 gap-6'>
            <Empty onClick={() => dispatch(fetchTickets())} />
          </div>
        </RenderIf>

        <RenderIf condition={!isError && !isLoading && !isEmpty}>
          <div className='flex flex-col col-span-12 sm:col-span-12 md:col-span-8 gap-6 '>
            {data.map((ticket, i) => (
              <TicketCard
                key={ticket.id + i}
                title={ticket.name}
                isFavorite={false}
                link={`/ingresso/${ticket.id}`}
                currency='R$'
                description={ticket.location}
                imageAlt={ticket.name}
                imageSrc={ticket.image}
                price={ticket.price.full}
                promotionalPrice={ticket.price.discount}
                tag={{
                  reviewsCount: ticket.rating.reviewsCount,
                  review: ticket.rating.value,
                  label: `${ticket.rating.reviewsCount} avaliações`,
                  link: 'https://just-travel.com/avaliacoes',
                }}
              />
            ))}
          </div>
        </RenderIf>
      </div>
      <div className='container pb-9  flex justify-end'>
        <Pagination
          total={data.length}
          totalPages={10}
          onPageChange={(page) => changePage(page)}
          onItemsPerPageChange={(itemsPerPage) =>
            changeItemsPerPage(itemsPerPage)
          }
        />
      </div>
    </div>
  )
}

export default Home
