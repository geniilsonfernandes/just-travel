/* c8 ignore start */

import { StoryObj } from '@storybook/react'

import ReviewScore from '.'

const meta = {
  title: 'Filter/ReviewScore',
  component: ReviewScore,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ReviewScore>

export const Default: Story = {
  args: {
    score: 1,
    indicator: '1+',
    label: 'Pessímo (10)',
  },
}
