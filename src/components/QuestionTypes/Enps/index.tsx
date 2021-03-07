import { Typography } from '@material-ui/core'
import useStyles from './styles'
import RatingEscale from '@components/QuestionsFroms/RattingEscale'
import { ResponseQuestion } from '@services/pulse'

interface EnpsProps {
  question: ResponseQuestion
}

const Enps: React.FC<EnpsProps> = ({ question }: EnpsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingEscale
        options={question.answers.reverse()}
        onChange={console.log}
      ></RatingEscale>
    </div>
  )
}

export default Enps
