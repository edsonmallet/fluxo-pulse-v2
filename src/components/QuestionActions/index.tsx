import useTranslation from '@contexts/Intl'
import useSettings from '@contexts/Settings'
import { Button, CircularProgress, LinearProgress } from '@material-ui/core'
import { AddCommentOutlined, Check } from '@material-ui/icons'
import { useRouter } from 'next/router'
import React from 'react'
import useStyles from './styles'

interface QuestionActionsProps {
  sendDisabled: boolean
  loading?: boolean
  onConfirm: (event: any) => void
  onSkip: (event: any) => void
}

const QuestionActions: React.FC<QuestionActionsProps> = React.memo(
  ({ onConfirm, onSkip, loading, sendDisabled }: QuestionActionsProps) => {
    const classes = useStyles()
    const { text } = useTranslation()
    const { settings } = useSettings()
    const router = useRouter()

    const normalise = (current: number, max: number) => (current * 100) / max

    return (
      <div className={classes.container}>
        {loading ? (
          <CircularProgress color="primary" />
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<Check />}
            className={classes.buttonSendPulse}
            onClick={onConfirm}
            disabled={!sendDisabled}
          >
            {text('buttonConfirmSendPulse')}
          </Button>
        )}

        <div className={classes.progressBar}>
          {`${settings.numberResponseDay}/${settings.maxResponseDay}`}
          <LinearProgress
            variant="determinate"
            color="primary"
            value={normalise(
              settings.numberResponseDay,
              settings.maxResponseDay
            )}
          />
        </div>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={onSkip}
        >
          {text('buttonSkipPulse')}
        </Button>
        <Button
          variant="text"
          size="small"
          startIcon={<AddCommentOutlined />}
          className={classes.buttonFeedback}
          onClick={() => router.push('/feedback')}
        >
          enviar Feedback ?
        </Button>
      </div>
    )
  }
)

export { QuestionActions }
