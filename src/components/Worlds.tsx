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

        return (
            <div>
                {worlds.map(world => {
                    <WorldDisplay key={world.name} world={world} />
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

const connector = connect(mstp)

export default connector(Worlds)
