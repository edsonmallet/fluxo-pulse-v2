import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import OptionsList from '@components/QuestionsForms/Options'

interface OptionsProps {
  question: ResponseQuestion
}

const Options: React.FC<OptionsProps> = ({ question }: OptionsProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <OptionsList
        options={question.answers}
        onChange={console.log}
      ></OptionsList>
    </div>
  )
}

export default Options
