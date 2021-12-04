import React from 'react'
import plus from '../images/plus.png'
import '../styles/addNewState.css'

class AddNewState extends React.Component {

    handleClick = () => {
        console.log("adding state...")
    }
 
    render() {
        return (
        <div className="container" >
            <button className="addButton" onClick={this.handleClick}>
                <img className="addButtonImg" src={plus} />
            </button>
            <div className="label">
                Add New State
            </div>
        </div>
        )
    }
}

export default AddNewState
