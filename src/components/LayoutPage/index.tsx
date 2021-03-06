import { memo, ReactNode } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import useStyles from './styles'
import { Typography } from '@material-ui/core'

interface LayoutProps {
  children: ReactNode
  companyLogoSrc?: string
}

const LayoutPage: React.FC<LayoutProps> = ({
  children,
  companyLogoSrc
}: LayoutProps) => {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Fluxo Pulse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <header className={classes.header}>
          <Image
            width={130}
            height={30}
            alt="Logo"
            quality={100}
            src={companyLogoSrc || '/logos/fluxo_logo.svg'}
            loading="lazy"
            layout="intrinsic"
          />
        </header>

        <main className={classes.main}>{children}</main>

        <footer className={classes.footer}>
          <Typography className={classes.footerText}>Powered By</Typography>
          <Image
            src="/logos/fluxo_icon.svg"
            width={24}
            height={24}
            loading="eager"
          />
        </footer>
      </div>
    </>
  )
}

export default memo(LayoutPage)
