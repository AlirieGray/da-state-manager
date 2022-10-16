import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState, World} from '../types'
import WorldDisplay from './WorldDisplay'
import { addWorldState, removeWorldState } from '../actions/worlds'
import '../styles/worlds.css'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

class Worlds extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {worlds} = this.props

        return (
            <div className="worldsContainer">
                {worlds.map(world => {
                    console.log(world)
                    return <WorldDisplay key={world.name} 
                        world={world} 
                    />
                })}
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
    addWorldState,
    removeWorldState,
}

const connector = connect(mstp, mdtp)

export default connector(Worlds)
