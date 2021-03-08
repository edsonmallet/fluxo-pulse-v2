import useTranslation from '@contexts/Intl'
import useSettings from '@contexts/Settings'
import { Button, CircularProgress, LinearProgress } from '@material-ui/core'
import { AddCommentOutlined, Check } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'

interface QuestionActionsProps {
  loading?: boolean
  onConfirm: (event: any) => void
  onSkip: (event: any) => void
}

const QuestionActions: React.FC<QuestionActionsProps> = React.memo(
  ({ onConfirm, onSkip, loading }: QuestionActionsProps) => {
    const classes = useStyles()
    const { text } = useTranslation()
    const { settings } = useSettings()

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
          >
            {text('buttonConfirmSendPulse')}
          </Button>
        )}

        <div className={classes.progressBar}>
          {settings.numberResponseDay < 10
            ? settings.numberResponseDay + '/10'
            : settings.numberResponseDay + '/20'}
          <LinearProgress
            variant="determinate"
            color="primary"
            value={settings.numberResponseDay}
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
        >
          enviar Feedback ?
        </Button>
      </div>
    )
  }
)

export { QuestionActions }
