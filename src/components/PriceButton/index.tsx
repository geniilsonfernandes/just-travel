import { cva } from 'class-variance-authority'

import Typography from '../Typography'

const PriceButtonStyles = cva(
  ['h-[34] p-2 inline-flex items-center rounded-sm '],
  {
    variants: {
      active: {
        true: 'border border-transparent bg-brand-color-blue hover:bg-brand-color-blue/80 transition-colors duration-300',
        false:
          'border border-gray-200 hover:bg-brand-color-blue/10 transition-colors duration-300',
      },
    },
  }
)

type PriceButtonProps = {
  value: string
  active?: boolean
  onClick?: () => void
}

const PriceButton = ({ value, active = false, onClick }: PriceButtonProps) => {
  return (
    <button
      className={PriceButtonStyles({ active })}
      aria-label={value}
      aria-selected={active}
      name={value}
      onClick={onClick}
    >
      <Typography
        as='span'
        size='paragraphNormal'
        color={active ? 'white' : 'gray200'}
      >
        {value}
      </Typography>
    </button>
  )
}

export default PriceButton
