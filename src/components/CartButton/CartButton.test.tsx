import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import CartButton from '.'

vi.mock('@/components/Cart', () => ({
  default: () => <div data-testid='Cart'>Cart</div>,
}))

const onRemoveCartItem = vi.fn()

describe('CartButton', () => {
  it('should render CartButton', () => {
    render(
      <CartButton cart={[]} onRemoveCartItem={onRemoveCartItem} cartItems={0} />
    )

    expect(screen.getByRole('button', { name: 'Cart button' })).toBeTruthy()
  })
  it('should open cart when button is clicked and close', async () => {
    render(
      <CartButton cart={[]} onRemoveCartItem={onRemoveCartItem} cartItems={0} />
    )

    const cartButton = screen.getByRole('button', { name: 'Cart button' })
    fireEvent.click(cartButton)
    expect(screen.getByRole('dialog', { name: 'Cart' })).toBeTruthy()

    fireEvent.click(cartButton)

    expect(screen.queryByRole('dialog', { name: 'Cart' })).toBeNull()
  })
})
