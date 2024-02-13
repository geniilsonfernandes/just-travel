import { render, screen } from "@testing-library/react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import Header from "."
import { cartMock } from "../Cart/mock"

vi.mock("../ExchangeRate", () => ({
  default: () => <div data-testid='ExchangeRate'>ExchangeRate</div>,
}))

describe("Header rendering", () => {
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
            items: cartMock,
          },
        })
      ),
    }))
  })

  it("should render Header correctly", () => {
    render(<Header />)

    expect(screen.getByLabelText("Header")).toBeTruthy()
    expect(screen.getByTestId("ExchangeRate")).toBeTruthy()
  })

  it("should render 2 items in cart", () => {
    render(<Header />)

    expect(screen.getByLabelText("Cart quantity")).toHaveTextContent("2")
  })
})
