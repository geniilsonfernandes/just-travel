'use client'

import Checkbox from '../Checkbox'
import FilterButton from '../FilterButton'
import ReviewScore from '../ReviewScore'
import Typography from '../Typography'
import Icons from '../ui/Icons'

import {
  filterConvenience,
  filterPrices,
  filterScores,
  filterStars,
  filterTypes,
} from './mock'

type FilterSectionProps = {
  children: React.ReactNode
  className?: string
  title: string
}
const FilterSection = ({ children, className, title }: FilterSectionProps) => {
  return (
    <div>
      <Typography
        as='h2'
        size='paragraphMedium'
        color='brandBlack'
        className='font-bold pb-3'
      >
        {title}
      </Typography>
      <div className={className}>{children}</div>
    </div>
  )
}

/* Checkbox */

const Filter = () => {
  return (
    <div className='p-6 bg-white shadow-sm'>
      <div className='flex justify-between'>
        <Typography size='headingMedium' color='brandBlack'>
          Filtro
        </Typography>

        <div className='flex items-center justify-center gap-2'>
          <button className='px-2 py-1 hover:bg-brand-color-blue/15 rounded'>
            <Typography size='paragraphNormal' color='brandBlue'>
              Limpar todos os filtros
            </Typography>
          </button>

          <button className='text-gray-900 w-6 h-6 sm:hidden hover:bg-brand-color-blue/15 rounded flex items-center justify-center'>
            <Icons.CaretDown />
          </button>
        </div>
      </div>
      <div className='h-[1px] bg-gray-10 w-full mb-6 mt-4' />
      <div>
        <FilterSection title='Preço' className='flex flex-wrap gap-2'>
          {filterPrices.map((value, i) => (
            <FilterButton key={i} active={i === 0} value='R$ 10,00 - R$ 390,00'>
              {value}
            </FilterButton>
          ))}
        </FilterSection>
        <div className='h-[1px] bg-gray-10 w-full my-6' />
        <FilterSection title='Estrelas' className='flex flex-wrap gap-2'>
          {filterStars.map(({ count, stars }) => {
            return (
              <FilterButton
                value={stars.toString()}
                className='flex gap-1'
                key={stars}
              >
                <>
                  {Array.from({ length: stars }, (_, i) => {
                    return <Icons.Star key={i} />
                  })}
                  ({count})
                </>
              </FilterButton>
            )
          })}
        </FilterSection>
        <div className='h-[1px] bg-gray-10 w-full my-6' />
        <FilterSection title='Comodidades' className='flex flex-col gap-2'>
          {filterConvenience.map((convencience, i) => (
            <Checkbox
              ariaLabel='Comodidade'
              value={convencience}
              key={convencience}
              checked={i === 0}
              id={convencience}
            />
          ))}
        </FilterSection>
        <div className='h-[1px] bg-gray-10 w-full my-6' />
        <FilterSection
          title='Tipo de propriedade'
          className='flex flex-col gap-2'
        >
          {filterTypes.map(({ count, icon, value }, i) => (
            <FilterButton
              key={value}
              value={value}
              active={i === 0}
              variant='outline'
              className='flex gap-1'
            >
              {icon} {value} {`(${count})`}
            </FilterButton>
          ))}
        </FilterSection>
        <div className='h-[1px] bg-gray-10 w-full my-6' />
        <FilterSection title='Review Score' className='flex flex-col gap-2'>
          {filterScores.map(({ count, indicator, label, score }) => (
            <ReviewScore
              label={`${label} (${count})`}
              indicator={indicator}
              score={score}
              key={label}
            />
          ))}
        </FilterSection>
      </div>
    </div>
  )
}

export default Filter
