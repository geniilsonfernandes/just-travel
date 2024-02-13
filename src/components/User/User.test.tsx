import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import User from "."

describe("User", () => {
  it("should render User", () => {
    render(<User userName='jhon' />)
    expect(screen.getByText("jhon")).toBeTruthy()
  })
})
