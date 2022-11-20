import React from 'react'
import '../styles/nav.css'
import {DashViewType} from '../types'

type Props = {
    view: DashViewType;
    pageName: string;
}

function Nav(props: Props) {
    const {view, pageName} = props;
    return (
        <div className='navWrapper'>
            <div className='navContainer'> 
                <div className='currentView'>
                    {view == DashViewType.OVERVIEW && pageName} 
                    {view == DashViewType.VIEWING && 'Viewing: ' + pageName} 
                    {view == DashViewType.EDITING && 'Editing: ' + pageName}
                    {(view == DashViewType.LOGIN || view == DashViewType.REGISTER) && pageName}
                </div>   
                {view != DashViewType.LOGIN && view != DashViewType.REGISTER && (
                    <div className='navButtons'>
                    <span className='navButton'>Settings</span>
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
