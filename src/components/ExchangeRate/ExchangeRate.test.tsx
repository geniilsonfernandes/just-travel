import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import ExchangeRate from "."

describe("ExchangeRate", () => {
  it("should render ExchangeRate correctly", () => {
    render(<ExchangeRate />)

    expect(screen.getByAltText("brazil-flag")).toBeTruthy()
    expect(screen.getByText(/Cotação dólar/i)).toBeTruthy()
    expect(screen.getByRole("button", { name: "Question button" })).toBeTruthy()
  })
})
