import { StoryObj } from "@storybook/react"

import TicketInformation from "."

const meta = {
  title: "Components/TicketInformation",
  component: TicketInformation,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof TicketInformation>

export const Default: Story = {
  args: {
    price: "R$245,99",
    title: "01 Ingresso infantil",
  },
}
