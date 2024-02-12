import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Header from '.'

vi.mock('../CartButton', () => ({
  default: () => <div data-testid='Cart button'>Cart button</div>,
}))

vi.mock('../ExchangeRate', () => ({
  default: () => <div data-testid='ExchangeRate'>ExchangeRate</div>,
}))

describe('Header rendering', () => {
  it('should render Header correctly', () => {
    render(<Header />)

    expect(screen.getByLabelText('Header')).toBeTruthy()
    expect(screen.getByTestId('Cart button')).toBeTruthy()
    expect(screen.getByTestId('ExchangeRate')).toBeTruthy()
  })
})
