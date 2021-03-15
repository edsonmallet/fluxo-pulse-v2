import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'linear-gradient(217deg, #eee 0%, #ccc 100%)',
    [theme.breakpoints.down('sm')]: {
      backgroudColor: theme.palette.primary.main
    }
  },
  container: {
    width: '50vw',
    height: '70vh',
    display: 'flex',
    borderRadius: 16,
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      width: '97vw',
      height: '98vh',
      boxShadow: 'none'
    },
    boxShadow: '2px 5px 10px 0px #ccc'
  },
  leftImage: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  rightForm: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
    borderRadius: 16,
    [theme.breakpoints.down('sm')]: {
      padding: '20px'
    }
  },
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  footer: {
    width: '100%',
    padding: '0 0 10px 0',
    display: 'flex',
    fontSize: 0.7,
    fontWeight: 700,
    bottom: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 12,
    fontWeight: 600
  }
}))

export default useStyles
