import { StoryObj } from '@storybook/react'

import Filter from '.'

const meta = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Filter>

export const Default: Story = {
  args: {},
}
