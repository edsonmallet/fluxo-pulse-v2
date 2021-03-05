import useTranslation from '@contexts/Intl'
import { Button } from '@material-ui/core'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const { text } = useTranslation()
  const router = useRouter()
  return <>Home</>
}

export default Home
