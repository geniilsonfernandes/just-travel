import { Icart } from "@/store/reducers/cart/cartSlice"

import { DISCOUNT } from "@/shared/cart"
import { formatPrice } from "@/utils"
import CartItem from "../CartItem"

type CartProps = {
  cart: Icart[]
  onRemoveCartItem: (id: string) => void
}

const Cart = ({ cart, onRemoveCartItem }: CartProps) => {
  const total = cart.reduce((acc, item) => {
    return acc + item.ticket.price.full * item.quantity
  }, 0)

  const discount = total * DISCOUNT

  return (
    <div className='p-7'>
      <div className='text-sm font-bold text-brand-color-black'>Ingressos</div>

      <div className='mt-4'>
        {cart.length === 0 && (
          <div className='text-sm text-info/70 text-center my-5'>
            seu carrinho esta vazio
          </div>
        )}
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CartItem
                {...item}
                onRemoveCartItem={() => onRemoveCartItem(item.id)}
              />
            </div>
          )
        })}
      </div>
      <div className='h-[1px] bg-gray-10 w-full mb-4' />
      <div className='flex justify-between mt-1' aria-label='all tickets'>
        <div className='text-sm text-info/70 font-book'>Ingressos</div>
        <div className='text-sm text-info/70 font-book'>
          {formatPrice(total)}
        </div>
      </div>

      <div className='flex justify-between mt-1' aria-label='subtotal total'>
        <div className='text-sm text-info font-bold'>Subtotal</div>
        <div className='text-sm text-info font-bold'>{formatPrice(total)}</div>
      </div>

      <div className='flex justify-between mt-1' aria-label='discount'>
        <div className='text-sm text-info/70 font-book'>
          1X de {formatPrice(total)} com desconto de
          <span className='text-brand-color-green'> (7%)</span>
        </div>
        <div className='text-sm text-brand-color-green font-bold'>
          - {formatPrice(discount)}
        </div>
      </div>
      <div className='flex justify-between mt-1' aria-label='payment parcel'>
        <div className='text-sm text-info/70 font-book'>
          10X Sem juros de {formatPrice(total / 10)}
        </div>
        <div className='text-sm text-info/70 font-book'>
          {formatPrice(total / 10)}
        </div>
      </div>
      <div className='h-[1px] bg-gray-10 w-full my-4' />
      <div
        className='flex items-center justify-between mt-1'
        aria-label='total'
      >
        <div className='text-sm text-info font-bold'>Valor total</div>
        <div className='text-lg text-brand-color-blue'>
          {formatPrice(total)}
        </div>
      </div>
    </div>
  )
}

export default Cart
