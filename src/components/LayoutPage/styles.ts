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
    padding: '10px 0',
    width: '100%',
    height: 60
  },
  main: {
    padding: '10px 20px',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'auto',

    '&::-webkit-scrollbar-track': {
      backgroundColor: personalStyles.colors.silver
    },

    '&::-webkit-scrollbar': {
      width: 3,
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
    width: '100%',
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
