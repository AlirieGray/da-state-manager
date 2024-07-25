import React, {useState, useContext} from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import {AuthContext, UserContextType} from '../../context/auth'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType } from '../../types'
import { REGISTER_URL } from '../../config'

// todo: use text input component

function Register() {
    const [user, resetUser, userAttributes] = useInput('user', '')
    const [email, resetEmail, emailAttr] = useInput('email', '')
    const [password, setPassword] = useState('')
    const { setAccessToken, setRefreshToken, setEmail, setUsername } = useContext(AuthContext) as UserContextType
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const navigate = useNavigate()
    setPageView(PageViewType.REGISTER)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify({username: user, password, email})
            }
            fetch(REGISTER_URL, requestOptions).then((res) => {
                if (res.status !== 201) {
                    // handle error message
                    console.log("error, could not register!")
                    return
                }
                return res.json()
            }).then((resJSON) => {
                const accessToken = resJSON['accessToken']
                const refreshToken = resJSON['refreshToken']
                setAccessToken(accessToken)
                setRefreshToken(refreshToken)
                setEmail(email)
                setUsername(user)
                resetEmail()
                resetUser()
                navigate("/")
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='registerWrapper'>
            <form onSubmit={handleSubmit} >
                <div className='register'>
                    <div className='registerHeader'>
                        Sign Up
                    </div>
                    <div className='inputWrapper'>
                        <div className='registerSection'>
                            <div className='inputHeader'>Email</div> 
                            <input 
                                className='registerInput' 
                                type='email' 
                                {...emailAttr}
                            /> 
                        </div>
                        <div className='registerSection'>
                            <div className='inputHeader'>Username</div> 
                            <input 
                                className='registerInput'
                                {...userAttributes} 
                            /> 
                        </div>
                        <div className='registerSection'>
                            <div className='inputHeader'>Password</div> 
                            <input 
                                className='registerInput' 
                                type='password' 
                                onChange={(e) => setPassword(e.target.value)}    
                            /> 
                        </div>
                        <div className='forgot'>
                            <span>Forgot password?</span>
                        </div>
                        <div className='registerButtonWrapper'>
                            <button className='registerButton'>Sign Up</button>
                        </div>
                        <div>
                            <span>Already have an account? </span> <Link className='linkText' to='/login'> Sign in here </Link> 
                            </div>
                    </div>
                </div>   
            </form>
        </div>
    )

}


export default Register
