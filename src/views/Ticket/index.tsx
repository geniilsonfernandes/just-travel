'use client'

import { ITicketDTO } from '@/api/DTOS/Ticket.DTO'
import Conveniences from '@/components/Conveniences'
import PriceTicket from '@/components/PriceTicket'
import ReviewTag from '@/components/ReviewTag'
import TicketInformation from '@/components/TicketInformation'
import TicketOption from '@/components/TicketOption'
import Typography from '@/components/Typography'
import Icons from '@/components/ui/Icons'
import { useAppDispatch } from '@/store'
import { addToCart } from '@/store/reducers/cart/cartSlice'
import { MapPin } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

type TicketProps = {
  data: ITicketDTO
}

const Ticket = ({ data }: TicketProps) => {
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    dispatch(
      addToCart({
        id: data.id,
        name: data.name,
        price: data.price.full,
        quantity: 1,
        ticket: data,
      })
    )
  }
  return (
    <div className='container py-9 h-full '>
      <div className='flex gap-2 px-6 sm:px-0'>
        <Link href={'/'} passHref>
          <button className='flex items-center justify-center w-8 h-8 text-brand-color-black '>
            <Icons.ArrowLeft />
          </button>
        </Link>
        <div>
          <Typography as='h3' color='brandBlack' className='font-bold'>
            {data.name}
          </Typography>

          <div className='flex items-start gap-4 pr-4  '>
            <div className='w-4'>
              <MapPin size={21} className='text-brand-color-blue' />
            </div>
            <Typography size='paragraphSmall' as='p' color={'information'}>
              {data.location}
            </Typography>
          </div>
        </div>
      </div>
      <div className='relative w-full h-[200px] sm:h-[300px] md:h-[400px] my-6'>
        <button className='absolute top-0 right-0 m-4 p-2 bg-white z-10 font-bold text-brand-color-blue rounded-md'>
          Visualizar mais fotos
        </button>
        <Image src={data.image} alt={data.name} fill className='object-cover' />
      </div>

      <div className='grid grid-cols-12  gap-4 px-6 sm:px-0'>
        <div className='col-span-12 sm:col-span-8 flex flex-col gap-4 '>
          <ReviewTag
            label='Avaliação geral'
            review={data.rating.value}
            reviewsCount={data.rating.reviewsCount}
            link='/'
          />
          <Conveniences
            airplane={true}
            wifi={true}
            breakfast={true}
            room={true}
          />
          <div className='mt-4'>
            <Typography
              as='h3'
              color='brandBlack'
              size='headingMedium'
              className='font-bold'
            >
              Sobre o Ingresso selecionado:
            </Typography>
            <Typography
              as='p'
              size='paragraphNormal'
              className='text-gray-400 mt-2'
            >
              {data.description}
            </Typography>
          </div>
          <div>
            <Typography
              as='h3'
              color='brandBlack'
              size='headingMedium'
              className='font-bold'
            >
              Localização
            </Typography>
            <div className='h-[300px] w-full bg-slate-200 mt-4' />
          </div>
        </div>
        <div className='col-span-12 sm:col-span-4'>
          <div className='w-full rounded bg-white shadow-sm p-6'>
            <TicketOption
              icon={<Icons.Calendar />}
              label='22/12/2022'
              title='Data do Ingresso'
            />
            <div className='h-[1px] bg-gray-10 w-full mb-6 mt-4' />
            <TicketOption
              icon={<Icons.User />}
              label='03 Ingressos'
              title='Ingressos'
            />
            <div className='h-[1px] bg-gray-10 w-full mb-6 mt-4' />

            <div className='flex flex-col gap-2'>
              <TicketInformation
                price='R$245,99'
                title='01 Ingresso infantil'
              />
              <TicketInformation price='R$245,99' title='02 Ingresso Adultos' />
            </div>
            <div className='h-[1px] bg-gray-10 w-full mb-6 mt-4' />
            <div className='flex justify-between'>
              <Typography
                as='h3'
                color='brandBlack'
                size='paragraphMedium'
                className='font-bold'
              >
                Valor Total
              </Typography>

              <PriceTicket price={data.price.full} currency='R$' />
            </div>
            <button
              className='w-full h-14 rounded bg-brand-color-blue hover:bg-brand-color-blue/80 text-white mt-4 active:bg-brand-color-blue/30 active:scale-95'
              onClick={handleAdd}
            >
              Comprar Ingresso
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket
