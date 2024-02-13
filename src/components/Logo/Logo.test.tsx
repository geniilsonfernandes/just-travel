import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Logo from "."

describe("Logo", () => {
  it("should render Logo", () => {
    render(<Logo />)

    expect(screen.getByLabelText("just travel's brand")).toBeTruthy()
  })
})
