import React from 'react'
import '../styles/editOverlay.css'
import close from '../images/close.png'
import WorldForm from './WorldForm'

interface Props {
    ID: string
    onClose: () => void
    onRemoveWorld: (ID: string) => void
}

class EditOverlay extends React.Component<Props> {

    render() {
        const {onClose} = this.props

        return (
            <div className="overlayBackground">
                <div className="overlayContainer">
                    <div className="formHeader">
                        <div>Edit World State </div>
                        <button onClick={onClose}>
                            <img src={close} className="closeImg"/>
                        </button>
                    </div>
                    {/* <WorldForm /> */}
                    <button className="deleteButton" onClick={this.handleDelete}>
                        Delete This World State
                    </button>
                </div>
            </div>
        )
    }


    private handleDelete = () => {
        const {onClose, onRemoveWorld, ID} = this.props
        onRemoveWorld(ID)
        onClose()
    }
}

export default EditOverlay
