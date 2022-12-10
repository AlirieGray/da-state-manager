import React, { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export type UserContextType = {
    refreshToken: string
    accessToken: string
    setAccessToken: (token: string) => void
    setRefreshToken: (token: string) => void
    // username: string
    // email: string
}

export const AuthContext = createContext<UserContextType | null>(null)

const AuthContextProvider = ({ children }: React.PropsWithChildren<unknown>) => {
    const [accessToken, setAccessToken] = useLocalStorage("accessToken", "")
    const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken", "")

    return <AuthContext.Provider value={{
        accessToken,
        refreshToken,
        setAccessToken,
        setRefreshToken
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider

// todo: hydrate token when access token expired
// store auth info in global state using context api