import "@testing-library/jest-dom"
import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { afterEach } from "vitest"

// expect.extend(matchers)

afterEach(() => {
  cleanup()
})
