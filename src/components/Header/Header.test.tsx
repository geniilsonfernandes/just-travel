import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Header from '.'
describe('Header', () => {
  it('should render', () => {
    render(<Header />)

    screen.getByText('Header')

    expect(screen.getByText('Header')).toBeTruthy()
  })
})
