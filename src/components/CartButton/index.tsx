import useClickOutside from '@/hooks/useClickOutside'
import { Icart } from '@/store/reducers/cart/cartSlice'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import Cart from '../Cart'

// type ClikOutsideProps = React.HTMLAttributes<HTMLDivElement>
// const ClikOutside = (props: ClikOutsideProps) => (
//   <div className='fixed top-0 left-0 w-full h-full ' {...props} />
// )

type CartButtonProps = {
  cart: Icart[]
  onRemoveCartItem: (id: string) => void
}

const CartButton = ({ cart = [], onRemoveCartItem }: CartButtonProps) => {
  const [show, setShow] = useState(false)

  const handleTogle = () => {
    setShow(!show)
  }

  const ref = useClickOutside(show, handleTogle)

  return (
    <div className='relative'>
      <button
        className='h-[50px] px-2 pl-3 bg-primary-100 rounded flex items-center gap-[6px] hover:bg-primary-200 transition-colors duration-300'
        aria-label='Cart button'
        name='Cart button'
        onClick={handleTogle}
      >
        <span className='px-1'>
          <ShoppingCartSimple size={20} weight='fill' className='text-white' />
        </span>
        <div
          className='h-[32px] min-w-[32px] px-1 bg-white/25 rounded-full flex items-center justify-center font-medium text-white'
          aria-label='Cart quantity'
        >
          {cart.length || 0}
        </div>
      </button>
      {/* {show && <ClikOutside onClick={handleTogle} />} */}
      {show && (
        <div
          className='absolute w-[494px] min-h-[250px] bg-white shadow-lg right-0 top-[80px] animate-fadeIn z-50'
          ref={ref}
          aria-label='Cart'
          role='dialog'
        >
          <Cart cart={cart} onRemoveCartItem={onRemoveCartItem} />
        </div>
      )}
    </div>
  )
}

export default CartButton
