/* c8 ignore start */

import { StoryObj } from "@storybook/react"

import ReviewTag from "."

const meta = {
  title: "Components/ReviewTag",
  component: ReviewTag,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof ReviewTag>

export const Default: Story = {
  args: {
    label: "5.0",
    link: "/",
    reviewsCount: 1,
    review: 5,
  },
}
