import { makeStyles } from '@material-ui/core'
import personalStyles from '@styles/styles'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    width: '100%',
    height: 'auto'
  },
  main: {
    padding: '10px 0',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'auto',
    background: 'linear-gradient(white 30%, rgba(255,255,255,0)), linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)), radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 40px, 100% 40px, 100% 14px, 100% 14px',
    backgroundAttachment: 'local, local, scroll, scroll',

    '&::-webkit-scrollbar-track': {
      backgroundColor: personalStyles.colors.silver
    },

    '&::-webkit-scrollbar': {
      width: 6,
      backgroundColor: personalStyles.colors.silver
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: personalStyles.colors.primary,
      border: `1px solid ${personalStyles.colors.primary}`
    }
  },
  containerMain: {
    maxWidth: 1000
  },
  footer: {
    width: '100%',
    padding: '10px',
    display: 'flex',
    bottom: 0,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imgFluid: {
    width: 'auto',
    maxWidth: 100,
    maxHeight: 50,
    height: 'auto'
  },
  footerText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
    textDecoration: 'none',
    color: '#777',
    paddingRight: 5
  },
  poweredby: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > a ': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none'
    }
  },
  poweredbyText: {
    fontSize: 10,
    fontWeight: 600
  }
}))

export default useStyles
