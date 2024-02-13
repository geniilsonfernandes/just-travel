import { StoryObj } from '@storybook/react'

import PriceTicket from '.'

const meta = {
  title: 'Components/PriceTicket',
  component: PriceTicket,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PriceTicket>

export const Default: Story = {
  args: {
    price: 100,
  },
}

export const WithoutPromotionalPrice: Story = {
  args: {
    currency: 'R$',
    price: 100,
    promotionalPrice: 50,
  },
}
