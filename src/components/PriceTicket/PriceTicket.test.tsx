import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import PriceTicket from '.'

describe('PriceTicket', () => {
  it('should render PriceTicket', () => {
    render(<PriceTicket currency='R$' price={100} />)

    expect(screen.getByText('R$')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
  })
  it('should render PriceTicket with promotional price', () => {
    render(<PriceTicket currency='R$' price={100} promotionalPrice={50} />)

    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText(`de R$ 100 por`)).toBeInTheDocument()
    expect(screen.getByText('R$')).toBeInTheDocument()
  })
})
