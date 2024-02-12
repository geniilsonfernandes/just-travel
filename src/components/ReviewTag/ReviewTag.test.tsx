import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ReviewTag from '.'

describe('ReviewTag', () => {
  it('should render ReviewTag', () => {
    render(<ReviewTag label='ReviewTag' link='/' review={0} reviewsCount={0} />)

    expect(screen.getByText('ReviewTag')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()

    expect(screen.getByText('(0 Reviews)')).toBeInTheDocument()
  })
})
