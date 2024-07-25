import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import {AuthContext, UserContextType} from '../../context/auth'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import './login.css'
import { LOGIN_URL } from '../../config'



function Login() {
    const [email, resetEmail, emailAttributes] = useInput('email', '')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const { setAccessToken, setRefreshToken, setEmail } = useContext(AuthContext) as UserContextType
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const navigate = useNavigate()
    setPageView(PageViewType.LOGIN)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({email, password})
        }

        try {
            fetch(LOGIN_URL, requestOptions).then((res) => {
                console.log(res)
                // todo: set auth 
                if (res.status !== 200) {
                    throw new Error("Could not login")
                } else {
                    return res.json()
                }
            }).then((resJSON) => {
                console.log(resJSON)
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                setEmail(email)
                // todo: set username in context
                resetEmail()
                navigate("/")
            }).catch((err) => {
                console.log(err)
                setLoginError(err.toString())
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
                        {loginError !== '' &&
                        <div className="authErrorContainer">
                            <div className="authErrorBox">
                                <p>{loginError} </p>
                                <p>{"Please check your credentials and try again."} </p>
                            </div>
                        </div>
                        }
                    </div>
                </div>   
            </form>
        </div>
    )
}


export default Login
