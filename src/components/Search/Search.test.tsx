import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import Search from '.'

afterEach(cleanup)

describe('Search', () => {
  it('should render Search', async () => {
    render(<Search />)
    const input = screen.getByPlaceholderText('Busque por atração')

    expect(input).toBeTruthy()
  })
})
