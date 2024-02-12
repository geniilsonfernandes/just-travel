import { cva } from 'class-variance-authority'

import Typography from '../Typography'

const FilterButtonStyles = cva(
  ['h-[34px] p-2 inline-flex items-center rounded-sm'],
  {
    variants: {
      active: {
        true: 'text-white border border-transparent bg-brand-color-blue hover:bg-brand-color-blue/80 transition-colors duration-300',
        false:
          'text-gray-200 border border-gray-200 hover:bg-brand-color-blue/10 transition-colors duration-300',
      },
    },
  }
)

const FilterButtonStylesOutline = cva(
  ['h-[34px] p-2 inline-flex items-center rounded-sm'],
  {
    variants: {
      active: {
        true: 'text-brand-color-blue border border-brand-color-blue hover:bg-brand-color-blue/20 transition-colors duration-300',
        false:
          'text-gray-200 border border-gray-200 hover:bg-brand-color-blue/10 transition-colors duration-300',
      },
    },
  }
)

type FilterButtonProps = {
  value: string
  active?: boolean
  onClick?: () => void
  children: React.ReactNode
  variant?: 'fill' | 'outline'
  className?: string
}

/**
 * Button for  filter sidebar
 */

const FilterButton = ({
  value,
  children,
  active = false,
  className,
  variant = 'fill',
  onClick,
}: FilterButtonProps) => {
  return (
    <button
      className={
        variant === 'fill'
          ? FilterButtonStyles({ active })
          : FilterButtonStylesOutline({ active })
      }
      aria-label={value}
      aria-selected={active}
      name={value}
      onClick={onClick}
    >
      <Typography as='div' size='paragraphNormal' className={className}>
        {children}
      </Typography>
    </button>
  )
}

export default FilterButton
