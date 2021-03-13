import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import useSettings from '@contexts/Settings'
import { Button, makeStyles, Typography } from '@material-ui/core'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}))

const Decision: NextPage = () => {
  const classes = useStyles()
  const { text } = useTranslation()
  const router = useRouter()
  const { settings, saveSettings } = useSettings()

  const handleChange = (): void => {
    saveSettings({ ...settings, maxResponseDay: 20 })
    router.push('/questions')
  }

  useEffect(() => {
    if (settings.numberResponseDay < settings.maxResponseDay)
      router.push('/questions')
  }, [])

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
          <Typography variant="h5" component="h1">
            {text('decisionTitle')}
          </Typography>
          <Typography variant="body2">{text('decisionDescription')}</Typography>
        </div>
        <div className={classes.forms}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => handleChange()}
            className={classes.button}
          >
            {text('decisionButtonMore')}
          </Button>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            onClick={() => router.push('/feedback')}
            className={classes.button}
          >
            {text('decisionButtonFeedback')}
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/exit')}
            className={classes.button}
          >
            {text('decisionButtonFinish')}
          </Button>
        </div>
      </LayoutPage>
    </>
  )
}

export default Decision
