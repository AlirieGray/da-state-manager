import React from 'react'
import plus from '../images/plus.png'
import '../styles/addNewWorld.css'

interface Props {
    onAddWorld: () => void
}

class AddNewWorld extends React.Component<Props> {

    handleClick = () => {
        this.props.onAddWorld();
    }
 
    render() {
        return (
            <div className="container" >
                <button className="addButton" onClick={this.handleClick}>
                    <img className="addButtonImg" src={plus} />
                </button>
                <div className="label">
                    Add New World State
                </div>
            </div>
        )
    }

}

export default AddNewWorld
