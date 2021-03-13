import { memo, ReactNode } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import useStyles from './styles'
import { Typography } from '@material-ui/core'
import useSettings from '@contexts/Settings'

interface LayoutProps {
  logo?: string
  children: ReactNode
}

const LayoutPage: React.FC<LayoutProps> = ({ children, logo }: LayoutProps) => {
  const classes = useStyles()
  const { settings } = useSettings()
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
          <Typography className={classes.footerText}>Powered By</Typography>
          <Image
            src="/logos/fluxo_icon.svg"
            width={18}
            height={18}
            loading="eager"
          />
        </footer>
      </div>
    </>
  )
}

export default memo(LayoutPage)
