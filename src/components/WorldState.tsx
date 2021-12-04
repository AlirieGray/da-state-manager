import React from 'react';
import '../styles/worldState.css'
import Protagonist from './Protagonist'
import {World} from '../types'

type Props = {
  world: World
}

class WorldState extends React.Component<Props> {
  render() {
    const {name, warden, hawke, inky} = this.props.world
 
    return (
      <div className="stateWrapper">
          <div className="worldStateName">
              World State: {name}
          </div>
          <Protagonist name={warden.name} romance={warden.romance} />
          <Protagonist name={hawke.name} romance={hawke.romance} />
          <Protagonist name={inky.name} romance={inky.romance} />
      </div>
    )
  }
}

export default WorldState
