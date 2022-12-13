import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'
import { ThemeContextType, Color, Theme, getThemeColors } from '../types'

interface ThemeContextProps {
    themeType: ThemeContextType
    theme: Theme
    setCurrentTheme: Dispatch<SetStateAction<ThemeContextType>>
}

export const ThemeContext = createContext({
    themeType: 'light',
    theme: getThemeColors('light')
} as ThemeContextProps)

const ThemeContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeContextType>('light')

    return <ThemeContext.Provider value={{
        themeType: currentTheme,
        theme: getThemeColors(currentTheme),
        setCurrentTheme
    }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContextProvider