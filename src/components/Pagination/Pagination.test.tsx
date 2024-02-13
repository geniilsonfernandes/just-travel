import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import Pagination from "."

const onItemsPerPageChange = vi.fn()
const onPageChange = vi.fn()

describe("Pagination", () => {
  it("should render Pagination", () => {
    render(
      <Pagination
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
        total={60}
        totalPages={10}
      />
    )

    expect(screen.getByText("60 Resultados")).toBeInTheDocument()
  })
  it("should call onPageChange when click next button", () => {
    render(
      <Pagination
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
        total={60}
        totalPages={10}
      />
    )

    const nextButton = screen.getByLabelText("Next page")

    fireEvent.click(nextButton)

    expect(onPageChange).toBeCalledTimes(1)
  })
  it("should call onPageChange when click to page 2", () => {
    render(
      <Pagination
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
        total={60}
        totalPages={10}
      />
    )

    const pageTwo = screen.getByLabelText("Go to page 2")

    fireEvent.click(pageTwo)

    expect(onPageChange).toBeCalledWith(2)
  })

  it("should call onItemsPerPageChange when change", () => {
    render(
      <Pagination
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={onPageChange}
        total={60}
        totalPages={10}
      />
    )

    const select = screen.getByLabelText("Items per page")

    fireEvent.change(select, {
      target: { value: "12" },
    })

    expect(onItemsPerPageChange).toBeCalledTimes(1)
  })
})
