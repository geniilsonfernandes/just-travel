import { StoryObj } from '@storybook/react'

import Pagination from '.'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    itemsPerPage: 6,
    total: 60,
    totalPages: 10,
  },
}
