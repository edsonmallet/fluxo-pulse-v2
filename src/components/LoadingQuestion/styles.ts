import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.main,

    '&:img': {
      marginRight: 20
    }
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: 16,
    fontWeight: 600
  }
}))

export default useStyles
