import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { checkCompanyExists } from '@services/company'

interface HomeProps {
  code: string
}

const Questions: NextPage<HomeProps> = ({ code }: HomeProps) => {
  const { text } = useTranslation()
  const [company, setCompany] = useState<any>({})
  const router = useRouter()
  const classes = useStyles()

  const getCompany = async (code: string) => {
    const ret = await checkCompanyExists({ code })
    if (!ret) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Empresa não encontrada',
        willClose: () => router.push('/')
      })
    }
    setCompany(ret)
  }

  const handleInitPulse = () => console.log('Foi/.')

  useEffect(() => {
    getCompany(code)
  }, [])

  return (
    <>
      <LayoutPage companyLogoSrc={company.logo}>Questions</LayoutPage>
    </>
  )
}

Questions.getInitialProps = async ({
  query
}: NextPageContext): Promise<HomeProps> => {
  let { code } = query
  code = code as string
  return { code }
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
