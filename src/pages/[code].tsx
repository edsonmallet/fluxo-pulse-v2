import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import {
  Button,
  CircularProgress,
  makeStyles,
  Typography
} from '@material-ui/core'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { checkCompanyExists, ResponseCompany } from '@services/company'
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

const Home: NextPage<HomeProps> = (companyWithGroups: ResponseCompany) => {
  const { text } = useTranslation()
  const { settings, saveSettings, clearSettings } = useSettings()
  const router = useRouter()
  const classes = useStyles()
  const [user, setUser] = useState<INewUser>(defaultUser)
  const [loadingInitPulse, setLoadingInitPulse] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value || 0 })
  }

  const handleInitPulse = async (): Promise<void> => {
    setLoadingInitPulse(true)
    if (!settings.tokenPulse) {
      const newUser = await createUser(user)
      console.log(newUser)
      if (!newUser) {
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Erro ao criar usuário, Tente Novamente!'
        })
        setLoadingInitPulse(false)
      }
      saveSettings({
        tokenPulse: newUser.digital,
        currentDate: new Date(),
        numberResponseDay: 0,
        maxResponseDay: 10,
        logo: companyWithGroups.logo,
        code: companyWithGroups.code
      })
      setLoadingInitPulse(false)
      router.push('/questions')
    }
  }

  const validForm = Object.values(user).some(
    item => item.length === 0 || item === 0
  )

  useEffect(() => {
    const settingsInitial = JSON.parse(window.localStorage.getItem('settings'))

    if (
      settingsInitial.code.toLocaleUpperCase() !=
      companyWithGroups.code.toLocaleUpperCase()
    ) {
      clearSettings()
      router.push(`/${companyWithGroups.code}`)
    }

    if (
      settingsInitial.tokenPulse &&
      settingsInitial.code == companyWithGroups.code
    ) {
      router.push(`/questions`)
    }
    if (!companyWithGroups) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Empresa não encontrada',
        willClose: () => router.push('/')
      })
    }
  }, [])

  return (
    <>
      <LayoutPage logo={companyWithGroups.logo}>
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

          {!!companyWithGroups.groups && (
            <SelectGroup
              label={text('subgroup')}
              id="subgroup"
              options={companyWithGroups.groups}
              onChange={event => handleChange(event)}
            />
          )}

          {loadingInitPulse ? (
            <CircularProgress color="primary" />
          ) : (
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
          )}
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
  query,
  res
}: NextPageContext): Promise<ResponseCompany> => {
  let { code } = query
  code = code as string

  if (!code) {
    res.writeHead(307, { Location: '/' })
    res.end()
  }

  const companyWithGroups = await checkCompanyExists({ code })

  if (!companyWithGroups) {
    res.writeHead(307, { Location: '/' })
    res.end()
  }
  return companyWithGroups
}

export default Home
