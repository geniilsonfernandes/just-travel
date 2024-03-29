import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import CartItem from '.'
import { cartMock } from '../Cart/mock'

const cartItem = cartMock[0]

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
