import { StoryObj } from '@storybook/react'

import Checkbox from '.'

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    value: 'Checkbox',
  },
}

export const Checked: Story = {
  args: {
    value: 'Checkbox',
    checked: true,
  },
}
