import { StoryObj } from '@storybook/react'

import PriceButton from '.'

const meta = {
  title: 'Components/PriceButton',
  component: PriceButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PriceButton>

export const Default: Story = {
  args: {},
}
