import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const Questions: NextPage = () => {
  const { text } = useTranslation()
  const router = useRouter()
  const classes = useStyles()

  const handleInitPulse = () => console.log('Foi/.')

  useEffect(() => {}, [])

  return (
    <>
      <LayoutPage>Questions</LayoutPage>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  selects: {
    minHeight: 380,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formControl: {
    width: '100%',
    marginTop: 20,
    marginBottom: 10
  },
  button: {
    marginTop: 20
  },
  privacy: {
    marginTop: 20
  }
}))

export default Questions
