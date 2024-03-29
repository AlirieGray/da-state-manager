import './nav.css'
import {PageViewContextType, PageViewType} from '../../types'
import { Link, useNavigate } from 'react-router-dom'
import {AuthContext, UserContextType} from '../../context/auth'
import { useContext } from 'react'
import { PageViewContext } from '../../context/pageView'

// TODO: mobile responsive nav buttons
function Nav() {
    const {pageView} = useContext(PageViewContext) as PageViewContextType
    const { setAccessToken, setRefreshToken } = useContext(AuthContext) as UserContextType
    const navigate = useNavigate()

    const logout = async () => {
        setAccessToken('')
        setRefreshToken('')
    }

    return (
        <div className='navWrapper'>
            <div className='navContainer'> 
                <div>
                    <Link className='homeButton' to="/"> Dragon Age World State Manager </Link>
                </div>   
                {pageView != PageViewType.LOGIN && pageView != PageViewType.REGISTER && (
                    <div className='navButtons'>
                        <Link className='navButton' to="/create">New World State </Link>
                        <span className='navButton'>About</span>
                        <span className='navButton'>Profile</span>
                        <span className='navButton' onClick={logout}>Logout</span>
                    </div> 
                )}
                    
            </div>
            <hr className='navDivider'></hr>
        </div>
    )
}

export default Nav
