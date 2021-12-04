import React from 'react';
import '../styles/worldDisplay.css'
import edit from '../images/edit.png'
import Protagonist from './Protagonist'
import {World} from '../types'

interface Props {
  world: World
}

class WorldDisplay extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {name, warden, hawke, inky} = this.props.world

    return (
      <div className="stateWrapper">
          <div className="worldStateHeader">
            <div className="worldStateName">
                {name}
            </div>
            <button className="editButton">
              <img className="editImg" src={edit} />
            </button>
          </div>
          <Protagonist name={warden.name} romance={warden.romance} />
          <Protagonist name={hawke.name} romance={hawke.romance} />
          <Protagonist name={inky.name} romance={inky.romance} />
      </div>
    )
  }
}

export default WorldDisplay
