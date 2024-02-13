/* c8 ignore start */
import { StoryObj } from "@storybook/react"

import User from "."

const meta = {
  title: "Components/User",
  component: User,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof User>

export const Default: Story = {
  args: {
    userName: "John Doe",
  },
}
