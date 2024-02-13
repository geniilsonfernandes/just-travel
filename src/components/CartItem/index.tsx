import { Icart } from '@/store/reducers/cart/cartSlice'
import { formatPrice } from '@/utils'
import Image from 'next/image'
import Icons from '../ui/Icons'

type CartItemProps = {
  onRemoveCartItem: () => void
} & Icart
const CartItem = ({
  id,
  ticket,
  onRemoveCartItem,
  quantity,
}: CartItemProps) => {
  return (
    <div key={id} className='mb-4 w-full' aria-label='Cart item'>
      <div className='flex gap-4'>
        <div className='w-[57px] h-[62px] relative'>
          <Image
            src={ticket.image}
            alt={ticket.image}
            width={57}
            height={62}
            className='bg-gray-10 object-cover w-full h-full'
          />
        </div>
        <div className='flex-1'>
          <div className='flex justify-between'>
            <div className='text-sm text-info/70 font-book'>{ticket.name}</div>
            <button
              type='button'
              className='w-6 h-6'
              aria-label='Remove cart item'
              onClick={(e) => {
                e.stopPropagation()
                onRemoveCartItem()
              }}
            >
              <Icons.Trash />
            </button>
          </div>
          <div className='flex gap-1 mt-1'>
            <span className='text-sm text-info/70 font-book'>
              1 Adulto: R$500,00
            </span>
            <span className='text-sm text-info/70 font-book'>
              3 Adulto: R$500,00
            </span>
          </div>
          <div className='h-[1px] bg-gray-10 w-full' />
          <div className='flex justify-between mt-1' aria-label='tickets total'>
            <div className='text-sm text-info/70 font-book'>Qtd {quantity}</div>
            <div className='text-sm text-info/70 font-book'>
              {formatPrice(ticket.price.full * quantity)}
            </div>
          </div>
          <div className='flex justify-between mt-1' aria-label='subtotal'>
            <div className='text-sm text-info font-bold'>Subtotal</div>
            <div className='text-sm text-info font-bold'>
              {formatPrice(ticket.price.full * quantity)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
