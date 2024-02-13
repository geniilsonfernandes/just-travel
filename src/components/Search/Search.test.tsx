import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest"

import Search from "."

afterEach(cleanup)

const searchTickets = vi.fn()

vi.mock("@/store/reducers/tickets/ticketsSlice", () => ({
  searchTickets: () => {
    searchTickets()
  },
}))

describe("Search rendering", () => {
  beforeAll(() => {
    vi.mock("@/store", () => ({
      useAppDispatch: vi.fn().mockReturnValue(vi.fn()),
      useAppSelector: vi.fn((selector) =>
        selector({
          tickets: {
            data: [],
            isLoading: true,
            isError: false,
            isEmpty: false,
          },
          cart: {
            items: [],
          },
        })
      ),
    }))
  })

  it("should render Search and type in input", async () => {
    render(<Search />)
    const input = screen.getByPlaceholderText("Busque por atração")

    fireEvent.change(input, {
      target: { value: "foo" },
    })

    expect(input).toHaveValue("foo")
  })

  it("should call searchTickets", async () => {
    render(<Search />)

    const input = screen.getByPlaceholderText("Busque por atração")

    const button = screen.getByLabelText("search button")

    fireEvent.change(input, {
      target: { value: "foo" },
    })

    fireEvent.click(button)

    expect(searchTickets).toBeCalled()
  })
})
