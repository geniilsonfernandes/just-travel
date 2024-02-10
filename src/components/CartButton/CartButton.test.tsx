import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CartButton from '.'

describe('CartButton', () => {
  it('should render CartButton', () => {
    render(<CartButton />)

    expect(screen.getByRole('button', { name: 'Cart button' })).toBeTruthy()
  })
})
