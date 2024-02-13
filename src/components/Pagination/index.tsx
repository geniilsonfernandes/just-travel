import usePagination from '@/hooks/usePagination'
import { cn } from '@/utils'
import { CaretLeft } from '@phosphor-icons/react'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'

type PaginationProps = {
  onPageChange?: (page: number) => void
  onItemsPerPageChange?: (itemsPerPage: number) => void
  totalPages?: number
  total?: number
}

const Pagination = ({
  onItemsPerPageChange,
  onPageChange,
  totalPages = 10,
  total,
}: PaginationProps) => {
  const pagination = usePagination({
    totalPages: totalPages,
    initialPage: 1,
    sibling: 1,
    onPageChange: (page) => {
      console.log(page)

      onPageChange?.(page)
    },
    modeInfinite: true,
  })

  const { range, currentPage, handlePageChange, nextPage, prevPage } =
    pagination

  return (
    <div className='flex gap-2 items-center'>
      <span className='text-info font-book text-xs'>{total} Resultados</span>
      <div className='flex items-center gap-2'>
        <span className='text-info font-bold text-xs'>Por página</span>
        <select
          aria-label='Items per page'
          onChange={(e) => {
            onItemsPerPageChange?.(Number(e.target.value))
            handlePageChange(1)
          }}
          className='text-info border border-brand-color-blue rounded w-14 text-xs h-6'
        >
          {[6, 12, 20].map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <button
        onClick={prevPage}
        className='w-6 h-6 flex items-center justify-center text-brand-color-blue'
        aria-label='Previous page'
      >
        <CaretLeft size={16} weight='bold' />
      </button>
      <ul className='flex gap-4 text-brand-color-blue/70'>
        {range.map((item, index) => (
          <li key={index}>
            {item === '...' ? (
              '...'
            ) : (
              <button
                onClick={() => {
                  onPageChange?.(item as number)
                  handlePageChange(item as number)
                }}
                aria-label={`Go to page ${item}`}
                role='button'
                className={cn('w-6 h-6 font-book', {
                  'font-bold text-brand-color-blue': currentPage === item,
                })}
              >
                {item}
              </button>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={nextPage}
        className='w-6 h-6 flex items-center justify-center text-brand-color-blue'
        aria-label='Next page'
      >
        <CaretRight size={16} weight='bold' />
      </button>
    </div>
  )
}

export default Pagination
