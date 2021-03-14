import { LanguageProvider } from '@contexts/Intl'
import useSettings, { SettingsProvider } from '@contexts/Settings'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@styles/theme'

const AppThemeProvider: React.FC = ({ children }) => {
  const { settings } = useSettings()

  return (
    <>
      <SettingsProvider settings={settings}>
        <LanguageProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </LanguageProvider>
      </SettingsProvider>
    </>
  )
}

export default AppThemeProvider
