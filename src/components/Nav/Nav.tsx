import './nav.css'
import {PageViewContextType, PageViewType} from '../../types'
import { Link } from 'react-router-dom'
import {AuthContext, UserContextType} from '../../context/auth'
import { useContext } from 'react'
import { PageViewContext } from '../../context/pageView'
import { stack as Menu } from 'react-burger-menu'

// TODO: mobile responsive nav buttons
function Nav() {
    const {pageView} = useContext(PageViewContext) as PageViewContextType
    const { setAccessToken, setRefreshToken } = useContext(AuthContext) as UserContextType

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
                {pageView !== PageViewType.LOGIN && pageView !== PageViewType.REGISTER && (
                    <div>
                        <div className='hamburger'>
                            <Menu right width= { '200px' } >
                                <Link id="menuDashboard" className='menu-item' to="/">  Dashboard </Link>
                                <Link id="menuCreate" className='menu-item' to="/create">  New World State </Link>
                                <Link id="menuAbout" className='menu-item' to="/about">  About </Link>
                                <span id="menuLogout" className='menu-item' onClick={logout}>  Logout </span>
                            </Menu>
                        </div>
                        <div className='navButtons'>
                            {pageView === PageViewType.OVERVIEW && <span className='navButtonSelected'>Dashboard</span> }
                            {pageView !== PageViewType.OVERVIEW && <Link className='navButton' to="/"> Dashboard </Link>}
                            
                            
                            {pageView === PageViewType.CREATING && <span className='navButtonSelected'>New World State</span>}
                            {pageView !== PageViewType.CREATING && <Link className='navButton' to="/create">New World State </Link>}
                            
                            {pageView === PageViewType.ABOUT && <span className='navButtonSelected'>About</span>}
                            {pageView !== PageViewType.ABOUT && <Link className='navButton' to="/about">About </Link>}

                            <span className='navButton'>Profile</span>
                            <span className='navButton' onClick={logout}>Logout</span>
                        </div> 
                    </div>
                )}
                    
            </div>
            <hr className='navDivider'></hr>
        </div>
    )
}

export default Nav
