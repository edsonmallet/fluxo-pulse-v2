import { Typography } from '@material-ui/core'
import useStyles from './styles'
import RatingEscale from '@components/QuestionsForms/RatingEscale'
import { ResponseQuestion } from '@services/pulse'

interface EnpsProps {
  question: ResponseQuestion
  onSelect: (event: any) => void
}

const Enps: React.FC<EnpsProps> = ({ question, onSelect }: EnpsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingEscale
        options={question.answers.reverse()}
        onSelect={onSelect}
      ></RatingEscale>
    </div>
  )
}

export default Enps
