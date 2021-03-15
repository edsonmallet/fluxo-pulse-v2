import React from 'react'
import { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppThemeProvider from '@components/AppThemeProvider'
import NextNprogress from 'nextjs-progressbar'
import theme from '@styles/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AppThemeProvider>
        <CssBaseline />
        <NextNprogress
          color={theme.palette.primary.main}
          startPosition={0.3}
          stopDelayMs={0}
          height={3}
          options={{ easing: 'ease', speed: 500 }}
        />
        <Component {...pageProps} />
      </AppThemeProvider>
    </>
  )
}

export default MyApp
