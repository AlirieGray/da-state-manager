import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState} from '../types'
import WorldDisplay from './WorldDisplay'
import { addWorldState, removeWorldState } from '../actions/worlds'
import { showEditOverlay, hideEditOverlay } from '../actions/overlays'
import { addChange, setNewEditableForm } from '../actions/worldForm'
import AddNewWorld from './AddNewWorld'
import '../styles/worlds.css'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

class Worlds extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {worlds, editOverlayOn} = this.props

        return (
            <div className="wrapper">
                <AddNewWorld onAddWorld={this.handleAddWorld}/>
                <div className="worldsContainer">
                    {worlds.map(world => {
                        return <WorldDisplay key={world.name} 
                            world={world} 
                            editOverlayOn={editOverlayOn}
                            onRemoveWorld={this.handleRemoveWorld}
                            onShowOverlay={this.handleShowEditOverlay} 
                            onHideOverlay={this.handleHideEditOverlay} />
                    })}
                </div>

            </div>
        )
    }

    private handleAddWorld = () => {
        this.props.addWorldState()
    }

    private handleRemoveWorld = (ID: string) => {
        this.props.removeWorldState(ID)
    }

    private handleShowEditOverlay = () => {
        this.props.showEditOverlay()
    }

    private handleHideEditOverlay = () => {
        this.props.hideEditOverlay()
    }
}

const mstp = (state: AppState) => {
    const {worlds} = state.worlds
    const {editOverlayOn} = state.overlays
    const {view, edit} = state.worldForm
    return {
        worlds,  
        editOverlayOn,
        view,
        edit
    }
}

const mdtp = {
    addWorldState,
    removeWorldState,
    showEditOverlay, 
    hideEditOverlay,
    addChange,
    setNewEditableForm,
}

const connector = connect(mstp, mdtp)

export default connector(Worlds)
