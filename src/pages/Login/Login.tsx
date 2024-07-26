import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { PageViewContext } from '../../context/pageView'
import { PageViewContextType, PageViewType, StatusContextType, StatusType, UserContextType } from '../../types'
import './login.css'
import { StatusContext } from '../../context/status'
import { Oval } from 'react-loader-spinner'
import { useLogin, useValidateSession } from '../../hooks/auth'
import { AuthContext } from '../../context/auth'

function Login() {
    const [email, resetEmail, emailAttributes] = useInput('email', '')
    const [password, setPassword] = useState('')
    const { status, errorMessage } = useContext(StatusContext) as StatusContextType
    const { setPageView } = useContext(PageViewContext) as PageViewContextType
    const { accessToken } = useContext(AuthContext) as UserContextType
    const [getSession] = useValidateSession()
    const [login] = useLogin(email, password)
    setPageView(PageViewType.LOGIN)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login()
    }

    useEffect(() => {
        getSession()
    }, [accessToken])

    // todo: use html label tags instead of div for input labels

    return (
        <div className='loginWrapper'>
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
                        {errorMessage !== '' &&
                        <div className="authErrorContainer">
                            <div className="authErrorBox">
                                <p>{errorMessage} </p>
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
