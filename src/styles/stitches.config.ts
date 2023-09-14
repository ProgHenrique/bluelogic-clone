import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    fonts: {
      default: "'Inter', sans-serif",
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '2rem',
      '2xl': '3.875rem',
    },

    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      blue: '#00416a',
      darkBlue: '#0c2340',
      blueRgba: 'rgba(12, 35, 64, 0.95)',
      green: '#40916c',
      darkGreen: '#0e3e40',
      gradient:
        'linear-gradient(135deg, rgba(12,35,64,1) 0%, rgba(0,65,106,1) 100%)',
      gradient2:
        'linear-gradient(135deg, rgba(0,65,106,1) 0%, rgba(12,35,64,1) 100%)',

      title: '#152e3e',
      text: 'rgba(21, 46, 62, 0.7)',
    },
  },

  media: {
    desktop: '(min-width: 1200px)',
    tablet: '(min-width: 768px)',
    mobile: '(max-width: 500px)',
  },
})
