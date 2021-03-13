import { memo, ReactNode } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import useStyles from './styles'
import { Button, Typography } from '@material-ui/core'
import useSettings from '@contexts/Settings'
import { useRouter } from 'next/router'

interface LayoutProps {
  logo?: string
  children: ReactNode
}

const LayoutPage: React.FC<LayoutProps> = ({ children, logo }: LayoutProps) => {
  const classes = useStyles()
  const { settings } = useSettings()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Fluxo Pulse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <header className={classes.header}>
          <Image
            width={128}
            height={48}
            alt="Logo"
            quality={100}
            src={logo || settings.logo || '/logos/fluxo_logo.svg'}
            loading="eager"
            layout="fixed"
          />
        </header>

        <main className={classes.main}>
          <div className={classes.containerMain}>{children}</div>
        </main>

        <footer className={classes.footer}>
          <div className={classes.poweredby}>
            <Typography className={classes.poweredbyText}>
              Powered By
            </Typography>
            <Image
              src="/logos/fluxo_icon.svg"
              width={18}
              height={18}
              loading="eager"
            />
          </div>
          <div>
            <Button
              variant="text"
              size="small"
              onClick={() => router.push('/finished')}
            >
              ENCERRAR
            </Button>
          </div>
        </footer>
      </div>
    </>
  )
}

export default memo(LayoutPage)
