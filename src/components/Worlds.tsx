import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState} from '../types'
import WorldDisplay from './WorldDisplay'
import { addWorldState } from '../actions/worlds'
import AddNewWorld from './AddNewWorld'
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
            <div className="wrapper">
                <AddNewWorld onAddWorld={this.handleAddWorld}/>
                <div className="worldsContainer">
                    {worlds.map(world => {
                        return <WorldDisplay key={world.name} world={world} />
                    })}
                </div>
            </div>
        )
    }

    private handleAddWorld = () => {
        this.props.addWorldState()
    }
}

const mstp = (state: AppState) => {
    const {worlds} = state.worlds
    console.log("got name: ")
    console.log(worlds[0].name)
    return {
        worlds,   
    }
}

const mdtp = {
    addWorldState,
}

const connector = connect(mstp, mdtp)

export default connector(Worlds)
