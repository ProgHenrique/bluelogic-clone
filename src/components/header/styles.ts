import { styled } from '../../styles/stitches.config'

export const NavHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$blueRgba',
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  zIndex: 12,
  overflow: 'hidden',
  '@tablet': {
    transitionDuration: '100ms',
  },

  variants: {
    isScrolled: {
      true: {
        boxShadow: '0px 0px 12px 0 rgba(0,0,0,0.5)',
        '@tablet': {
          transform: 'translateY(-35px)',
          transitionDuration: '100ms',
        },
      },
      false: {
        boxShadow: 'none',
      },
    },
  },
})

export const HeaderContact = styled('div', {
  width: '100%',
  height: 35,
  padding: '0 1.5rem',
  backgroundColor: '#f7f7f7',
  '& > div': {
    display: 'flex',
    maxWidth: 1152,
    width: '100%',
    height: '100%',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'rgba(38, 57, 72, 1)',
    div: {
      display: 'flex',
      alignItems: 'center',
      gap: '3rem',
      p: {
        fontSize: '$xs',
      },
    },
    a: {
      all: 'unset',
      position: 'relative',
      textAlign: 'end',
      cursor: 'pointer',
      fontSize: '1.5rem',
      lineHeight: 0,
      color: '#4267B2',
    },
  },

  '@desktop': {
    padding: 0,
  },
})

export const HeaderLogoMenu = styled('div', {
  display: 'flex',
  maxWidth: 1152,
  width: '100%',
  height: '100%',
  margin: '0 auto',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem',
  '& > a': {
    all: 'unset',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    color: 'white',
    fontSize: '$sm',
    cursor: 'pointer',
  },

  '@tablet': {
    padding: '1.25rem 1.5rem',
    justifyContent: 'normal',
    gap: '2.25rem',
  },

  '@desktop': {
    padding: '1.25rem 0',
  },
})

export const MenuButton = styled('button', {
  all: 'unset',
  border: '1px solid $white',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  padding: '0.5rem 6px',
  gap: '0.5rem',
  cursor: 'pointer',
  alignItems: 'flex-end',
  '&:hover': {
    backgroundColor: '$white',
    div: {
      backgroundColor: '$black',
    },
  },

  div: {
    width: '1.625rem',
    height: 1,
    backgroundColor: '$white',
  },

  'div:last-child': {
    width: 'calc(1.625rem - 50%)',
  },
})

export const MenuItems = styled('div', {
  opacity: 0,
  visibility: 'hidden',
  position: 'absolute',
  paddingTop: '3.75rem',
  top: '-20rem',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$blueRgba',
  justifyContent: 'space-between',
  ul: {
    display: 'none',
  },
  variants: {
    open: {
      true: {
        opacity: 1,
        visibility: 'visible',
        width: '100vw',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        ul: {
          listStyle: 'none',
          width: '100vw',
          borderTop: '1px solid $white',
          display: 'grid',
          padding: '1rem 1.5rem',
          gap: '1.5rem',
          li: {
            listStyle: 'none',
          },
        },
      },
    },
  },
})

export const Ul = styled('ul', {
  display: 'flex',
  height: '100%',
  gap: '1.5rem',
})

export const Link = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  fontWeight: '$bold',
  position: 'relative',
  fontSize: '1.8rem',
  color: '$white',
  '&::after': {
    content: '',
    width: '0%',
    height: 2,
    backgroundColor: '$white',
    position: 'absolute',
    left: 0,
    bottom: '-0.75rem',
    transition: 'width 0.2s ease',
    '@tablet': {
      bottom: '-1.75rem',
      height: 4,
    },
  },
  '&:hover::after': {
    width: '100%',
  },

  '@tablet': {
    fontSize: '1rem',
    fontWeight: '$regular',
  },
})

export const MenuFooter = styled('div', {
  display: 'flex',
  padding: '1.5rem 2rem',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  borderTop: '1px solid $white',
  gap: '1rem',
  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',

    p: {
      fontSize: '$sm',
      lineHeight: '$short',
    },
  },
  a: {
    all: 'unset',
    position: 'relative',
    textAlign: 'end',
    cursor: 'pointer',
    fontSize: '3rem',
    lineHeight: 0,
    color: '#4267B2',
    '&::before': {
      position: 'absolute',
      content: '',
      width: 1,
      left: -8,
      height: '100%',
      backgroundColor: '$white',
    },
  },
})

export const CloseButton = styled('button', {
  all: 'unset',
  position: 'absolute',
  left: 16,
  top: 16,
  color: '$white',
  fontSize: '2rem',
  lineHeight: 0,
  cursor: 'pointer',
})

export const BackToTopButton = styled('button', {
  all: 'unset',
  backgroundColor: '$blue',
  color: '$white',
  position: 'fixed',
  right: 16,
  bottom: 16,
  padding: '0.5rem',
  borderRadius: '9999px',
  fontSize: '1.5rem',
  lineHeight: 0,
  zIndex: 10,
  visibility: 'hidden',
  opacity: 0,
  transform: 'translateY(100%)',
  transitionDuration: '300ms',
  cursor: 'pointer',

  variants: {
    backToTop: {
      true: {
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
})
