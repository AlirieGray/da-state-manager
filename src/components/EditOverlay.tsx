import React from 'react'
import '../styles/editOverlay.css'
import close from '../images/close.png'

interface Props {
    onClose: () => void
}

class EditOverlay extends React.Component<Props> {

    render() {
        const {onClose} = this.props

        return (
            <div className="overlayBackground">
                <div className="editForm">
                    <div className="formHeader">
                        <div>Edit World State </div>
                        <button onClick={onClose}>
                            <img src={close} className="closeImg"/>
                        </button>
                    </div>
                    <button className="deleteButton" onClick={this.handleDelete}>
                        Delete This World State
                    </button>
                </div>
            </div>
        )
    }


    private handleDelete = () => {
        const {onClose, }
    }
}

export default EditOverlay
