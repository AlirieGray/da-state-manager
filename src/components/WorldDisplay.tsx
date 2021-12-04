import React from 'react';
import '../styles/worldDisplay.css'
import edit from '../images/edit.png'
import Protagonist from './Protagonist'
import {World} from '../types'
import EditOverlay from './EditOverlay'

interface Props {
  world: World
  editOverlayOn: boolean
  onShowOverlay: () => void
  onHideOverlay: () => void
}

class WorldDisplay extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {editOverlayOn, onHideOverlay, world: {name, warden, hawke, inky}} = this.props
    let editOverlay;
    if (editOverlayOn) {
        editOverlay = <EditOverlay onClose={onHideOverlay}/>
    } else {
        <div />
    }

    return (
      <div className="stateWrapper">
          <div className="worldStateHeader">
            <div className="worldStateName">
                {name}
            </div>
            <button className="editButton">
              <img className="editImg" src={edit} onClick={this.handleClick}/>
            </button>
          </div>
          {editOverlay}
          <Protagonist name={warden.name} romance={warden.romance} />
          <Protagonist name={hawke.name} romance={hawke.romance} />
          <Protagonist name={inky.name} romance={inky.romance} />
      </div>
    )
  }

  private handleClick = () => {
    this.props.onShowOverlay()
  }

}

export default WorldDisplay
