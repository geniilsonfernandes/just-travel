import * as CheckboxRadix from '@radix-ui/react-checkbox'

import { cn } from '@/utils'
import { FormEvent } from 'react'
import Icons from '../ui/Icons'

type CheckBoxProps = {
  value: string
  checked: boolean
  id: string
  ariaLabel?: string
  onClick?: (e: FormEvent<HTMLButtonElement>) => void
}
const Checkbox = ({
  checked = false,
  value,
  id,
  onClick,
  ariaLabel,
}: CheckBoxProps) => {
  return (
    <div className='flex items-center' aria-label={ariaLabel} role='checkbox'>
      <CheckboxRadix.Root
        className={cn(
          'hover:bg-violet3 flex h-[20px] w-[20px] border-2  appearance-none items-center justify-center rounded-[4px] bg-white outline-none',
          checked ? 'border-brand-color-blue' : 'border-gray-400'
        )}
        checked={checked}
        onChange={(e) => onClick?.(e)}
        id={id}
        onClick={(e) => {
          onClick?.(e)
        }}
      >
        <CheckboxRadix.Indicator className='text-primary-100'>
          <Icons.Check />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <label
        className='ml-2 text-brand-color-black font-medium text-sm cursor-pointer'
        htmlFor={id}
      >
        {value}
      </label>
    </div>
  )
}

export default Checkbox
