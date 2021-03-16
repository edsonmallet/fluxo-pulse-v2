import { Typography } from '@material-ui/core'
import Image from 'next/image'
import useTranslation from '@contexts/Intl'
import Head from 'next/head'
import useStyles from './styles'
import { memo, ReactNode } from 'react'
import Link from 'next/link'

interface LayoutLoginProps {
  children: ReactNode
  title: string
  subtitle: string
}

const LayoutLogin: React.FC<LayoutLoginProps> = (props: LayoutLoginProps) => {
  const classes = useStyles()
  const { text } = useTranslation()

  return (
    <>
      <Head>
        <title>Fluxo Pulse</title>
      </Head>
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.leftImage}></div>
          <div className={classes.rightForm}>
            <div className={classes.titles}>
              <Image
                src="/logos/fluxo_icon.svg"
                width={50}
                height={50}
                loading="eager"
              />
              <Typography variant="h5" component="h1">
                {text(`${props.title}`)}
              </Typography>
              <Typography variant="body2">
                {text(`${props.subtitle}`)}
              </Typography>
            </div>
            {props.children}
            <div className={classes.footer}>
              <Link href="https://fluxo.live">
                <a target="_blank">
                  <Typography className={classes.footerText}>
                    Powered By
                    <Image
                      src="/logos/fluxo_icon.svg"
                      width={24}
                      height={24}
                      loading="eager"
                    />
                  </Typography>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(LayoutLogin)
