import { styled } from '../../styles/stitches.config'

export const FooterContent = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  padding: '6.25rem 0 0',
  backgroundImage: '$gradient',
  gap: '3.75rem',
  color: '$white',
  '@tablet': {
    gap: '9.18rem',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1152,
  width: '100%',
  margin: '0 auto',
  gap: '3.75rem',
  padding: '0 1.5rem',

  '@tablet': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '$lg',
  },

  '@desktop': {
    gap: 0,
    padding: 0,
  },
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  maxWidth: 601,
  width: '100%',

  img: {
    width: '7.5rem',
    height: '2.8175rem',
  },
  p: {
    lineHeight: '$base',
  },
})

export const Contact = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'center',

  p: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: 0,
    gap: '0.625rem',
    fontSize: '$sm',
  },
  'p:first-child': {
    fontSize: '$md',
    marginBottom: '0.75rem',
  },

  '@tablet': {
    '&::before': {
      position: 'absolute',
      content: '',
      width: 1,
      left: '-2.5rem',
      height: '100%',
      backgroundColor: '$white',
    },
  },
})

export const FooterOnFooter = styled('div', {
  borderTop: '1px solid $white',
  padding: '1.25rem 0',
  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    maxWidth: 1152,
    width: '100%',
    margin: '0 auto',
    padding: '0 1.5rem',

    '@desktop': {
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      padding: 0,
    },
  },
  strong: {
    fontSize: '0.75rem',
    '@desktop': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  p: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '$xs',
    span: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      lineHeight: 0,
    },
  },

  a: {
    all: 'unset',
    cursor: 'pointer',
    fontSize: '2rem',
    color: '#4267B2',
    lineHeight: 0,
  },
})
