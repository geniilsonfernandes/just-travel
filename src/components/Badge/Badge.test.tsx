import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Badge from '.'

describe('Badge', () => {
  it('should render Badge', () => {
    render(<Badge label='Badge' color='blue' />)

    const badge = screen.getByText('Badge')

    expect(badge).toBeInTheDocument()
  })
  it('should render Badge and have correct color', () => {
    render(<Badge label='Badge' color='blue' />)

    const badge = screen.getByText('Badge')

    expect(badge).toHaveClass('bg-brand-color-blue')
  })
})
