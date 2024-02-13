import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import CartItem from '.'

const cartItem = {
  id: '1',
  name: 'teste',
  price: 100,
  quantity: 2,
  ticket: {
    createdAt: '2022-01-01T00:00:00.000Z',
    description: 'lorem ipsum dolor sit amet',
    id: '1',
    image: '/image.png',
    location: 'Brasil',
    name: 'teste',
    price: {
      discount: 60,
      full: 100,
    },
    rating: {
      reviewsCount: 10,
      value: 3.5,
    },
    updatedAt: '2022-01-01T00:00:00.000Z',
  },
}

const onRemoveCartItem = vi.fn()

describe('CartItem', () => {
  it('should render CartItem', () => {
    render(<CartItem {...cartItem} onRemoveCartItem={onRemoveCartItem} />)

    const image = screen.getByRole('img')
    const quantity = screen.getByLabelText('tickets total')
    const total = screen.getByLabelText('subtotal')

    expect(image).toBeInTheDocument()

    expect(quantity.childNodes[0]).toHaveTextContent('Qtd 2')

    expect(total.childNodes[1]).toHaveTextContent('R$ 200,00')
  })

  it('should call onRemoveCartItem when button is clicked', () => {
    render(<CartItem {...cartItem} onRemoveCartItem={onRemoveCartItem} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(onRemoveCartItem).toBeCalledTimes(1)
  })
})
