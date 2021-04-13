import { Typography } from '@material-ui/core'
import useTranslation from '@contexts/Intl'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import OptionsList from '@components/QuestionsForms/Options'

interface OptionsProps {
  question: ResponseQuestion
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Options: React.FC<OptionsProps> = ({
  question,
  onChange
}: OptionsProps) => {
  const classes = useStyles()
  const options = question.answers.slice()
  const { text } = useTranslation()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <Typography variant="body2" className={classes.decisionInstruction}>{text('decisionInstruction')}</Typography>
      <OptionsList options={options} onChange={onChange}></OptionsList>
    </div>
  )
}

export default Options
