import { StoryObj } from "@storybook/react"

import Cart from "."
import { cartMock } from "./mock"

const meta = {
  title: "Components/Cart",
  component: Cart,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: {
    cart: cartMock,
  },
}
