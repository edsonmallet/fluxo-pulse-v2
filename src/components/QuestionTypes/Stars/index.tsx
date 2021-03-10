import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import RatingStar from '@components/QuestionsForms/RatingStar'

interface StarsProps {
  question: ResponseQuestion
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Stars: React.FC<StarsProps> = ({ question, onChange }: StarsProps) => {
  const classes = useStyles()
  const options = question.answers.slice().reverse()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingStar options={options} onChange={onChange}></RatingStar>
    </div>
  )
}

export default Stars
