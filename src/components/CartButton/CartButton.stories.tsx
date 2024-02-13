/* c8 ignore start */
import { StoryObj } from "@storybook/react"

import CartButton from "."
import { cartMock } from "../Cart/mock"

const meta = {
  title: "Components/CartButton",
  component: CartButton,
  decorators: [
    (Story: () => JSX.Element) => (
      <div className='flex justify-center items-center'>{Story()}</div>
    ),
  ],
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof CartButton>

export const Default: Story = {
  args: {
    cart: cartMock,
  },
}
