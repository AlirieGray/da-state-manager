import React from 'react'
import '../styles/editOverlay.css'
import close from '../images/close.png'
import WorldForm from './WorldForm'
import { World } from '../types'

interface Props {
    world: World
    onAddChange: (world: World) => void
    onClose: () => void
    onRemoveWorld: (ID: string) => void
    setNewEditableForm: (world: World) => void
    formView: World | null
    formEdit: World | null
}

class EditOverlay extends React.Component<Props> {

    render() {
        const {
            onClose, 
            onAddChange, 
            setNewEditableForm, 
            world,
            formEdit,
            formView,
        } = this.props

        return (
            <div className="overlayBackground">
                <div className="overlayContainer">
                    <div className="formHeader">
                        <div>Edit World State </div>
                        <button onClick={onClose}>
                            <img src={close} className="closeImg"/>
                        </button>
                    </div>
                    <WorldForm 
                        world={world} 
                        setNewEditableForm={setNewEditableForm}
                        onAddChange={onAddChange} 
                        formView={formView}
                        formEdit={formEdit}
                        // saveChanges={saveChanges}
                    />
                    <button className="deleteButton" onClick={this.handleDelete}>
                        Delete This World State
                    </button>
                </div>
            </div>
        )
    }


    private handleDelete = () => {
        const {onClose, onRemoveWorld, world: {ID}} = this.props
        onRemoveWorld(ID)
        onClose()
    }
}

export default EditOverlay
