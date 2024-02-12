/* c8 ignore start */

import { StoryObj } from '@storybook/react'

import Search from '.'

const meta = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}
