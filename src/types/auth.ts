export type UserContextType = {
    refreshToken: string
    accessToken: string
    setAccessToken: (token: string) => void
    setRefreshToken: (token: string) => void
    username: string
    email: string
    setEmail: (token: string) => void
    setUsername: (token: string) => void
}