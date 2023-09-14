import { styled } from '../../styles/stitches.config'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5.2rem',
  marginBottom: '7rem',
  gap: '3.75rem',
  transitionDuration: '100ms',
  '@tablet': {
    marginTop: '6.8rem',
  },

  variants: {
    isScrolled: {
      true: {
        '@tablet': {
          marginTop: '4.5rem',
          transitionDuration: '100ms',
        },
      },
    },
  },
})

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1152,
  padding: '0 1.5rem',
  width: '100%',
  zIndex: 2,
  gap: '5.2rem',
  '@desktop': {
    padding: 0,
  },
})

export const HeroSection = styled('section', {
  position: 'relative',
  width: '100%',
  height: '14.625rem',
  backgroundImage: 'url(/about.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  div: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 1152,
    width: '100%',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    h1: {
      fontSize: '1.875rem',
      fontWeight: '$regular',
      color: '$white',

      '@tablet': {
        fontSize: '2.25rem',
      },
    },
    '@desktop': {
      padding: '3rem 0',
    },
  },
})

export const AboutInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  strong: {
    fontSize: '1.5rem',
    color: '#152e3e',
    '@tablet': {
      fontSize: '2.25rem',
    },
  },

  p: {
    lineHeight: '$base',
  },
  '@tablet': {
    fontSize: '$lg',
  },
})
