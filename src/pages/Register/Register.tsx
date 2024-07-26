import React, { useState, useContext, useEffect} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { AuthContext } from '../../context/auth'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType, StatusContextType, StatusType, UserContextType } from '../../types'
import { StatusContext } from '../../context/status'
import { useValidateSession, useRegister } from '../../hooks/auth'
import { Oval } from 'react-loader-spinner'

// todo: use text input component

function Register() {
    const [user, resetUser, userAttributes] = useInput('user', '')
    const [email, resetEmail, emailAttr] = useInput('email', '')
    const [password, setPassword] = useState('')
    const { accessToken } = useContext(AuthContext) as UserContextType
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { status, errorMessage } = useContext(StatusContext) as StatusContextType
    const [register] = useRegister(email, user, password)
    const [getSession] = useValidateSession()
    setPageView(PageViewType.REGISTER)

    useEffect(() => {
        getSession()
    }, [accessToken])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register()
    }

    return (
        <div className='registerWrapper'>
            <div className='loadingSpinnerContainer'>
                    {status === StatusType.LOADING && <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#B60BEA"
                        secondaryColor="#6c04a3"
                        ariaLabel="oval-loading"
                        wrapperStyle={{marginTop: "20px"}}
                        wrapperClass=""
                    />}
            </div>
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
