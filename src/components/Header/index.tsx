'use client'

import { User } from '@phosphor-icons/react'
import Button from '../Button'
import CartButton from '../CartButton'
import ExchangeRate from '../ExchangeRate'
import Logo from '../Logo'

const Header = () => {
  return (
    <nav className='border-b-[1px] border-gray-10' aria-label='Header'>
      <div className='flex items-center justify-between py-6 container'>
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
            <CartButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
