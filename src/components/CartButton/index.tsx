import useClickOutside from '@/hooks/useClickOutside'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { useState } from 'react'
import Typography from '../Typography'

// type ClikOutsideProps = React.HTMLAttributes<HTMLDivElement>
// const ClikOutside = (props: ClikOutsideProps) => (
//   <div className='fixed top-0 left-0 w-full h-full ' {...props} />
// )

const CartButton = () => {
  const cartItems = 5

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
          <ShoppingCartSimple size={20} weight='fill' />
        </span>
        <div
          className='h-[32px] min-w-[32px] px-1 bg-white/25 rounded-full flex items-center justify-center font-medium'
          aria-label='Cart quantity'
        >
          {cartItems}
        </div>
      </button>
      {/* {show && <ClikOutside onClick={handleTogle} />} */}
      {show && (
        <div
          className='absolute w-[494px] h-[250px] bg-white shadow-lg right-0 top-[80px] animate-fadeIn'
          ref={ref}
          aria-label='Cart'
          role='dialog'
        >
          <Typography as='span' className='text-white'>
            cart
          </Typography>
        </div>
      )}
    </div>
  )
}

export default CartButton
