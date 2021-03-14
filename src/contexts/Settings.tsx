import { formatDateBr } from '@utils/convertDates'
import { createContext, useContext, useEffect, useState } from 'react'

interface ISettings {
  tokenPulse?: string
  numberResponseDay?: number
  maxResponseDay?: number
  currentDate?: string
  logo?: string
  code?: string
}

interface SettingContextData {
  settings: ISettings
  saveSettings(data: ISettings): void
  clearSettings(): void
  resetDayVotes(): void
}

const defaultSettings: ISettings = {
  tokenPulse: '',
  numberResponseDay: 1,
  maxResponseDay: 10,
  currentDate: formatDateBr(),
  logo: '',
  code: ''
}

const SettingsContext = createContext<SettingContextData>({
  settings: defaultSettings,
  saveSettings: () => {},
  clearSettings: () => {},
  resetDayVotes: () => {}
} as SettingContextData)

export const SettingsProvider = ({ settings, children }) => {
  const [currentSettings, setCurrentSettings] = useState<ISettings | null>(
    settings || null
  )

  const clearSettings = (): void => {
    setCurrentSettings(defaultSettings)
    window.localStorage.setItem('settings', JSON.stringify(defaultSettings))
  }

  const storeSettings = (settings: ISettings): void => {
    window.localStorage.setItem('settings', JSON.stringify(settings))
  }

  const resetDayVotes = (): void => {
    let settings = null
    let storedData = window.localStorage.getItem('settings')
    if (storedData) {
      settings = JSON.parse(storedData)
      const now = formatDateBr()
      if (new Date(now).getTime() > new Date(settings.currentDate).getTime()) {
        settings.maxResponseDay = 10
        settings.numberResponseDay = 1
      }
      saveSettings(settings)
    }
  }

  const restoreSettings = (): ISettings => {
    let settings = null

    try {
      let storedData = window.localStorage.getItem('settings')
      if (storedData) {
        settings = JSON.parse(storedData)
      }
    } catch (err) {
      console.error(err)
    }

    return settings
  }

  const saveSettings = (update: ISettings): void => {
    const mergedSettings = update
    setCurrentSettings(mergedSettings)
    storeSettings(mergedSettings)
  }

  useEffect(() => {
    const restoredSettings = restoreSettings()
    if (restoredSettings) setCurrentSettings(restoredSettings)
  }, [])

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings,
        clearSettings,
        resetDayVotes
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

const useSettings = () => useContext(SettingsContext)

export default useSettings
