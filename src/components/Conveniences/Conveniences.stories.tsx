import { StoryObj } from "@storybook/react"

import Conveniences from "."

const meta = {
  title: "Components/Conveniences",
  component: Conveniences,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Conveniences>

export const Default: Story = {
  args: {
    airplane: true,
    breakfast: true,
    room: true,
    wifi: true,
  },
}
