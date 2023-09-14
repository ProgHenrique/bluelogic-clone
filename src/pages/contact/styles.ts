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
  padding: '0 1.5rem',
  zIndex: 2,
  marginTop: '-2rem',
  '@desktop': {
    padding: 0,
  },
})

export const HeroSection = styled('section', {
  position: 'relative',
  width: '100%',
  height: '14.625rem',
  backgroundImage: 'url(/contato.png)',
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

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem',
  gap: '2.25rem',
  backgroundColor: '$white',
  boxShadow: '0 0px 10px 0 rgba(22, 45, 90, 0.1)',
  borderRadius: 6,
  width: '100%',
  maxWidth: 776,
})

export const FormTitle = styled('div', {
  h2: {
    fontSize: '1.25rem',
    lineHeight: '$tall',
    color: '$title',
    '@tablet': {
      fontSize: '1.5rem',
    },
  },
  p: {
    fontSize: '$xs',
    lineHeight: '$tall',
    color: 'rgba(21, 46, 62, 0.7)',

    '@tablet': {
      fontSize: '$sm',
    },
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.25rem',
  width: '100%',
  marginBottom: '3.5rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.25rem',
    '@tablet': {
      flexDirection: 'row',
      gap: '2rem',
    },
  },
})

export const Label = styled('label', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',

  span: {
    fontSize: '$sm',
    color: '$text',

    '@tablet': {
      fontSize: '$md',
    },
  },

  p: {
    position: 'absolute',
    bottom: -22,
    left: 0,
    color: '#f75a68',
    fontSize: '$xs',
  },
})

export const Input = styled('input', {
  all: 'unset',
  borderRadius: 8,
  border: '1px solid $darkBlue',
  padding: '0.5rem 0.9375rem',
  color: '$black',
  cursor: 'text',

  '&:focus': {
    border: '1px solid $blue',
    boxShadow: '0px 0px 0px 2px #607b9669',
  },

  '&::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  '@tablet': {
    fontSize: '$lg',
    padding: '0.625rem 0.9375rem',
  },
})

export const TextArea = styled('textarea', {
  border: '1px solid $darkBlue',
  borderRadius: 8,
  resize: 'none',
  height: '9.375rem',
  padding: '0.5rem 0.9375rem',
  outline: 'none',
  color: '$black',

  '&:focus': {
    border: '1px solid $blue',
    boxShadow: '0px 0px 0px 2px #607b9669',
  },

  '@tablet': {
    fontSize: '$lg',
    padding: '0.625rem 0.9375rem',
  },
})

export const SubmitButton = styled('button', {
  all: 'unset',
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'max-content',
  padding: '0.75rem 2rem',
  border: '2px solid $blue',
  borderRadius: 6,
  cursor: 'pointer',
  color: '$blue',

  '&:hover': {
    backgroundColor: '$blue',
    color: '$white',
    span: {
      color: '$white',
    },
  },

  span: {
    fontSize: '1.5rem',
    lineHeight: 0,
    color: '$blue',
  },

  translate: 'all .3s ease',

  '@tablet': {
    fontSize: '$lg',
  },
})
