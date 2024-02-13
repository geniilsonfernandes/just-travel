import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Empty from '.'

const onClick = vi.fn()

describe('Empty', () => {
  it('should render Empty', () => {
    render(<Empty onClick={onClick} />)

    expect(
      screen.getByText('Ops, parece que nenhum resultado foi encontrado.')
    ).toBeInTheDocument()

    expect(screen.getByText('Tente alterar os filtros')).toBeInTheDocument()

    expect(screen.getByText('Tentar Novamente')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Tentar Novamente'))

    expect(onClick).toHaveBeenCalled()
  })
})
