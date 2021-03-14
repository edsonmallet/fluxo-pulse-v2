import { LanguageProvider } from '@contexts/Intl'
import useSettings, { SettingsProvider } from '@contexts/Settings'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@styles/theme'
import { Router } from 'next/router'

Router.events.on('routeChangeComplete', () => {
  window.scrollTo(0, 1)
})

const AppThemeProvider: React.FC = ({ children }) => {
  const { settings } = useSettings()

  return (
    <>
      <LanguageProvider>
        <SettingsProvider settings={settings}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </SettingsProvider>
      </LanguageProvider>
    </>
  )
}

export default AppThemeProvider
