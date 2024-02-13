'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { getLocalCart } from '@/store/reducers/cart/cartSlice'
import { User } from '@phosphor-icons/react'
import { useEffect } from 'react'
import Button from '../Button'
import CartButton from '../CartButton'
import ExchangeRate from '../ExchangeRate'
import Logo from '../Logo'

const Header = () => {
  const { items } = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLocalCart())
  }, [])
  return (
    <nav className='border-b-[1px] border-gray-10 bg-white' aria-label='Header'>
      <div className='flex items-center justify-between py-6 container px-6 sm:px-0'>
        <Logo />
        <div className='flex items-center gap-1'>
          <div className='max-md:hidden flex items-center gap-1'>
            <ExchangeRate />
            <div className='h-[30px] w-[1px] bg-gray-10 mx-2' />
          </div>
          <div className='flex items-center gap-4 '>
            <Button
              aria-label='Cart button'
              name='Cart button'
              icon={<User size={20} />}
            >
              Entrar
            </Button>
            <CartButton cartItems={items.length} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
