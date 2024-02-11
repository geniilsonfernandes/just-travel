import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Button from '.'

describe('Button', () => {
  it('should render Button', () => {
    render(<Button />)

    screen.getByText('Button')

    expect(screen.getByText('Button')).toBeTruthy()
  })
})

