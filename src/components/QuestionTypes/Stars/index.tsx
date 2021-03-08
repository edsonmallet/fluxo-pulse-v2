import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import RatingStar from '@components/QuestionsForms/RatingStar'

interface StarsProps {
  question: ResponseQuestion
}

const Stars: React.FC<StarsProps> = ({ question }: StarsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingStar
        options={question.answers.reverse()}
        onChange={console.log}
      ></RatingStar>
    </div>
  )
}

export default Stars