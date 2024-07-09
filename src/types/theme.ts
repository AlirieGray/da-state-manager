export type ThemeContextType = 'dark' | 'light'

export enum Color {
    PURPLE = 'rgb(70,62,103)',
    DARK_PURPLE = '#2D033A',
    LIGHT_PURPLE = '#A70AD6',
    TEAL = 'rgb(62,87,103)',
    DARK_BLUE = 'rgb(16,33,48)',
    LIGHT_TEAL = 'rgb(62,87,103)'
}

export interface Theme {
    '--primary': Color
    '--highlight': Color
    '--background': Color
    // '--button-idle': Color
    // '--button-hover': Color
}

export const getThemeColors = (themeKey: ThemeContextType): Theme => {
    if (themeKey === 'dark') {
        return {
            '--primary': Color.TEAL,
            '--highlight': Color.LIGHT_TEAL,
            '--background': Color.DARK_BLUE
        }
    }
    return {
        '--primary': Color.PURPLE,
        '--highlight': Color.LIGHT_PURPLE,
        '--background': Color.DARK_PURPLE
    }
}