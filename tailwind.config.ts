import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',

    './src/components/**/*.{js,ts,jsx,tsx,mdx}',

    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      center: true,
    },

    extend: {
      // animations
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-out',
      },
      //   backgrounds
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--circular-std-book)', 'sans-serif'],
        book: ['var(--circular-std-book)', 'sans-serif'],
        bold: ['var(--circular-std-bold)', 'sans-serif'],
        medium: ['var(--circular-std-medium)', 'sans-serif'],
      },
      colors: {
        // Brand Colours
        'brand-color-blue': '#4070F4',
        'brand-color-green': '#2BD67B',
        'brand-color-black': '#0A2156',
        // Semantic Color
        message: '#4070F4',
        sucess: '#0BB07B',
        warning: '#FFAD0D',
        error: '#F03D3D',
        information: '#F03D3D',
        // Grayscale
        gray: {
          10: '#E7E9ED',
          200: '#CED2DB',
          300: '#B6BCC9',
          400: '#9EA5B8',
          500: '#858FA6',
          600: '#6D7994',
          700: '#556282',
          800: '#3C4C70',
          900: '#24365E',
          100: '#0A2156',
        },
        primary: {
          100: '#0045F3',
          200: '#2D69FF',
        },
      },
    },
  },

  plugins: [],
}

export default config
