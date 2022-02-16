import React from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {AppState, World} from '../types'
import WorldDisplay from './WorldDisplay'
import { addWorldState, removeWorldState } from '../actions/worlds'
import { showEditOverlay, hideEditOverlay } from '../actions/overlays'
import { addChange, setNewEditableForm, editFormSuccess } from '../actions/worldForm'
import AddNewWorld from './AddNewWorld'
import '../styles/worlds.css'

type ReduxProps = ConnectedProps<typeof connector>
type Props = ReduxProps

class Worlds extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {worlds, editOverlayOn, view, edit} = this.props

        return (
            <div className="wrapper">
                <AddNewWorld onAddWorld={this.handleAddWorld}/>
                <div className="worldsContainer">
                    {worlds.map(world => {
                        return world.active && <WorldDisplay key={world.name} 
                            world={world} 
                            editOverlayOn={editOverlayOn}
                            onRemoveWorld={this.handleRemoveWorld}
                            onShowOverlay={this.handleShowEditOverlay} 
                            onHideOverlay={this.handleHideEditOverlay} 
                            onAddChange={this.handleAddChange}
                            // onSave={handleOnSave}
                            setNewEditableForm={this.setUpForm}
                            formView={view.world}
                            formEdit={edit.world}
                            />
                    })}
                </div>

            </div>
        )
    }

    // private handleOnSave = () => {
    //     this.props.editFormSuccess()
    // }

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

    private handleAddChange = (world: World) => {
        this.props.addChange(world)
    }

    private setUpForm = (world: World) => {
        this.props.setNewEditableForm(world)
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
    editFormSuccess,
    setNewEditableForm,
}

const connector = connect(mstp, mdtp)

export default connector(Worlds)
