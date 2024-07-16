import { useEffect, useContext} from 'react'
import WorldCard from './WorldCard'
import './worlds.css'
import { useGetAllWorldstates } from '../../hooks/worldstate'
import {AuthContext, UserContextType} from '../../context/auth'

// TODO: type safety props
function Worlds({setModalOpen, setWorldToDelete, setWorldIDToDelete}: any) {
    const { accessToken, refreshToken } = useContext(AuthContext) as UserContextType
    const [worlds, getWorlds] = useGetAllWorldstates(accessToken, refreshToken)

    useEffect(() => {
        // let mounted = true
        getWorlds()
    }, [])

    return (
        <div className='worldsContainer'>
            {worlds && worlds.map(world => {
                return <WorldCard key={world.ID} 
                    world={world}
                    setModalOpen={setModalOpen}
                    setWorldToDelete={setWorldToDelete} 
                    setWorldIDToDelete={setWorldIDToDelete}
                />
            })}
        </div>
    )
}


export default Worlds
