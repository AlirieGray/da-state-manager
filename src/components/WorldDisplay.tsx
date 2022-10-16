import React from 'react';
import '../styles/worldDisplay.css'
import edit from '../images/edit.png'
import Protagonist from './Protagonist'
import {World} from '../types'
import EditOverlay from './EditOverlay'
import imgSrc from '../images/isabela.jpeg'

interface Props {
  world: World
}

class WorldDisplay extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {
      world,
    } = this.props

    return (
      <div className="worldCard">
        <div className="worldHeader">
          <img src={imgSrc} className="worldImg"></img>
          <div className="worldHeaderDetails">
            <div className="worldName">
              {world.name}
            </div>
            <div className="worldCardButtons">
              <div className="worldButton">Export</div>
              <div className="worldButton">Edit</div>
              <div className="worldButton">Expanded View</div>
            </div>
          </div>
        </div>
        <div className="worldContent">
          <span className="summaryHeader">Summary</span>
          {world.summary}
        </div>
      </div>
    )
  }


}

export default WorldDisplay
