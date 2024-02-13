import { StoryObj } from '@storybook/react'

import RenderIf from '.'

const meta = {
  title: 'Components/RenderIf',
  component: RenderIf,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RenderIf>

export const Default: Story = {
  args: {
    condition: true,
    children: <div>Children</div>,
  },
}

export const WithoutChildren: Story = {
  args: {
    condition: false,
    children: null,
  },
}
