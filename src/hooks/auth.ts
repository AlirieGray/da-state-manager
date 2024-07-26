import { StatusContextType, StatusType, UserContextType } from '../types' 
import { StatusContext } from '../context/status'
import { useContext } from 'react'
import { GET_SESSIONS_URL, LOGIN_URL, REGISTER_URL } from '../config' 
import { AuthContext } from '../context/auth'
import { useNavigate } from 'react-router-dom'

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

export function useRegister(email: string, username: string, password: string) {
    const { setStatus, setErrorMessage } = useContext(StatusContext) as StatusContextType
    const { setAccessToken, setRefreshToken, setEmail, setUsername } = useContext(AuthContext) as UserContextType
    const navigate = useNavigate()

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({username, password, email})
    }

    const register = async () => {
        try {
            setStatus(StatusType.LOADING)
            fetch(REGISTER_URL, requestOptions).then((res) => {
                if (res.status !== 201) {
                    setStatus(StatusType.ERROR)
                    console.log("error, could not register!")
                    return
                }
                return res.json()
            }).then((resJSON) => {
                setStatus(StatusType.COMPLETE)
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                setEmail(email)
                setUsername(username)
                navigate("/")
            })
            
        } catch (err) {
            setStatus(StatusType.ERROR)
            setErrorMessage(`${err}`)
        }
    }

    return [register] as const
}

export function useValidateSession() {
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const { setStatus } = useContext(StatusContext) as StatusContextType
    const navigate = useNavigate()

    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-type': 'application/json',
            'x-refresh': `${refreshToken}`
        }
    }

    const getSession = async () => {
        try {
            setStatus(StatusType.LOADING)
            fetch(GET_SESSIONS_URL, options).then((res) => {
                console.log("get res")
                console.log(res)
                setStatus(StatusType.COMPLETE)
                if (res.status === 200) {
                    console.log("already logged in!")
                    navigate("/")
                }
                return res
            }).catch((err) => {
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    return [getSession] as const
}