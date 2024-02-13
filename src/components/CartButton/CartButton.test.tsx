import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import CartButton from "."
import { cartMock } from "../Cart/mock"

vi.mock("@/components/Cart", () => ({
  default: () => <div data-testid='Cart'>Cart</div>,
}))

const onRemoveCartItem = vi.fn()

describe("CartButton", () => {
  it("should render CartButton", () => {
    render(<CartButton cart={cartMock} onRemoveCartItem={onRemoveCartItem} />)

    expect(screen.getByRole("button", { name: "Cart button" })).toBeTruthy()

    expect(screen.getByLabelText("Cart quantity")).toHaveTextContent("2")
  })
  it("should open cart when button is clicked and close", async () => {
    render(<CartButton cart={cartMock} onRemoveCartItem={onRemoveCartItem} />)

    const cartButton = screen.getByRole("button", { name: "Cart button" })
    fireEvent.click(cartButton)
    expect(screen.getByRole("dialog", { name: "Cart" })).toBeTruthy()

    fireEvent.click(cartButton)

    expect(screen.queryByRole("dialog", { name: "Cart" })).toBeNull()
  })
})
