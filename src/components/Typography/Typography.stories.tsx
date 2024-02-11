import { StoryObj } from '@storybook/react'

import Typography from '.'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'Hello world',
  },
}
