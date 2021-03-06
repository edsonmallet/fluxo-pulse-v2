import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import {
  Button,
  FormControl,
  InputLabel,
  ListSubheader,
  makeStyles,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core'
import Image from 'next/image'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { checkCompanyExists } from '@services/company'
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined'

interface HomeProps {
  code: string
}

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
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
  const router = useRouter()
  const classes = useStyles()

  const getCompany = async (code: string) => {
    try {
      const company = await checkCompanyExists({ code: code })
      if (company) {
      } else {
        throw new Error('Company Not found')
      }
    } catch (e) {}
  }

  useEffect(() => {
    try {
      getCompany(code)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: error.message,
        willClose: () => router.push('/')
      })
    }
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

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Setor</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <ListSubheader>Category 1</ListSubheader>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <ListSubheader>Category 2</ListSubheader>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Setor</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Setor</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Setor</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
            <MenuItem value={3}>Option 3</MenuItem>
            <MenuItem value={4}>Option 4</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardOutlinedIcon />}
          className={classes.button}
        >
          {text('nextButton')}
        </Button>

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
