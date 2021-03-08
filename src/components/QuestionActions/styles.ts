import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    minHeight: 150
  },
  buttonSendPulse: {
    padding: '25px 40px',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      padding: '18px 40px'
    }
  },
  buttonFeedback: {
    marginTop: 10
  },
  progressBar: {
    width: 180,
    height: 30,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 10
  }
}))

export default useStyles
