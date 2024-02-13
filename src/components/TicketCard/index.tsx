'use client'

import { MapPin } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import PriceTicket from '../PriceTicket'
import ReviewTag, { ReviewTagProps } from '../ReviewTag'
import Typography from '../Typography'

import Link from 'next/link'
import Badge from '../Badge'
import Favorite from '../Favorite'
import Icons from '../ui/Icons'

type TicketCardProps = {
  tag: ReviewTagProps
  title: string
  description: string
  price: number
  promotionalPrice?: number
  currency: string
  imageSrc: string
  imageAlt: string
  link: string
  isFavorite?: boolean
}

const TicketCard = ({
  tag,
  currency,
  description,
  imageAlt,
  imageSrc,
  link,
  price,
  title,
  promotionalPrice,
  isFavorite = false,
}: TicketCardProps) => {
  return (
    <div className='flex flex-col w-full sm:flex-row  bg-white shadow-md '>
      <div className='w-full sm:w-[213px] h-[233px] relative'>
        <div className='absolute top-0 left-0 flex justify-between p-3 w-full items-center'>
          <Badge label='Ingresso' />

          <Favorite isFavorite={isFavorite} onClick={() => {}} />
        </div>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={213}
          height={233}
          className='bg-gray-10 object-cover w-full h-full'
        />
      </div>
      <div className='py-10 px-6 h-full flex flex-1 '>
        <div className='flex flex-col justify-between gap-1 h-full flex-1 border-r border-gray-200'>
          <div>
            <Typography as='h3' color='brandBlack' className='font-bold'>
              {title}
            </Typography>

            <div className='flex items-start gap-4 pr-4  '>
              <div className='w-4'>
                <MapPin size={21} className='text-brand-color-blue' />
              </div>
              <Typography size='paragraphSmall' as='p' color={'information'}>
                {description}
              </Typography>
            </div>
          </div>
          <ReviewTag
            label={tag?.label}
            review={tag?.review}
            link={tag?.link}
            reviewsCount={tag?.reviewsCount}
          />
        </div>
        <div className='px-6 w-48 h-full  flex flex-col justify-between '>
          <PriceTicket
            price={price}
            promotionalPrice={promotionalPrice}
            currency={currency}
          />
          <Link href={link} passHref>
            <button className='h-[38px] w-full  rounded  bg-brand-color-blue hover:bg-brand-color-blue/20 flex justify-center items-center gap-1 text-white font-book'>
              Saber mais <Icons.ArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TicketCard
