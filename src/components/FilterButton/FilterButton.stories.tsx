/* c8 ignore start */
import { StoryObj } from "@storybook/react"

import FilterButton from "."

const meta = {
  title: "Filter/FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof FilterButton>

export const Default: Story = {
  args: {
    children: "Filter Button",
  },
}

export const Active: Story = {
  args: {
    children: "Filter Button",
    active: true,
  },
}
export const Outline: Story = {
  args: {
    children: "Filter Button",
    active: true,
    variant: "outline",
  },
}
