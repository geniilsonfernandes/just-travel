import { StoryObj } from "@storybook/react"

import Badge from "."

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {},
}
