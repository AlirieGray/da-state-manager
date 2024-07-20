import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import {AuthContext, UserContextType} from '../../context/auth'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import './login.css'
// todo: move to config file, use variable for dev/production
const LOGIN_URL = 'http://localhost:5555/session/new'


function Login() {
    const [email, resetEmail, emailAttributes] = useInput('email', '')
    const [password, setPassword] = useState('')
    const { setAccessToken, setRefreshToken } = useContext(AuthContext) as UserContextType
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const navigate = useNavigate()
    setPageView(PageViewType.LOGIN)

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
                if (res.status !== 200) {
                    console.log("Error! could not login")
                    return
                }
                return res.json()
            }).then((resJSON) => {
                console.log(resJSON)
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                // todo: set user email and username in context
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
