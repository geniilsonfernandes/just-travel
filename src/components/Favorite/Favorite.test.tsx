import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Favorite from '.'

const onClick = vi.fn()

describe('Favorite', () => {
  it('should render Favorite and call onClick', () => {
    render(<Favorite isFavorite={false} onClick={onClick} />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
  })
  it('should render Favorite and be active', () => {
    render(<Favorite isFavorite={true} onClick={onClick} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
  })
})
