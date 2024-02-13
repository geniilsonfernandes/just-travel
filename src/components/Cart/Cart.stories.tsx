import { StoryObj } from '@storybook/react'

import Cart from '.'

const meta = {
  title: 'Components/Cart',
  component: Cart,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Cart>

export const Default: Story = {
  args: {},
}
