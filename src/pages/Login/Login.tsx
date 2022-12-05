import React, {useState, useEffect} from 'react'
import './login.css'
import Nav from '../../components/Nav'
import { Link, useNavigate } from 'react-router-dom'
import {DashViewType} from '../../types'
import {useLocalStorage} from '../../hooks/useLocalStorage'
import useInput from '../../hooks/useInput'
// todo: move to config file
const LOGIN_URL = 'http://localhost:5555/session/login'


function Login() {
    const [email, resetEmail, emailAttributes] = useInput('email', '')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useLocalStorage('accessToken', '')
    const [refreshToken, setrefreshToken] = useLocalStorage('refreshToken', '')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify({email, password})
            }
            fetch(LOGIN_URL, requestOptions).then((res) => {
                console.log(res)
                // todo: set auth 
                if (res.status != 200) {
                    console.log("Error! could not login")
                    return
                }
                return res.json()
            }).then((resJSON) => {
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setrefreshToken(refreshToken)
                resetEmail()
                navigate("/")
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    // todo: use html label tags instead of div for input labels
    // check if auth token is valid, 
    // if so redirect to dashboard

    return (
        <div className='loginWrapper'>
            <Nav view={DashViewType.LOGIN} pageName={'Dragon Age World State Manager'}/>
            <form onSubmit = {handleSubmit}>
                <div className='login'>
                    <div className='loginHeader'>
                        Log In
                    </div>
                    <div className='inputWrapper'>
                        <div className='loginSection'>
                            <div className='inputHeader'>Email</div> 
                            <input 
                                className='loginInput' 
                                {...emailAttributes}
                            />
                        </div>
                        <div className='loginSection'>
                            <div className='inputHeader'>Password</div> 
                            <input 
                                className='loginInput' 
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='forgot'>
                            <span>Forgot password?</span>
                        </div>
                        <div className='loginButtonWrapper'>
                            <button className='loginButton'>Login</button>
                        </div>
                        <div>
                            <span>Don't have an account?</span> <Link className='linkText' to='/register'>Register here </Link> 
                        </div>
                    </div>
                </div>   
            </form>
        </div>
    )
}


export default Login
