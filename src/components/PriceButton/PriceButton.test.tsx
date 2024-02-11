import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import PriceButton from '.'

const onClick = vi.fn()

const props = {
  value: 'R$ 10,00 - R$ 390,00',
  active: true,
}

describe('PriceButton', () => {
  it('should render PriceButton and be active', () => {
    render(<PriceButton {...props} onClick={onClick} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)

    expect(button.textContent).toBe(props.value)
    expect(onClick).toBeCalledTimes(2)
  })
})
