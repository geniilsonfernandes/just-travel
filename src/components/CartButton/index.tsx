import { ShoppingCartSimple } from '@phosphor-icons/react'

const CartButton = () => {
  return (
    <button
      className='h-[50px] px-3 bg-primary-100 rounded flex items-center gap-2 hover:bg-primary-200 transition-colors duration-300'
      aria-label='Cart button'
      name='Cart button'
    >
      <ShoppingCartSimple size={20} weight='fill' />
      <div
        className='h-[32px] w-[32px]	bg-white/25 rounded-full flex items-center justify-center'
        aria-label='Cart quantity'
      >
        0
      </div>
    </button>
  )
}

export default CartButton
