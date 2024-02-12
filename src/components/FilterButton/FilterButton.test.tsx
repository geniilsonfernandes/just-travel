import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import FilterButton from '.'

const onClick = vi.fn()

describe('FilterButton Rendering', () => {
  it('should render FilterButton correctly', () => {
    render(
      <FilterButton variant='fill' active={true} value='foo' onClick={onClick}>
        foo
      </FilterButton>
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('foo')
    expect(button).toHaveAttribute('aria-selected', 'true')
  })
})

describe('FilterButton Style', () => {
  it('should have correct background color when active', () => {
    render(
      <FilterButton variant='fill' active={true} value='foo' onClick={onClick}>
        foo
      </FilterButton>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('bg-brand-color-blue')
  })
  it('should have correct border color when active and outline variant', () => {
    render(
      <FilterButton
        variant='outline'
        active={true}
        value='foo'
        onClick={onClick}
      >
        foo
      </FilterButton>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('border-brand-color-blue')
  })
  it('should have correct border color when inactive and outline variant', () => {
    render(
      <FilterButton
        variant='outline'
        active={false}
        value='foo'
        onClick={onClick}
      >
        foo
      </FilterButton>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveClass('border-gray-200')
  })
})

describe('FilterButton Functionality', () => {
  it('should call onClick function twice when button is clicked twice', () => {
    render(
      <FilterButton
        variant='outline'
        active={false}
        value='foo'
        onClick={onClick}
      >
        foo
      </FilterButton>
    )

    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(onClick).toBeCalledTimes(2)
  })
})
