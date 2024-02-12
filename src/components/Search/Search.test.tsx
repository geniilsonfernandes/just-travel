import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import Search from '.'

afterEach(cleanup)

describe('Search rendering', () => {
  it('should render Search and  type in input', async () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Busque por atração')

    fireEvent.change(input, {
      target: { value: 'foo' },
    })

    expect(input).toHaveValue('foo')
  })
})
