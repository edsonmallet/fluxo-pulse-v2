import { Typography } from '@material-ui/core'
import useStyles from './styles'
import RatingEscale from '@components/QuestionsForms/RatingEscale'
import { ResponseQuestion } from '@services/pulse'
import React, { memo } from 'react'

interface EnpsProps {
  question: ResponseQuestion
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Enps: React.FC<EnpsProps> = ({ question, onChange }: EnpsProps) => {
  const classes = useStyles()
  const options = question.answers.slice().reverse()

  return (
    <div className={classes.container}>
      <Typography className={classes.questionTitle}>
        {question.question}
      </Typography>
      <RatingEscale options={options} onChange={onChange}></RatingEscale>
    </div>
  )
}

export default Enps
