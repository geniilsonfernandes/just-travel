/* c8 ignore start */
import { StoryObj } from "@storybook/react"

import Logo from "."

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {},
}
