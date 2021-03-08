import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    minHeight: 150
  },
  buttonSendPulse: {
    padding: '25px 40px',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  },
  progressBar: {
    width: 180,
    height: 40,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 12
  }
}))

export default useStyles
