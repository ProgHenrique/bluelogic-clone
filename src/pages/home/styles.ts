import { styled } from '../../styles/stitches.config'

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5.2rem',
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
  maxWidth: 1152,
  width: '100%',
  zIndex: 2,
  padding: '0 1.5rem',
  '@desktop': {
    padding: 0,
  },
})

export const HeroSection = styled('section', {
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundImage: 'url(/banner1.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
})

export const HeroFilm = styled('div', {
  position: 'absolute',
  left: 0,
  top: 0,
  backgroundColor: 'rgba(8, 17, 11, 0.5)',
  width: '100%',
  height: '100%',
})

export const Hero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1152,
  width: '100%',
  margin: '0 auto',
  padding: '3rem 1.5rem 11.25rem',
  '@tablet': {
    padding: '3rem 1.5rem 8rem',
  },

  '@desktop': {
    padding: '3rem 0 8rem',
  },
})

export const HeroTitle = styled('h1', {
  fontSize: '1.5rem',
  color: '$white',
  zIndex: 2,
  marginBottom: '3rem',
  span: {
    fontWeight: '$regular',
  },

  '@tablet': {
    fontSize: '2.5rem',
  },
  '@desktop': {
    fontSize: '3.2rem',
  },
})

export const HeroSkills = styled('div', {
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: '1.875rem',
  color: '$white',
  '@tablet': {
    padding: '0 1.5rem',
  },
})

export const Skill = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  span: {
    fontSize: '1.5rem',
    lineHeight: 0,
  },
  '@tablet': {
    fontSize: '1.25rem',
  },
})

export const HeroButton = styled('a', {
  all: 'unset',
  zIndex: 2,
  maxWidth: '18.75rem',
  margin: '0 auto',
  width: '100%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  fontSize: '1.3rem',
  fontWeight: '$bold',
  backgroundImage: '$gradient2',
  color: '$white',
  borderRadius: 6,
  padding: '1.094rem 0',

  transition: 'all .3s ease',

  '&:hover': {
    background: '$white',
    color: '#182E4A',
  },

  '@tablet': {
    margin: 0,
    fontSize: '2.1rem',
  },
})

export const SkillsInfo = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  marginTop: '-7.5rem',
  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '1rem',
    rowGap: '2rem',
    marginTop: '-9rem',
  },
  '@desktop': {
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '1rem',
    marginTop: '-9rem',
  },
  rowGap: '1rem',
})

export const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '2.1875rem 1.875rem',
  backgroundColor: '$white',
  boxShadow: '0 0px 10px 0 rgba(22, 45, 90, 0.1)',
  borderRadius: 6,

  strong: {
    color: '$title',
    fontSize: '1.4rem',
  },

  p: {
    fontSize: '$sm',
  },
})

export const FlexibilitySection = styled('section', {
  width: '100%',
  backgroundImage: '$gradient',
  padding: '0 1.5rem',
  minHeight: '16.5rem',
  '@desktop': {
    padding: 0,
  },

  '& > div': {
    maxWidth: 1152,
    width: '100%',
    height: '16.5rem',
    margin: '0 auto',
  },
})

export const Flexibility = styled('div', {
  width: '100%',
  '@tablet': {
    width: 312,
    height: 'calc(100% - 0.75rem)',
  },
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '2.1875rem 1.875rem',
  backgroundColor: '$white',
  boxShadow: '0 0px 10px 0 rgba(22, 45, 90, 0.1)',

  strong: {
    color: '$title',
    fontSize: '1.4rem',
  },

  p: {
    fontSize: '$sm',
    '@desktop': {
      fontSize: '$md',
    },
  },

  '&::before': {
    position: 'absolute',
    left: 0,
    top: -7,
    content: '',
    width: '100%',
    height: 7,
    backgroundImage: '$gradient2',
    borderRadius: '6px 6px 0 0',
  },
})

export const About = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',

  h2: {
    color: '$darkGreen',
    fontSize: '1.5rem',
  },

  p: {
    color: '$title',
    '@tablet': {
      textAlign: 'center',
    },
  },
})

export const Customers = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  overflow: 'hidden',
  marginLeft: '-1.5rem',
  width: 'calc(100% + 3rem)',
  strong: {
    textAlign: 'center',
    fontSize: '2.125rem',
    lineHeight: '$short',
    color: '$blue',
  },

  p: {
    textAlign: 'center',
    color: '$blue',
  },
})

export const KeenSLider = styled('div', {
  maxWidth: 150,
  width: '100%',
})

export const Solutions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.5rem',
  h2: {
    textAlign: 'center',
    fontSize: '2.125rem',
    lineHeight: '$short',
    color: '$darkGreen',
  },
})

export const SolutionsCards = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@tablet': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '3rem',
  },
  '@desktop': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '3rem',
  },
  rowGap: '3.5rem',
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: '3.75rem 0',
  gap: '2rem',
  boxShadow: '0 0px 10px 0 rgba(22, 45, 90, 0.1)',
  borderRadius: 6,
  img: {
    width: '3.75rem',
    height: '3.75rem',
  },
  strong: {
    color: '$title',
    fontSize: '1.25rem',
  },

  p: {
    padding: '0 2.5rem',
    textAlign: 'center',
    fontSize: '$sm',
  },
})

export const ScheduleButton = styled('a', {
  all: 'unset',
  maxWidth: 362,
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '0.75rem 0',
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
})
