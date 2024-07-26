import { StatusContextType, StatusType } from '../types' 
import { StatusContext } from '../context/status'
import { useContext } from 'react'
import { LOGIN_URL } from '../config' 
import {AuthContext, UserContextType} from '../context/auth'
import {useNavigate} from 'react-router-dom'

export function useLogin(email: string, password: string) {
    const { setStatus, setErrorMessage } = useContext(StatusContext) as StatusContextType
    const { setAccessToken, setRefreshToken, setEmail } = useContext(AuthContext) as UserContextType
    const navigate = useNavigate()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({email, password})
    }

    const login = async () => {
        try {
            setStatus(StatusType.LOADING)
            fetch(LOGIN_URL, requestOptions).then((res) => {
                // todo: set auth 
                if (res.status !== 200) {
                    throw new Error("Could not login")
                } else {
                    return res.json()
                }
            }).then((resJSON) => {
                setStatus(StatusType.COMPLETE)
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                setEmail(email)
                navigate("/")
                // todo: set username in context
                
            }).catch((err) => {
                setStatus(StatusType.ERROR)
                setErrorMessage(err.toString())
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    return [login] as const
}
