import { StoryObj } from '@storybook/react'

import Button from '.'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
}
