import WorldCard from './WorldCard'
import './worlds.css'
import { World } from '../../types'

// TODO: type safety props
function Worlds({worlds, setModalOpen, setWorldToDelete, setWorldIDToDelete}: any) {

    return (
        <div className='worldsContainer'>
            {worlds && worlds.map((world: World) => {
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
