import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState, World} from '../types'
import Nav from './Nav'
import Worlds from './Worlds'
import '../styles/dashboard.css'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

class Dashboard extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {worlds} = this.props

        return (
            <div className="dashboardWrapper">
                <Nav viewing={true} pageName={"World States At-a-Glance"}/>
                <Worlds />       
            </div>
        )
    }

}

const mstp = (state: AppState) => {
    const {worlds} = state.worlds

    return {
        worlds,  
    }
}

const mdtp = {

}

const connector = connect(mstp, mdtp)

export default connector(Dashboard)
