import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    [theme.breakpoints.up('md')]: {
      minWidth: 800
    }
  },
  questionTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 24
    }
  }
}))

export default useStyles
