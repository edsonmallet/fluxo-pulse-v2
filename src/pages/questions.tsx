import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {
  getNextQuestion,
  ResponseQuestion,
  vote,
  ResponseVote
} from '@services/pulse'
import { LoadingQuestion } from '@components/LoadingQuestion'
import { QuestionActions } from '@components/QuestionActions'
import Images from '@components/QuestionTypes/Images'
import Enps from '@components/QuestionTypes/Enps'
import Stars from '@components/QuestionTypes/Stars'
import Options from '@components/QuestionTypes/Options'
import useSettings from '@contexts/Settings'
import { Toast } from '@components/Toast'

const Questions: NextPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<ResponseQuestion>()
  const [noteSelected, setNoteSelected] = useState<string>(null)
  const [answerSelected, setAnswerSelected] = useState<string>(null)
  const [loadingVote, setLoadingVote] = useState<boolean>(false)
  const [responseVote, setResponseVote] = useState<ResponseVote | null>(null)
  const { text } = useTranslation()
  const { settings, saveSettings, clearSettings } = useSettings()
  const router = useRouter()
  const classes = useStyles()

  const getQuestion = async () => {
    setResponseVote(null)
    setCurrentQuestion(null)
    const question = await getNextQuestion()
    setNoteSelected(null)
    setAnswerSelected(null)
    setCurrentQuestion(question)
    setLoadingVote(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteSelected(event.target.value)
    setAnswerSelected(event.target.id)
  }

  const handleVote = async () => {
    setLoadingVote(true)

    if (settings.numberResponseDay === 10) {
      router.push('/decision')
    }

    if (settings.numberResponseDay >= 20) {
      router.push('/feedback')
    }

    try {
      saveSettings({
        ...settings,
        numberResponseDay: settings.numberResponseDay + 1
      })
      const resVote = await vote({
        tokenPulse: settings.tokenPulse,
        answerId: (answerSelected as unknown) as number,
        note: (noteSelected as unknown) as number
      })
      setResponseVote(resVote)
    } catch (error) {
      setResponseVote(error)
    }

    getQuestion()
    setLoadingVote(false)
  }

  useEffect(() => {
    const settingsInital = JSON.parse(window.localStorage.getItem('settings'))
    if (!settingsInital || !settingsInital.tokenPulse) {
      clearSettings()
      router.push('/')
    } else if (settingsInital.numberResponseDay > 20) {
      router.push('/feedback')
    } else if (settings.numberResponseDay >= settings.maxResponseDay) {
      router.push('/decision')
    }
    getQuestion()
  }, [])

  return (
    <>
      <LayoutPage>
        {responseVote && !!responseVote.message && (
          <Toast message={responseVote.message} status={responseVote.status} />
        )}
        {!currentQuestion ? (
          <LoadingQuestion label={text('loadingQuestion')} />
        ) : (
          <div className={classes.container}>
            {(currentQuestion.type_answer === '5imagens' ||
              currentQuestion.type_answer === '4imagens') && (
              <Images
                question={currentQuestion}
                onChange={event => handleChange(event)}
              />
            )}
            {(currentQuestion.type_answer === 'enps' ||
              currentQuestion.type_answer === '0a10') && (
              <Enps
                question={currentQuestion}
                onChange={event => handleChange(event)}
              />
            )}
            {currentQuestion.type_answer === '5estrelas' && (
              <Stars
                question={currentQuestion}
                onChange={event => handleChange(event)}
              />
            )}
            {currentQuestion.type_answer === '5opcoes' && (
              <Options
                question={currentQuestion}
                onChange={event => handleChange(event)}
              />
            )}

            <QuestionActions
              sendDisabled={!!noteSelected && !!answerSelected}
              loading={loadingVote}
              onConfirm={() => handleVote()}
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
