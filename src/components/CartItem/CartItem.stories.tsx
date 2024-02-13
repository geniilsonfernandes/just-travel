import { StoryObj } from '@storybook/react'

import CartItem from '.'

const meta = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {},
}
