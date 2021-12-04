import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState} from '../types'
import WorldDisplay from './WorldDisplay'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

class Worlds extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {worlds} = this.props
        console.log("warden: ")
        console.log(worlds[0].warden.name)
        return (
            <div>
                {worlds.map(world => {
                    return <WorldDisplay key={world.name} world={world} />
                })}
            </div>
        )
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

const connector = connect(mstp)

export default connector(Worlds)
