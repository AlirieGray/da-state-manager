import React from 'react'
import {World} from '../types'
import WorldDisplay from './WorldDisplay'
import '../styles/worlds.css'
import { useGetWorldstates } from '../hooks/worldstate'

function Worlds() {
    const [worlds, getWorlds] = useGetWorldstates()

    return (
        <div className='worldsContainer'>
            {worlds.map(world => {
                console.log(world)
                return <WorldDisplay key={world.name} 
                    world={world} 
                />
            })}
        </div>
    )
}


export default Worlds
