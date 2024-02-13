import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import TicketCard from "."

import { ticketsMock } from "./mock"

vi.mock("../ReviewTag", () => ({
  default: () => <div data-testid='ReviewTag'>ReviewScore</div>,
}))

const { currency, description, imageSrc, price, title, tag } = ticketsMock[0]

describe("TicketCard Rendering", () => {
  it("should render TicketCard correctly", () => {
    render(
      <TicketCard
        currency={currency}
        description={description}
        imageAlt={"image.png"}
        imageSrc={imageSrc}
        link={"link.com"}
        price={price}
        title={title}
        tag={tag}
      />
    )

    const image = screen.getByRole("img")
    const priceElement = screen.getByText(price)

    expect(image).toHaveAttribute("alt", "image.png")

    expect(priceElement.textContent).toBe(price.toString())
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(description)).toBeInTheDocument()

    // ReviewTag
    expect(screen.getByTestId("ReviewTag")).toBeInTheDocument()
  })

  it("should render TicketCard with promotional price", () => {
    render(
      <TicketCard
        currency={currency}
        description={description}
        imageAlt={"image.png"}
        imageSrc={imageSrc}
        link={"link.com"}
        price={price}
        title={title}
        tag={tag}
        promotionalPrice={89}
      />
    )

    const promotionalPriceElement = screen.getByText("de USD 99.99 por")
    const priceElement = screen.getByText("89")

    expect(promotionalPriceElement).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
  })
})
