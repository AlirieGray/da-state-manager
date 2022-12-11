import React from 'react';
import './worldCard.css'
import {World} from '../../types'
import { Link } from 'react-router-dom'
import imgSrc from '../../images/isabela.jpeg'

interface Props {
  world: World
}

function truncateSummary(summary: string): string {
  return summary.length > 100 ? summary.substring(0, 99) + '...' : summary
}

class WorldCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {
      world,
    } = this.props

    return (
      <div className='worldCard'>
        <div className='worldHeader'>
          <img src={imgSrc} className='worldImg'></img>
          <div className='worldHeaderDetails'>
            <div className='worldName'>
              {world.name}
            </div>
            <div className='worldCardButtons'>
              <Link className='worldButton' to={`/world/${world.ID}/edit`}>Edit |</Link> 
              <Link className='worldButton'to={`/world/${world.ID}/view`}>Expanded View |</Link> 
              <div className='worldButton'>Export</div>
            </div>
          </div>
        </div>
        <div className='worldContent'>
          <span className='summaryHeader'>Summary</span>
          {truncateSummary(world.summary)}
        </div>
      </div>
    )
  }
}

export default WorldCard
