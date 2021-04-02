import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: 800
    }
  },
  questionTitle: {
    marginBottom: 20,
    padding: '0 20px',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 16,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    }
  },
  decisionInstruction: {
    fontSize: 10,
    margintTop: 10,
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 600,
    color: 'rgba(0,0,0, .54)',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default useStyles
