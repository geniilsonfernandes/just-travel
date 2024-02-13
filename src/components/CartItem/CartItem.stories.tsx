import { StoryObj } from '@storybook/react'

import CartItem from '.'
import { cartMock } from '../Cart/mock'

const meta = {
  title: 'Components/CartItem',
  component: CartItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CartItem>

export const Default: Story = {
  args: {
    name: cartMock[0].ticket.name,
    id: cartMock[0].id,
    onRemoveCartItem: () => {},
    price: cartMock[0].price,
    quantity: cartMock[0].quantity,
    ticket: cartMock[0].ticket,
  },
}
