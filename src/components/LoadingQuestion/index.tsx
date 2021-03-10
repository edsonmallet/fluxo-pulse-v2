import useTranslation from '@contexts/Intl'
import { Typography } from '@material-ui/core'
import Image from 'next/image'
import useStyles from './styles'

interface LoadingQuestionProps {
  label: object
}

const LoadingQuestion: React.FC<LoadingQuestionProps> = ({
  label
}: LoadingQuestionProps) => {
  const classes = useStyles()
  const { text } = useTranslation()
  return (
    <div className={classes.container}>
      <Image width={50} height={50} src="/loading.svg" />
      <Typography className={classes.text}>{label}</Typography>
    </div>
  )
}

export { LoadingQuestion }
