import React, {useState, useEffect} from 'react'
import './register.css'
import Nav from '../../components/Nav'
import {DashViewType} from '../../types'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import {useLocalStorage} from '../../hooks/useLocalStorage'

const REGISTER_URL = 'http://localhost:5555/users/create' // todo move to config

function Register() {
    const [user, resetUser, userAttributes] = useInput('user', '')
    const [email, resetEmail, emailAttr] = useInput('email', '')
    const [password, setPassword] = useState('')
    const [accessToken, setAccessToken] = useLocalStorage('accessToken', '')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-type': 'application/json'},
                body: JSON.stringify({username: user, password, email})
            }
            fetch(REGISTER_URL, requestOptions).then((res) => {
                console.log(res)
                if (res.status != 201) {
                    // handle error message
                    console.log("error, could not register!")
                    return
                }
                return res.json()
            }).then((resJSON) => {
                // todo: set auth 
                // redirect to private home route
                console.log(resJSON)
                resetUser()
                resetEmail()
                navigate("/dashboard")
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className='registerWrapper'>
            <Nav view={DashViewType.REGISTER} pageName={'Dragon Age World State Manager'}/>
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
