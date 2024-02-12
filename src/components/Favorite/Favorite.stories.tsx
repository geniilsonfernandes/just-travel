import { StoryObj } from '@storybook/react'

import Favorite from '.'

const meta = {
  title: 'Components/Favorite',
  component: Favorite,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Favorite>

export const Default: Story = {
  args: {},
}
