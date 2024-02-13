import { StoryObj } from '@storybook/react'

import Empty from '.'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {},
}
