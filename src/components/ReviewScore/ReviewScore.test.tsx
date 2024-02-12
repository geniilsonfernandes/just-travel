import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import ReviewScore from '.'

describe('ReviewScore Rendering', () => {
  it('should render ReviewScore correctly', () => {
    render(<ReviewScore indicator='10+' label='Excelente' score={9} />)

    expect(screen.getByText('Excelente')).toBeInTheDocument()
    expect(screen.getByText('10+')).toBeInTheDocument()
  })
})
describe('ReviewScore Style', () => {
  it('should render ReviewScore correctly', () => {
    render(<ReviewScore indicator='10+' label='Excelente' score={9} />)

    const indicator = screen.getByLabelText('Score indicator')

    // 9 * 25 = 225
    expect(indicator).toHaveStyle({
      width: '225px',
    })
  })
})
