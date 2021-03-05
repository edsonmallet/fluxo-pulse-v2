import { makeStyles } from '@material-ui/core'
import personalStyles from '@styles/styles'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 0 10px 0'
  },
  inputs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    height: 50,
    width: 50,
    borderRadius: personalStyles.metrics.borderRadius,
    margin: '0 2px',
    border: `1px solid ${personalStyles.colors.black10}`,
    fontSize: 18,
    fontWeight: 700,
    color: personalStyles.colors.black50,
    textTransform: 'uppercase',

    '&:focus': {
      outline: 'none'
    }
  },

  validations: {
    height: 30,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  valid: {
    color: theme.palette.primary.main,
    fontSize: 12,
    fontWeight: 600
  },
  invalid: {
    color: theme.palette.error.main,
    fontSize: 12,
    fontWeight: 600
  }
}))

export default useStyles
