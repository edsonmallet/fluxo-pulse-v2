import Emoji from '@components/Emoji'
import FeedbackTypes from '@components/FeedbackTypes'
import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import useSettings from '@contexts/Settings'
import {
  Button,
  CircularProgress,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { AddCommentOutlined } from '@material-ui/icons'
import { createFeedback } from '@services/feedback'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Swal from 'sweetalert2'

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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textArea: {
    width: '100%',
    marginBottom: 10
  },
  button: {
    margin: '10px 0'
  }
}))

const Feedback: NextPage = () => {
  const CHARACTER_LIMIT = 300
  const classes = useStyles()
  const { text } = useTranslation()
  const router = useRouter()
  const { settings } = useSettings()
  const [typeFeedback, setTypeFeedback] = useState<string>('')
  const [humorFeedback, setHumorFeedback] = useState<string>('')
  const [feedback, setFeedback] = useState<string>('')
  const [loadingSend, setLoadingSend] = useState<boolean>(false)

  const handleSubmit = async (): Promise<void> => {
    setLoadingSend(true)
    try {
      const create = await createFeedback({
        tokenPulse: settings.tokenPulse,
        type: typeFeedback,
        feedback,
        humor: humorFeedback
      })
      Swal.fire({
        icon: 'success',
        title: 'Muito bom ...',
        text: create.message
      })
      setLoadingSend(false)
      setFeedback('')
      setHumorFeedback('')
      setTypeFeedback('')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: error.message
      })
      setLoadingSend(false)
    }
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
          <Typography variant="h5" component="h1">
            {text('feedbackTitle')}
          </Typography>
          {settings.numberResponseDay >= 20 && (
            <Typography variant="subtitle1">
              {text('feedbackExcedResponse')}
            </Typography>
          )}
          <Typography variant="body2">{text('feedbackDescription')}</Typography>
        </div>
        <div className={classes.forms}>
          <FeedbackTypes
            onChange={event => setTypeFeedback(event.target.value)}
            typeFeedback={typeFeedback}
          />
          <TextField
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows={4}
            variant="outlined"
            className={classes.textArea}
            inputProps={{
              maxLength: CHARACTER_LIMIT
            }}
            value={feedback}
            onChange={event => setFeedback(event.target.value)}
            helperText={`${feedback.length}/${CHARACTER_LIMIT}`}
          />
          <Emoji
            onChange={event => setHumorFeedback(event.target.value)}
            humor={humorFeedback}
          />

          {loadingSend ? (
            <CircularProgress color="primary" />
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              endIcon={<AddCommentOutlined />}
              onClick={() => handleSubmit()}
              className={classes.button}
              disabled={!typeFeedback || !humorFeedback || !feedback}
            >
              {text('buttonSendFeedback')}
            </Button>
          )}
          {settings.numberResponseDay < 20 && (
            <Button
              variant="text"
              size="small"
              onClick={() => router.push('/questions')}
            >
              {text('finishedButtonMore')}
            </Button>
          )}
        </div>
      </LayoutPage>
    </>
  )
}

export default Feedback
