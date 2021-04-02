import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import useSettings from '@contexts/Settings'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    maxWidth: '60%',
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    }
  },
  forms: {
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },

  button: {
    margin: '10px'
  },
  txtTitle: {
    margin: '16px 0'
  }
}))

const Finished: NextPage = () => {
  const classes = useStyles()
  const { text } = useTranslation()
  const router = useRouter()
  const { settings, saveSettings } = useSettings()

  const handleChange = (): void => {
    saveSettings({ ...settings, maxResponseDay: 20 })
    router.push('/questions')
  }

  return (
    <>
      <LayoutPage>
        <div className={classes.titles}>
          <Image
            src="/logos/fluxo_icon.svg"
            width={32}
            height={32}
            loading="eager"
          />
          <Typography variant="h5" component="h1" className={classes.txtTitle}>
            {text('finishedTitle')}
          </Typography>
          <Typography variant="body1">{text('finishedDescription')}</Typography>
        </div>
        {settings.numberResponseDay < settings.maxResponseDay && (
          <>
            <Typography variant="body2">{text('finishedRest')}</Typography>
            <div className={classes.forms}>
              <Button
                variant="contained"
                size="large"
                onClick={() => handleChange()}
                className={classes.button}
              >
                {text('finishedButtonMore')}
              </Button>
            </div>
          </>
        )}
      </LayoutPage>
    </>
  )
}

export default Finished
