import { StoryObj } from "@storybook/react"

import ErrorMessage from "."

const meta = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

export const Default: Story = {
  args: {
    error: "Error message",
  },
}
