import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import TicketOption from '.'

describe('TicketOption', () => {
  it('should render TicketOption', () => {
    render(
      <TicketOption icon={<span>icon</span>} label='label' title='title' />
    )

    expect(screen.getByText('title')).toBeInTheDocument()
    expect(screen.getByText('label')).toBeInTheDocument()
    expect(screen.getByText('icon')).toBeInTheDocument()
  })
})
