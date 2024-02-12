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
  args: {},
}
