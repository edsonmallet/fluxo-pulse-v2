import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import ImagesList from '@components/QuestionsForms/Images'

interface ImagesProps {
  question: ResponseQuestion
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Images: React.FC<ImagesProps> = ({ question, onChange }: ImagesProps) => {
  const classes = useStyles()
  const options = question.answers.slice()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <ImagesList options={options} onChange={onChange}></ImagesList>
    </div>
  )
}

export default Images
