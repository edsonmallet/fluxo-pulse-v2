import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import ImagesList from '@components/QuestionsForms/Images'
import useTranslation from '@contexts/Intl'

interface ImagesProps {
  question: ResponseQuestion
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Images: React.FC<ImagesProps> = ({ question, onChange }: ImagesProps) => {
  const classes = useStyles()
  const options = question.answers.slice()
  const { text } = useTranslation()


  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <Typography variant="body2" className={classes.decisionInstruction}>{text('decisionInstruction')}</Typography>
      <ImagesList options={options} onChange={onChange}></ImagesList>
    </div>
  )
}

export default Images
