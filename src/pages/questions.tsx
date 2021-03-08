import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getNextQuestion, ResponseQuestion } from '@services/pulse'
import { LoadingQuestion } from '@components/LoadingQuestion'
import { QuestionActions } from '@components/QuestionActions'
import Images from '@components/QuestionTypes/Images'
import Enps from '@components/QuestionTypes/Enps'
import Stars from '@components/QuestionTypes/Stars'
import Options from '@components/QuestionTypes/Options'

const Questions: NextPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<ResponseQuestion>()
  const { text } = useTranslation()
  const router = useRouter()
  const classes = useStyles()

  const getQuestion = async () => {
    const question = await getNextQuestion()
    setCurrentQuestion(question)
  }

  useEffect(() => {
    getQuestion()
  }, [])

  return (
    <>
      <LayoutPage>
        {!currentQuestion ? (
          <LoadingQuestion label={text('loadingQuestion')} />
        ) : (
          <div className={classes.container}>
            <Options question={currentQuestion} onSelect={console.log} />
            <QuestionActions
              loading={false}
              onConfirm={() => console.log('Confirm')}
              onSkip={() => console.log('Skip')}
            />
          </div>
        )}
      </LayoutPage>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}))

export default Questions
