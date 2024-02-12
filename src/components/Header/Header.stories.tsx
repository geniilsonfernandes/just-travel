/* c8 ignore start */
import { StoryObj } from '@storybook/react'

import Header from '.'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {},
}
