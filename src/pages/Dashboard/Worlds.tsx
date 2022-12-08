import { useEffect, useContext} from 'react'
import WorldCard from './WorldCard'
import './worlds.css'
import { useGetWorldstates } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'


function Worlds() {
    const { accessToken } = useContext(AuthContext) as UserContextType
    const [worlds, getWorlds] = useGetWorldstates(accessToken)

    useEffect(() => {
        // let mounted = true
        getWorlds()
    }, [])

    return (
        <div className='worldsContainer'>
            {worlds && worlds.map(world => {
                console.log(world)
                return <WorldCard key={world.ID} 
                    world={world} 
                />
            })}
        </div>
    )
}


export default Worlds
