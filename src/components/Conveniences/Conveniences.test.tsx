import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Conveniences from '.'

describe('Conveniences', () => {
  it('should render Conveniences and show all', () => {
    render(
      <Conveniences airplane={true} wifi={true} breakfast={true} room={true} />
    )

    expect(screen.getByText('Wi-fi')).toBeInTheDocument()
    expect(screen.getByText('Passagem Aérea')).toBeInTheDocument()
    expect(screen.getByText('Café de manhã')).toBeInTheDocument()
    expect(screen.getByText('Quarto')).toBeInTheDocument()
  })
  it('should render Conveniences and show only wifi', () => {
    render(
      <Conveniences
        airplane={false}
        wifi={true}
        breakfast={false}
        room={false}
      />
    )

    expect(screen.getByText('Wi-fi')).toBeInTheDocument()
    expect(screen.queryByText('Passagem Aérea')).not.toBeInTheDocument()
  })
})
