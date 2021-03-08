import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { ResponseQuestion } from '@services/pulse'
import ImagesList from '@components/QuestionsForms/Images'

interface ImagesProps {
  question: ResponseQuestion
}

const Images: React.FC<ImagesProps> = ({ question, onSelect }: ImagesProps) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <ImagesList options={question.answers} onSelect={onSelect}></ImagesList>
    </div>
  )
}

export default Images
