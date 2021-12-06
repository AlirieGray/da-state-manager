import React from 'react';
import '../styles/worldDisplay.css'
import edit from '../images/edit.png'
import Protagonist from './Protagonist'
import {World} from '../types'
import EditOverlay from './EditOverlay'

interface Props {
  world: World
  editOverlayOn: boolean
  onAddChange: (world: World) => void
  onShowOverlay: () => void
  onHideOverlay: () => void
  onRemoveWorld: (ID: string) => void
  setNewEditableForm: (world: World) => void
  formView: World | null
  formEdit: World | null
}

class WorldDisplay extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {editOverlayOn, 
      onRemoveWorld, 
      onHideOverlay, 
      onAddChange,
      setNewEditableForm,
      world,
      formView,
      formEdit
    } = this.props
    
    
      let editOverlay
    if (editOverlayOn) {
        editOverlay = <EditOverlay 
          world={world}
          onAddChange={onAddChange}
          onClose={onHideOverlay}
          formEdit={formEdit}
          formView={formView}
          setNewEditableForm={setNewEditableForm}
          onRemoveWorld={onRemoveWorld} />
    } else {
        <div />
    }

    return (
      <div className="stateWrapper">
          <div className="worldStateHeader">
            <div className="worldStateName">
                {world.name}
            </div>
            <button className="editButton">
              <img className="editImg" src={edit} onClick={this.handleClick}/>
            </button>
          </div>
          {editOverlay}
          <Protagonist name={world.warden.name} romance={world.warden.romance} />
          <Protagonist name={world.hawke.name} romance={world.hawke.romance} />
          <Protagonist name={world.inky.name} romance={world.inky.romance} />
      </div>
    )
  }

  private handleClick = () => {
    this.props.onShowOverlay()
  }

}

export default WorldDisplay
