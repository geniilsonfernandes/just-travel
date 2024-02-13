/* c8 ignore start */

import { StoryObj } from "@storybook/react"

import Filter from "."

const meta = {
  title: "Filter/Filter",
  component: Filter,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Filter>

export const Default: Story = {
  args: {},
}
