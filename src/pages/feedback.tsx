import Emoji from '@components/Emoji'
import FeedbackTypes from '@components/FeedbackTypes'
import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import {
  Button,
  FormControlLabel,
  makeStyles,
  Switch,
  TextField,
  Typography
} from '@material-ui/core'
import { AddCommentOutlined } from '@material-ui/icons'
import { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

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
  const classes = useStyles()
  const { text } = useTranslation()
  const [anonymous, setAnonymous] = useState<boolean>(true)
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
          <Typography variant="h6" component="h1">
            {text('feedbackTitle')}
          </Typography>
          <Typography variant="body2">{text('feedbackDescription')}</Typography>
        </div>
        <div className={classes.forms}>
          <FeedbackTypes />
          <TextField
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows={4}
            variant="outlined"
            className={classes.textArea}
          />
          <Emoji />
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<AddCommentOutlined />}
            onClick={console.log}
            className={classes.button}
          >
            {text('buttonSendFeedback')}
          </Button>
        </div>
      </LayoutPage>
    </>
  )
}

export default Feedback
