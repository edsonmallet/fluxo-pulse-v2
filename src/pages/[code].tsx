import LayoutPage from '@components/LayoutPage'
import useTranslation from '@contexts/Intl'
import { NextPage, NextPageContext } from 'next'
import { useRouter } from 'next/router'
import { makeStyles, Typography } from '@material-ui/core'
import Image from 'next/image'

interface HomeProps {
  code: string
}

const useStyles = makeStyles(theme => ({
  titles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  }
}))

const Home: NextPage<HomeProps> = ({ code }: HomeProps) => {
  const { text } = useTranslation()
  const router = useRouter()
  const classes = useStyles()
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
          <Typography variant="h5" component="h1">
            {text('informerTitle')}
          </Typography>
          <Typography variant="body2">{text('informerDescription')}</Typography>
        </div>

        {code}
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
