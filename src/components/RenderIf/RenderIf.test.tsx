import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import RenderIf from '.'

describe('RenderIf', () => {
  it('should render RenderIf', () => {
    render(<RenderIf condition={true}>foo</RenderIf>)

    expect(screen.getByText('foo')).toBeTruthy()
  })

  it('should not render RenderIf', () => {
    render(<RenderIf condition={false}>foo</RenderIf>)

    expect(screen.queryByText('foo')).not.toBeInTheDocument()
  })
})
