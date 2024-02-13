import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import ErrorMessage from "."

const onClick = vi.fn()

describe("ErrorMessage", () => {
  it("should render ErrorMessage with error message and onClick function", () => {
    render(<ErrorMessage error='ErrorMessage' onClick={onClick} />)

    expect(screen.getByText("ErrorMessage")).toBeInTheDocument()

    expect(screen.getByText("Tentar Novamente")).toBeInTheDocument()

    fireEvent.click(screen.getByText("Tentar Novamente"))

    expect(onClick).toHaveBeenCalled()
  })
})
