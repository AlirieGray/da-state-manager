import React from 'react';
import '../styles/worldState.css'
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
    console.log("props dispaly?? ")
    console.log(inky.name)
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

export default WorldDisplay
