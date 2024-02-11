import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Typography from '.'

describe('Typography', () => {
  it('should render Typography as h1', () => {
    render(<Typography as='h1'>Typography</Typography>)

    const Tag = screen.getByText('Typography').tagName

    expect(Tag).toBe('H1')
    expect(screen.getByText('Typography')).toBeTruthy()
  })
  it('should render Typography as h2', () => {
    render(<Typography as='h2'>Typography</Typography>)

    const Tag = screen.getByText('Typography').tagName

    expect(Tag).toBe('H2')
  })
})
