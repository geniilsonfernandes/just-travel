import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import Checkbox from "."

const onClick = vi.fn()

describe("Checkbox Rendering", () => {
  it("should render Checkbox correctly", () => {
    render(<Checkbox id='foo' checked={true} value='foo' onClick={onClick} />)

    const button = screen.getByRole("checkbox")
    const label = screen.getByText("foo")

    expect(button).toBeInTheDocument()
    expect(label).toBeInTheDocument()
  })
})
describe("Checkbox Style", () => {
  it("hould have correct color when active", () => {
    render(<Checkbox id='foo' checked={true} value='foo' onClick={onClick} />)

    const button = screen.getByRole("checkbox")

    expect(button).toHaveClass("border-brand-color-blue")
  })
  it("hould have correct color when active", () => {
    render(<Checkbox id='foo' checked={false} value='foo' onClick={onClick} />)

    const button = screen.getByRole("checkbox")

    expect(button).toHaveClass("border-gray-400")
  })
})
describe("FilterButton Functionality", () => {
  it("should call onClick function twice when button is clicked twice", () => {
    render(<Checkbox id='foo' checked={true} value='foo' onClick={onClick} />)

    const button = screen.getByRole("checkbox")

    fireEvent.click(button)
    fireEvent.click(button)

    expect(onClick).toBeCalledTimes(2)
  })
})
