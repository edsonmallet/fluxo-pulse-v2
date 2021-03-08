import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import RatingStar from '@components/QuestionsForms/RatingStar'

interface StarsProps {
  question: ResponseQuestion
  onSelect: (event: any) => void
}

const Stars: React.FC<StarsProps> = ({ question, onSelect }: StarsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingStar
        options={question.answers.reverse()}
        onSelect={onSelect}
      ></RatingStar>
    </div>
  )
}

export default Stars
