import './nav.css'
import {PageViewContextType, PageViewType} from '../../types'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { PageViewContext } from '../../context/pageView'

function Nav() {
    const {pageView} = useContext(PageViewContext) as PageViewContextType

    return (
        <div className='navWrapper'>
            <div className='navContainer'> 
                <div>
                    <Link className='homeButton' to="/"> Dragon Age World State Manager </Link>
                </div>   
                {pageView != PageViewType.LOGIN && pageView != PageViewType.REGISTER && (
                    <div className='navButtons'>
                        <Link className='navButton' to="/create">Create New World State </Link>
                        <span className='navButton'>About</span>
                        <span className='navButton'>Profile</span>
                        <span className='navButton'>Logout</span>
                    </div> 
                )}
                    
            </div>
            <hr className='navDivider'></hr>
        </div>
    )
}

export default Nav
