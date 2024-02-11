import { StoryObj } from '@storybook/react'

import Typography from '.'

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'Hello world',
    size: 'headingMedium',
  },
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat volutpat elementum sed donec bibendum vitae tincidunt. Quis eget ornare amet massa eu at ipsum. Augue purus ante ultrices dictum integer sagittis sem leo. 

Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus, semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi condimentum habitant rhoncus ac. 

Vivamus varius gravida urna viverra in. Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt nunc convallis nullam lorem eu elementum interdum. Ut ultrices suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc risus urna. Pharetra vestibulum diam praesent consequat consequat fermentum nunc.`

export const Paragraph: Story = {
  args: {
    children: lorem,
    size: 'paragraphSmall',
  },
}

export const Span: Story = {
  args: {
    children: lorem,
    size: 'paragraphSmall',
    as: 'span',
  },
}

export const Use = () => {
  return (
    <div>
      <Typography as='h1'>Heading 1</Typography>
      <Typography as='h2' size='headingNormal'>
        Heading 2
      </Typography>
      <Typography as='p' size='paragraphSmall' color='message'>
        {lorem}
      </Typography>
    </div>
  )
}
