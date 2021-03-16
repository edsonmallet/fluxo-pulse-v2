import { memo, ReactNode } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import useStyles from './styles'
import { Button, Typography } from '@material-ui/core'
import useSettings from '@contexts/Settings'
import { useRouter } from 'next/router'
import useTranslation from '@contexts/Intl'
import Link from 'next/link'

interface LayoutProps {
  logo?: string
  children: ReactNode
}

const LayoutPage: React.FC<LayoutProps> = ({ children, logo }: LayoutProps) => {
  const classes = useStyles()
  const { settings } = useSettings()
  const { text } = useTranslation()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Fluxo Pulse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <header className={classes.header}>
          <img
            src={logo || settings.logo || '/logos/fluxo_logo.svg'}
            alt="logo"
            className={classes.imgFluid}
          />
        </header>

        <main className={classes.main}>
          <div className={classes.containerMain}>{children}</div>
        </main>

        <footer className={classes.footer}>
          <div className={classes.poweredby}>
            <Link href="https://fluxo.live">
              <a target="_blank">
                <Typography className={classes.footerText}>
                  Powered By
                </Typography>
                <Image
                  src="/logos/fluxo_icon.svg"
                  width={18}
                  height={18}
                  loading="eager"
                />
              </a>
            </Link>
          </div>
          <div>
            <Button
              variant="text"
              size="small"
              onClick={() => router.push('/finished')}
            >
              {text('finishedFooter')}
            </Button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default memo(LayoutPage)
