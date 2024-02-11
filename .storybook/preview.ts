import type { Preview } from '@storybook/react'

import '../src/app/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F6F6F6',
        },
        {
          name: 'dark',
          value: '#0a0a0a',
        },
      ],
    },
  },
}

export default preview
