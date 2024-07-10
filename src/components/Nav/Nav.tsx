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
                        {pageView == PageViewType.OVERVIEW && <span className='navButtonSelected'>Dashboard</span> }
                        {pageView != PageViewType.OVERVIEW && <Link className='navButton' to="/"> Dashboard </Link>}
                        
                        
                        {pageView == PageViewType.CREATING && <span className='navButtonSelected'>New World State</span>}
                        {pageView != PageViewType.CREATING && <Link className='navButton' to="/create">New World State </Link>}
                        
                        {pageView == PageViewType.ABOUT && <span className='navButtonSelected'>About</span>}
                        {pageView != PageViewType.ABOUT && <Link className='navButton' to="/about">About </Link>}

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
