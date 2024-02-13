import { StoryObj } from "@storybook/react"

import TicketCard from "."
import { ticketsMock } from "./mock"

const meta = {
  title: "Components/TicketCard",
  component: TicketCard,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof TicketCard>

const mock = ticketsMock[0]

export const Default: Story = {
  args: {
    currency: mock.currency,
    description: mock.description,
    imageAlt: mock.imageAlt,
    imageSrc: mock.imageSrc,
    link: mock.link,
    price: mock.price,
    title: mock.title,
    tag: mock.tag,
  },
}
export const Promotional: Story = {
  args: {
    currency: mock.currency,
    description: mock.description,
    imageAlt: mock.imageAlt,
    imageSrc: mock.imageSrc,
    promotionalPrice: 89.0,
    link: mock.link,
    price: mock.price,
    title: mock.title,
    tag: mock.tag,
  },
}
