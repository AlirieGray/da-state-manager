import {useState} from 'react';
import {World} from '../../types'
import { Link } from 'react-router-dom'
import defaultImgSrc from '../../images/inqLogo.png'
import './worldCard.css'

interface CardProps {
  world: World
  setModalOpen: any
  setWorldToDelete: any
}

function truncateSummary(summary: string): string {
  return summary.length > 100 ? summary.substring(0, 99).trim() + '...' : summary
}

function WorldCard({ world, setModalOpen, setWorldToDelete }: CardProps)  {
  

  return (
    <div className='worldCard'>
      <div className='worldHeader'>
        <img src={world.imgLink && world.imgLink !== '' ? world.imgLink: defaultImgSrc} className='worldImg'></img>
        <div className='worldHeaderDetails'>
          <div className='worldName'>
            {world.name}
          </div>
          <div className='worldCardButtons'>
            <Link className='worldButton'to={`/world/${world.ID}/view`}>View |</Link> 
            <Link className='worldButton' to={`/world/${world.ID}/edit`}>Edit |</Link> 
            <span className='worldButton'>Export |</span>
            <span className='worldButton' onClick={() => {
              console.log('world')
              setWorldToDelete(world['name'])
              setModalOpen(true)
            }}>Delete</span>
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
            return <span key={game.protagonist.name}>{game.protagonist.name}</span>
          }
        })}
      </div>
    </div>
  )

}


export default WorldCard
