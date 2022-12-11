import React from 'react';
import {World} from '../../types'
import { Link } from 'react-router-dom'
import imgSrc from '../../images/isabela.jpeg'
import './worldCard.css'

interface CardProps {
  world: World
}

function truncateSummary(summary: string): string {
  return summary.length > 100 ? summary.substring(0, 99) + '...' : summary
}

function WorldCard({ world }: CardProps)  {
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
        <span className='contentHeader'>Summary</span>
          <span className='contentEntry'>{truncateSummary(world.summary)}</span>
        <span className='contentHeader'>
          Protagonists
        </span> 
        {world.games.map((game) => {
          if (game.protagonist.name !== '') {
            return <span>{game.protagonist.name}</span>
          }
        })}
      </div>
    </div>
  )
}

export default WorldCard
