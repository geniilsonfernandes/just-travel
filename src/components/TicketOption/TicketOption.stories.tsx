import { StoryObj } from '@storybook/react'

import TicketOption from '.'

const meta = {
  title: 'Components/TicketOption',
  component: TicketOption,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TicketOption>

export const Default: Story = {
  args: {
    icon: <span>icon</span>,
    label: 'label',
    title: 'title',
  },
}
