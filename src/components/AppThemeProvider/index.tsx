import { LanguageProvider } from '@contexts/Intl'
import useSettings, { SettingsProvider } from '@contexts/Settings'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@styles/theme'
import { useEffect } from 'react'

const AppThemeProvider: React.FC = ({ children }) => {
  const { settings, resetDayVotes } = useSettings()

  useEffect(() => resetDayVotes(), [])

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
