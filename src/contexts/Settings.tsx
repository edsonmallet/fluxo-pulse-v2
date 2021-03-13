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
  clearSettings: () => {}
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

  const resetDayVotes = (storedData: string): string => {
    const store = JSON.parse(storedData)
    const now = formatDateBr()
    if (new Date(now).getTime() > new Date(store.currentDate).getTime()) {
      store.maxResponseDay = 10
      store.numberResponseDay = 1
    }

    return JSON.stringify(store)
  }

  const restoreSettings = (): ISettings => {
    let settings = null

    try {
      let storedData = window.localStorage.getItem('settings')
      if (storedData) {
        storedData = resetDayVotes(storedData)
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
        clearSettings
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

const useSettings = () => useContext(SettingsContext)

export default useSettings
