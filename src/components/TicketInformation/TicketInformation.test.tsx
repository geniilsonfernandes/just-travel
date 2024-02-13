import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import TicketInformation from '.'

describe('TicketInformation', () => {
  it('should render TicketInformation', () => {
    render(<TicketInformation price='R$245,99' title='01 Ingresso infantil' />)

    expect(screen.getByText('01 Ingresso infantil')).toBeInTheDocument()
    expect(screen.getByText('R$245,99')).toBeInTheDocument()
  })
})
