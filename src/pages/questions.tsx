import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Button, LinearProgress, makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { getNextQuestion, ResponseQuestion } from '@services/pulse'
import Enps from '@components/QuestionTypes/Enps'
import { LoadingQuestion } from '@components/LoadingQuestion'
import { Check } from '@material-ui/icons'

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
            <Enps question={currentQuestion} />

            <div className={classes.actions}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<Check />}
                className={classes.buttonSendPulse}
              >
                CONFIRMAR
              </Button>
              <div className={classes.progressBar}>
                4/10
                <LinearProgress
                  variant="determinate"
                  color="primary"
                  value={40}
                />
              </div>
              <Button variant="outlined" color="secondary" size="small">
                Pular
              </Button>
            </div>
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
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    minHeight: 150
  },
  buttonSendPulse: {
    padding: '25px 40px',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 700
  },
  progressBar: {
    width: 180,
    height: 40,
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 12
  }
}))

export default Questions
