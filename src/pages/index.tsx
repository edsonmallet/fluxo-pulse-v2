import { Button, makeStyles } from '@material-ui/core'
import useTranslation from '@contexts/Intl'
import { useRouter } from 'next/router'
import LayoutLogin from '@components/LayoutLogin'
import { useCallback, useEffect, useState } from 'react'
import { CodePulse } from '@components/CodePulse'
import { checkCompanyExists } from '@services/company'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'
import { NextPage } from 'next'
import useSettings from '@contexts/Settings'

const Login: NextPage = () => {
  const classes = useStyles()
  const { text } = useTranslation()
  const router = useRouter()
  const { settings, resetDayVotes } = useSettings()

  const [codePulse, setCodePulse] = useState<string>('')
  const [codeValid, setCodeValid] = useState<boolean>(false)
  const [verifyCode, setVerifyCode] = useState<boolean>(false)

  const checkExistPulse = useCallback(
    async code => {
      try {
        setVerifyCode(true)
        const company = await checkCompanyExists({ code: code })
        if (company) {
          setCodePulse(company.code)
          setCodeValid(true)
        }

        setVerifyCode(false)
      } catch (e) {
        setVerifyCode(false)
      }
    },
    [codePulse]
  )

  const handleCode = (code: string) => {
    setCodePulse(code)
    if (code.length < 5) setCodeValid(false)
  }

  useEffect(() => {
    resetDayVotes()
    if (settings.tokenPulse && settings.numberResponseDay <= 20) {
      router.push('/questions')
    }
  }, [])

  return (
    <>
      <LayoutLogin title="pageCodeTitle" subtitle="pageCodeDescription">
        <form autoComplete="off" className={classes.formContent}>
          <CodePulse
            length={5}
            loading={verifyCode}
            valid={codeValid}
            onComplete={code => {
              setCodePulse(code)
              checkExistPulse(code)
            }}
            onChange={code => handleCode(code)}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!codeValid}
            onClick={() => router.push(`${codePulse}`)}
            size="large"
            endIcon={<ArrowForwardOutlinedIcon />}
          >
            {text('nextButton')}
          </Button>
        </form>
      </LayoutLogin>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
}))

export default Login
