/* c8 ignore start */

import { StoryObj } from "@storybook/react"

import ExchangeRate from "."

const meta = {
  title: "Components/ExchangeRate",
  component: ExchangeRate,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ExchangeRate>

export const Default: Story = {
  args: {},
}
