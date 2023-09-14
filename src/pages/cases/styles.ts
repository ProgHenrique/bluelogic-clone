import { styled } from '../../styles/stitches.config'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5.2rem',
  marginBottom: '4rem',
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
  alignItems: 'center',
  maxWidth: 1152,
  width: '100%',
  gap: '2.5rem',
  padding: '0 1.5rem',
  zIndex: 2,
  h2: {
    letterSpacing: '0.05rem',
    fontWeight: '$regular',
    fontSize: '2rem',
    lineHeight: '$short',
    textAlign: 'center',
    color: 'rgba(2, 52, 54, 1)',
    span: {
      display: 'block',
      color: '$blue',
      fontWeight: '$bold',
      '@tablet': {
        display: 'inline',
      },
    },
    '@desktop': {
      fontSize: '2.25rem',
    },
  },
  '@desktop': {
    padding: 0,
  },
})

export const HeroSection = styled('section', {
  position: 'relative',
  width: '100%',
  height: '14.625rem',
  backgroundImage: 'url(/cases.png)',
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
      padding: '3rem 0rem',
    },
  },
})

export const Customers = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: '0.5rem',
  rowGap: '1.5rem',
  placeItems: 'center',
  img: {
    maxWidth: '7.5rem',
    width: '60%',
    minWidth: '3.75rem',
    '@mobile': { maxWidth: '3.75rem' },
  },
})

export const ReachCustomer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '1.25rem',
  '& > div:first-child': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    '& > img': {
      width: '35%',
    },

    strong: {
      fontSize: '2rem',
      color: '$blue',
    },
    p: {
      color: 'rgba(2, 52, 54, 1)',
      lineHeight: '1.5rem',
    },
  },

  '& > div:last-child': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    img: {
      maxWidth: 300,
      '@desktop': {
        maxWidth: 'clamp(300px, 90%, 456px)',
      },
    },
    '@desktop': {
      justifyContent: 'flex-start',
    },
  },

  '@tablet': {
    marginTop: '2.5rem',
    gridTemplateColumns: '48% 1fr',
    columnGap: '1rem',
  },
})

export const Contact = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2.25rem',

  strong: {
    fontSize: '2.25rem',
    textAlign: 'center',
    lineHeight: '$short',
    color: 'rgba(2, 52, 54, 1)',
  },

  a: {
    all: 'unset',
    cursor: 'pointer',
    backgroundColor: '$blue',
    color: '$white',
    transition: '.2s ease-in',
    borderRadius: 8,
    padding: '1rem 3rem',
    fontWeight: '$bold',
    '&:hover': {
      backgroundColor: '$darkBlue',
    },

    '@tablet': {
      fontSize: '$lg',
    },
  },
})
