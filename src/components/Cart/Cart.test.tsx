import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { Icart } from "@/store/reducers/cart/cartSlice"
import Cart from "."

const props = {
  cart: [
    {
      id: "1",
      name: "teste",
      price: 100,
      quantity: 2,
      ticket: {
        createdAt: "",
        description: "",
        id: "1",
        image: "/image.png",
        location: "",
        name: "teste",
        price: {
          discount: 60,
          full: 100,
        },
        rating: {
          reviewsCount: 0,
          value: 0,
        },
        updatedAt: "",
      },
    },
  ] as Icart[],
  onRemoveCartItem: vi.fn(),
}

describe("Cart", () => {
  it("should render Cart and calculate total", () => {
    render(<Cart {...props} />)

    const totalel = screen.getByLabelText("total")

    expect(totalel.childNodes[1]).toHaveTextContent("R$ 200,00")

    const parcelPayment = screen.getByLabelText("payment parcel")

    expect(parcelPayment.childNodes[1]).toHaveTextContent("R$ 20,00")

    const discount = screen.getByLabelText("discount")

    expect(discount.childNodes[1]).toHaveTextContent("- R$ 14,00")

    const subtotal = screen.getByLabelText("subtotal total")

    expect(subtotal.childNodes[1]).toHaveTextContent("R$ 200,00")

    const ticketsTotal = screen.getByLabelText("all tickets")

    expect(ticketsTotal.childNodes[1]).toHaveTextContent("R$ 200,00")
  })

  it("should render cart items correctly", () => {
    render(<Cart {...props} />)

    const cartItem = screen.getAllByLabelText("Cart item")

    expect(cartItem).toHaveLength(props.cart.length)
  })

  it("should call onRemoveCartItem when remove button is clicked", () => {
    render(<Cart {...props} />)

    const cartItem = screen.getAllByLabelText("Cart item")[0]
    const button = cartItem.querySelector("button")!

    fireEvent.click(button)

    expect(props.onRemoveCartItem).toBeCalledWith(props.cart[0].id)
  })
})
