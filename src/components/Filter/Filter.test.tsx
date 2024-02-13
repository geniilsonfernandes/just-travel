import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Filter from '.'

// mocks

vi.mock('../FilterButton', () => ({
  default: () => <div data-testid='FilterButton'>FilterButton</div>,
}))

vi.mock('../ReviewScore', () => ({
  default: () => <div data-testid='ReviewScore'>ReviewScore</div>,
}))

describe('Filter Rendering', () => {
  it('should render Filter correctly', () => {
    render(<Filter />)

    const filterHeader = screen.getByText('Filtro')
    const prices = screen.getByText('Preço')
    const stars = screen.getByText('Estrelas')
    const types = screen.getByText('Tipo de propriedade')
    const convenciences = screen.getByText('Comodidades')
    const review = screen.getByText('Review Score')

    const allConvenciencesCheckboxes = screen.getAllByLabelText('Comodidade')
    const allFilterButtons = screen.getAllByTestId('FilterButton')

    expect(filterHeader).toBeInTheDocument()
    expect(prices).toBeInTheDocument()
    expect(types).toBeInTheDocument()
    expect(stars).toBeInTheDocument()
    expect(convenciences).toBeInTheDocument()
    expect(review).toBeInTheDocument()

    expect(allConvenciencesCheckboxes).toHaveLength(5)
    expect(allFilterButtons).toHaveLength(12)
  })
  it('should render Filter checkboxes', () => {
    render(<Filter />)
    const allConvenciencesCheckboxes = screen.getAllByLabelText('Comodidade')

    expect(allConvenciencesCheckboxes).toHaveLength(5)
  })

  it('should render Filter buttons', () => {
    render(<Filter />)

    const allFilterButtons = screen.getAllByTestId('FilterButton')

    expect(allFilterButtons).toHaveLength(12)
  })

  it('should render ReviewScore', () => {
    render(<Filter />)

    const review = screen.getByText('Review Score')

    expect(review).toBeInTheDocument()

    const reviewScore = screen.getAllByTestId('ReviewScore')

    expect(reviewScore).toHaveLength(5)
  })
})
