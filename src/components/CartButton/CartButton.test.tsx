import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CartButton from '.'

describe('CartButton', () => {
  it('should render CartButton', () => {
    render(<CartButton />)

    expect(screen.getByRole('button', { name: 'Cart button' })).toBeTruthy()
  })
  it('should open cart when button is clicked and close', async () => {
    render(<CartButton />)
    const cartButton = screen.getByRole('button', { name: 'Cart button' })
    fireEvent.click(cartButton)
    expect(screen.getByRole('dialog', { name: 'Cart' })).toBeTruthy()

    fireEvent.click(cartButton)

    expect(screen.queryByRole('dialog', { name: 'Cart' })).toBeNull()
  })
})
