import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { Button, makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { checkCompanyExists } from '@services/company'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'
import { SelectField } from '@components/Forms/SelectField'
import { SelectGroup } from '@components/Forms/SelectGroup'
import useSettings from '@contexts/Settings'
import { createUser } from '@services/pulse'

interface HomeProps {
  code: string
}

interface IOptions {
  value: string
  label: string
}

interface INewUser {
  gender: string
  ageGroup: string
  ageWork: string
  subgroup: number
}

const defaultUser = {
  gender: '',
  ageGroup: '',
  ageWork: '',
  subgroup: 0
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

const Home: NextPage<HomeProps> = ({ code }: HomeProps) => {
  const { text } = useTranslation()
  const [company, setCompany] = useState<any>({})
  const [user, setUser] = useState<INewUser>(defaultUser)
  const { settings, saveSettings } = useSettings()
  const router = useRouter()
  const classes = useStyles()

  const getCompany = async (code: string) => {
    if (settings.tokenPulse && settings.numberResponseDay <= 20) {
      router.push('/questions')
    }

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleInitPulse = async () => {
    if (!settings.tokenPulse && !settings.numberResponseDay) {
      const newUser = await createUser(user)
      if (!newUser) {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Erro ao criar usuário',
          willClose: () => router.push('/')
        })
      }
      saveSettings({
        tokenPulse: newUser.digital,
        currentDate: new Date(),
        numberResponseDay: 0,
        logo: company.logo,
        code: company.code
      })
    }
    router.push('/questions')
  }

  const validForm = Object.values(user).some(item => item.length === 0)

  useEffect(() => {
    getCompany(code)
  }, [])

  return (
    <>
      <LayoutPage>
        <div className={classes.titles}>
          <Image
            src="/logos/fluxo_icon.svg"
            width={32}
            height={32}
            loading="eager"
          />
          <Typography variant="h6" component="h1">
            {text('informerTitle')}
          </Typography>
          <Typography variant="body2">{text('informerDescription')}</Typography>
        </div>

        <div className={classes.selects}>
          <SelectField
            label={text('labelGenders')}
            id="gender"
            options={text('genders') as IOptions[]}
            onChange={event => handleChange(event)}
          />

          <SelectField
            label={text('labelAgeGroup')}
            id="ageGroup"
            options={text('ageGroup') as IOptions[]}
            onChange={event => handleChange(event)}
          />

          <SelectField
            label={text('labelAgeWork')}
            id="ageWork"
            options={text('ageWork') as IOptions[]}
            onChange={event => handleChange(event)}
          />

          {company.groups && (
            <SelectGroup
              label={text('subgroup')}
              id="subgroup"
              options={company.groups}
              onChange={event => handleChange(event)}
            />
          )}

          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForwardOutlinedIcon />}
            className={classes.button}
            onClick={() => handleInitPulse()}
            disabled={validForm}
          >
            {text('nextButton')}
          </Button>
        </div>

        <div className={classes.privacy}>
          <Typography variant="subtitle2">{text('privacyTitle')}</Typography>
          <Typography variant="caption">
            {text('privacyDescription')}
          </Typography>
        </div>
      </LayoutPage>
    </>
  )
}

Home.getInitialProps = async ({
  query
}: NextPageContext): Promise<HomeProps> => {
  let { code } = query
  code = code as string
  return { code }
}

export default Home
