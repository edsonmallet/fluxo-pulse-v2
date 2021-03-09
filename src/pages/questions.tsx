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
  const [responseSelected, setResponseSelected] = useState<string>(null)
  const { text } = useTranslation()
  const router = useRouter()
  const classes = useStyles()

  const getQuestion = async () => {
    setCurrentQuestion(null)
    const question = await getNextQuestion()
    console.log(question)
    setResponseSelected(null)
    setCurrentQuestion(question)
  }

  const handleChange = (value: string) => {
    setResponseSelected(value)
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
            {(currentQuestion.type_answer === '5imagens' ||
              currentQuestion.type_answer === '4imagens') && (
              <Images
                question={currentQuestion}
                onChange={event => handleChange(event.target.value)}
              />
            )}
            {(currentQuestion.type_answer === 'enps' ||
              currentQuestion.type_answer === '0a10') && (
              <Enps
                question={currentQuestion}
                onChange={event => handleChange(event.target.value)}
              />
            )}
            {currentQuestion.type_answer === '5estrelas' && (
              <Stars
                question={currentQuestion}
                onChange={event => setResponseSelected(event.target.value)}
              />
            )}
            {currentQuestion.type_answer === '5opcoes' && (
              <Options
                question={currentQuestion}
                onChange={event => setResponseSelected(event.target.value)}
              />
            )}

            <QuestionActions
              sendDisabled={!!responseSelected}
              loading={false}
              onConfirm={() => console.log('Confirm')}
              onSkip={() => getQuestion()}
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
