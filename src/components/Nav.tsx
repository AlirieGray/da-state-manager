import React from 'react'
import '../styles/nav.css'

// type ReduxProps = ConnectedProps<typeof connector>
// type Props = ReduxProps

type Props = {
    viewing: boolean;
    pageName: string;
}

class Nav extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {viewing, pageName} = this.props;
        return (
            <div className="navWrapper">
                <div className="navContainer"> 
                    <div className="currentView">
                        {viewing ? "Viewing: " + pageName: "Editing: " + pageName} 
                    </div>   
                    <div className="navButtons">
                        <span className="navButton">Settings</span>
                        <span className="navButton">About</span>
                        <span className="navButton">Profile</span>
                    </div>  
                </div>
                <hr className="navDivider"></hr>
            </div>
        )
    }

}

export default Nav
